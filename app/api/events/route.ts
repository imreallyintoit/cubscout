import { NextResponse } from "next/server";
import { fetchSheetEvents, DEMO_EVENTS } from "@/lib/googleSheets";

export const runtime = "edge";
export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID;
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const tab = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_TAB ?? "Events";

  if (!spreadsheetId || !apiKey) {
    // Return demo data when Google Sheets is not configured
    return NextResponse.json({ events: DEMO_EVENTS, source: "demo" });
  }

  try {
    const events = await fetchSheetEvents(spreadsheetId, apiKey, tab);
    return NextResponse.json({ events, source: "sheets" });
  } catch (err) {
    console.error("Failed to fetch Google Sheets events:", err);
    // Graceful fallback to demo data
    return NextResponse.json(
      { events: DEMO_EVENTS, source: "demo", error: "Could not reach Google Sheets; showing demo events." },
      { status: 200 }
    );
  }
}
