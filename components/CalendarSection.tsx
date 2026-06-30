"use client";

import { useEffect, useState } from "react";
import type { SheetEvent } from "@/lib/googleSheets";

const CATEGORY_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Meeting:  { bg: "bg-blue-100",   text: "text-blue-800",   dot: "bg-blue-500" },
  Camp:     { bg: "bg-green-100",  text: "text-green-800",  dot: "bg-green-500" },
  Activity: { bg: "bg-yellow-100", text: "text-yellow-800", dot: "bg-yellow-500" },
  Service:  { bg: "bg-purple-100", text: "text-purple-800", dot: "bg-purple-500" },
  Other:    { bg: "bg-gray-100",   text: "text-gray-700",   dot: "bg-gray-400" },
};

function formatDate(iso: string): { month: string; day: string; weekday: string } {
  try {
    const d = new Date(iso + "T12:00:00");
    return {
      month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      day: String(d.getDate()),
      weekday: d.toLocaleString("en-US", { weekday: "short" }),
    };
  } catch {
    return { month: "", day: iso, weekday: "" };
  }
}

function EventCard({ event }: { event: SheetEvent }) {
  const styles = CATEGORY_STYLES[event.category] ?? CATEGORY_STYLES.Other;
  const { month, day, weekday } = formatDate(event.date);

  return (
    <div className="card flex gap-4 hover:shadow-lg transition-shadow group">
      {/* Date block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center bg-scout-blue-900 text-white rounded-xl w-14 h-14">
        <span className="text-xs font-bold text-blue-300">{month}</span>
        <span className="text-xl font-extrabold leading-none">{day}</span>
        <span className="text-xs text-blue-300">{weekday}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h4 className="font-bold text-scout-blue-900 group-hover:text-scout-blue-700 transition-colors leading-snug">
            {event.title}
          </h4>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${styles.bg} ${styles.text}`}
          >
            {event.category}
          </span>
        </div>

        {(event.startTime || event.location) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-500">
            {event.startTime && (
              <span className="flex items-center gap-1">
                🕐 {event.startTime}{event.endTime ? ` – ${event.endTime}` : ""}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-1">
                📍 {event.location}
              </span>
            )}
          </div>
        )}

        {event.description && (
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  const [events, setEvents] = useState<SheetEvent[]>([]);
  const [source, setSource] = useState<"sheets" | "demo" | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => {
        setEvents(data.events ?? []);
        setSource(data.source);
        if (data.error) setError(data.error);
      })
      .catch(() => setError("Unable to load events."))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["All", ...Array.from(new Set(events.map((e) => e.category))).sort()];
  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  // Group events by month
  const byMonth: Record<string, SheetEvent[]> = {};
  for (const ev of filtered) {
    const key = ev.date.slice(0, 7); // YYYY-MM
    if (!byMonth[key]) byMonth[key] = [];
    byMonth[key].push(ev);
  }

  const monthLabel = (ym: string) => {
    const [y, m] = ym.split("-");
    const d = new Date(Number(y), Number(m) - 1, 1);
    return d.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <section id="calendar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Event Calendar</h2>
          <p className="section-subheading">
            Stay up to date on Pack 5 meetings, campouts, and activities. This calendar updates
            automatically from our shared Google Sheet.
          </p>
        </div>

        {/* Source badge */}
        {source && (
          <div className="flex justify-center mb-6">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                source === "sheets"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {source === "sheets"
                ? "✅ Live from Google Sheets"
                : "📋 Showing sample events — connect your Google Sheet to go live"}
            </span>
          </div>
        )}

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                filter === cat
                  ? "bg-scout-blue-900 text-white border-scout-blue-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-scout-blue-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events list */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3 animate-pulse">📅</div>
            <p>Loading events…</p>
          </div>
        ) : error && filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">⚠️</div>
            <p>{error}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🏕️</div>
            <p>No events in this category. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(byMonth).map(([ym, evs]) => (
              <div key={ym}>
                <h3 className="text-lg font-bold text-scout-blue-900 border-b border-gray-200 pb-2 mb-4">
                  {monthLabel(ym)}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {evs.map((ev, i) => (
                    <EventCard key={`${ev.date}-${i}`} event={ev} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Google Sheets setup callout */}
        <div className="mt-14 bg-scout-blue-900 rounded-2xl p-8 text-white">
          <h3 className="text-lg font-bold text-scout-gold mb-2">
            📊 Connecting Your Google Sheet
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed mb-4">
            Pack leaders can update the calendar by editing the shared Google Sheet. No coding
            required. Once connected, the website automatically refreshes every hour.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {[
              {
                step: "1",
                text: "Create a Google Sheet with columns: Date, Title, Start Time, End Time, Location, Description, Category",
              },
              {
                step: "2",
                text: 'Set GOOGLE_SHEETS_API_KEY and NEXT_PUBLIC_GOOGLE_SHEETS_ID in your .env.local file (see .env.example)',
              },
              {
                step: "3",
                text: "Publish the sheet (File → Share → Publish to web) and add events. The site auto-updates every hour.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white/10 rounded-xl p-4">
                <span className="text-scout-gold font-black text-lg">Step {s.step}</span>
                <p className="text-blue-200 text-xs mt-1 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
