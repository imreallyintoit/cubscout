export interface SheetEvent {
  date: string;       // YYYY-MM-DD
  title: string;
  startTime: string;  // e.g. "7:00 PM"
  endTime: string;    // e.g. "8:30 PM"
  location: string;
  description: string;
  category: "Meeting" | "Camp" | "Activity" | "Service" | "Other";
}

/**
 * Fetch events from a public Google Sheet.
 *
 * Expected sheet columns (row 1 = header):
 *   A: Date (YYYY-MM-DD)
 *   B: Title
 *   C: Start Time
 *   D: End Time
 *   E: Location
 *   F: Description
 *   G: Category
 *
 * The sheet must be published to the web (File → Share → Publish to web).
 */
export async function fetchSheetEvents(
  spreadsheetId: string,
  apiKey: string,
  tab = "Events"
): Promise<SheetEvent[]> {
  const range = encodeURIComponent(`${tab}!A2:G200`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour
  if (!res.ok) {
    throw new Error(`Google Sheets API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const rows: string[][] = data.values ?? [];

  return rows
    .filter((row) => row[0] && row[1]) // must have date + title
    .map((row) => ({
      date: row[0]?.trim() ?? "",
      title: row[1]?.trim() ?? "",
      startTime: row[2]?.trim() ?? "",
      endTime: row[3]?.trim() ?? "",
      location: row[4]?.trim() ?? "",
      description: row[5]?.trim() ?? "",
      category: (row[6]?.trim() as SheetEvent["category"]) ?? "Other",
    }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

/** Fallback demo events shown when no Google Sheets is configured. */
export const DEMO_EVENTS: SheetEvent[] = [
  {
    date: "2026-09-08",
    title: "Welcome Back Pack Meeting",
    startTime: "7:00 PM",
    endTime: "8:30 PM",
    location: "Central Elementary, Wilmette",
    description: "Kick off the new Scout year! Meet your den leaders and learn about upcoming adventures.",
    category: "Meeting",
  },
  {
    date: "2026-09-20",
    title: "Den Meetings Begin",
    startTime: "Varies",
    endTime: "",
    location: "Various Locations",
    description: "All dens start their regular bi-weekly meeting schedule. Check with your den leader for specific times.",
    category: "Meeting",
  },
  {
    date: "2026-10-05",
    title: "Hike at Illinois Beach State Park",
    startTime: "9:00 AM",
    endTime: "2:00 PM",
    location: "Illinois Beach State Park, Zion, IL",
    description: "A family-friendly hike along the Lake Michigan shoreline. Bring a sack lunch and water.",
    category: "Activity",
  },
  {
    date: "2026-10-13",
    title: "October Pack Meeting",
    startTime: "7:00 PM",
    endTime: "8:30 PM",
    location: "Central Elementary, Wilmette",
    description: "Monthly pack meeting. Rank advancements and badge ceremonies.",
    category: "Meeting",
  },
  {
    date: "2026-11-01",
    title: "Community Service: Wilmette Food Pantry",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    location: "Wilmette Community Center",
    description: "Scouts help sort and pack donations at the local food pantry. A great service project for the whole family.",
    category: "Service",
  },
  {
    date: "2026-11-10",
    title: "Pack Meeting — Veterans Day Tribute",
    startTime: "7:00 PM",
    endTime: "8:30 PM",
    location: "Central Elementary, Wilmette",
    description: "We honor local veterans and Scouts share what service means to them.",
    category: "Meeting",
  },
  {
    date: "2026-12-08",
    title: "December Pack Meeting & Holiday Party",
    startTime: "7:00 PM",
    endTime: "9:00 PM",
    location: "TBD",
    description: "Annual holiday gathering with Scout recognition, games, and refreshments.",
    category: "Activity",
  },
  {
    date: "2027-01-24",
    title: "Pinewood Derby Workshop",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    location: "Pack 5 Garage Workshop",
    description: "Car-building workshop. Bring your kit and tools! Adult supervision provided.",
    category: "Activity",
  },
  {
    date: "2027-02-07",
    title: "Pinewood Derby Race Day",
    startTime: "1:00 PM",
    endTime: "4:00 PM",
    location: "Wilmette Park District Community House",
    description: "The big race! All families welcome. Fastest 3 cars advance to district.",
    category: "Activity",
  },
  {
    date: "2027-03-14",
    title: "Overnight Camp: Owasippe",
    startTime: "Sat 9:00 AM",
    endTime: "Sun 12:00 PM",
    location: "Camp Owasippe, Twin Lake, MI",
    description: "Spring overnight camping trip. Scouts learn fire safety, archery, and Leave No Trace principles.",
    category: "Camp",
  },
  {
    date: "2027-04-12",
    title: "Spring Camporee",
    startTime: "8:00 AM",
    endTime: "5:00 PM",
    location: "Reneker Park, Wilmette",
    description: "District-wide Camporee with activities, competition, and fun in the sun.",
    category: "Camp",
  },
  {
    date: "2027-05-18",
    title: "Crossover & Blue & Gold Banquet",
    startTime: "6:00 PM",
    endTime: "8:30 PM",
    location: "Wilmette Park District Community House",
    description: "Annual Blue & Gold Banquet celebrating the year's achievements. Arrow of Light Scouts cross over to Scouts BSA.",
    category: "Activity",
  },
];
