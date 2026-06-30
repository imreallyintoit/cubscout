# Setting Up the Google Sheets Calendar

The Pack 5 calendar pulls events automatically from a Google Sheet you control.
No coding is needed after setup — just edit the sheet and the website updates within an hour.

## Step 1: Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name the first tab **Events** (exactly).
3. Add these column headers in **row 1**:

| A    | B     | C          | D        | E        | F           | G        |
|------|-------|------------|----------|----------|-------------|----------|
| Date | Title | Start Time | End Time | Location | Description | Category |

4. Add events starting in **row 2**. Use the format:
   - **Date**: `YYYY-MM-DD` (e.g. `2026-09-08`)
   - **Category**: one of `Meeting`, `Camp`, `Activity`, `Service`, `Other`

**Example rows:**
```
2026-09-08 | Welcome Back Pack Meeting | 7:00 PM | 8:30 PM | Central Elementary | Kick off the new Scout year! | Meeting
2026-10-05 | Fall Hike                 | 9:00 AM | 2:00 PM | Illinois Beach SP  | Family hike along the lake   | Activity
```

## Step 2: Get a Google Sheets API Key

1. Go to [console.cloud.google.com](https://console.cloud.google.com/).
2. Create a new project (or use an existing one).
3. Go to **APIs & Services → Library**, search for "Google Sheets API", and enable it.
4. Go to **APIs & Services → Credentials** → **Create Credentials → API Key**.
5. Click **Restrict Key**:
   - Under **API restrictions**, select "Google Sheets API" only.
   - Under **Application restrictions**, add your website's domain (e.g. `pack5wilmette.org`).
6. Copy the API key.

## Step 3: Get Your Spreadsheet ID

Your spreadsheet URL looks like:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms/edit
```
The long string between `/d/` and `/edit` is your **Spreadsheet ID**.

## Step 4: Configure the Website

1. In your project folder, copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and fill in your values:
   ```
   GOOGLE_SHEETS_API_KEY=AIza...yourkey...
   NEXT_PUBLIC_GOOGLE_SHEETS_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
   NEXT_PUBLIC_GOOGLE_SHEETS_TAB=Events
   ```
3. Redeploy the site (or restart the dev server).

## Step 5: Publish the Sheet

For the API to read the sheet, make it viewable:
1. In Google Sheets, go to **File → Share → Publish to web**.
2. Select the **Events** sheet and click **Publish**.
3. (Optional) Check "Automatically republish when changes are made."

## Updating Events

From now on, just edit the Google Sheet:
- Add new rows for new events.
- Edit existing rows to update details.
- Delete a row to remove an event.
- The website refreshes automatically every **60 minutes**.

## Cache Refresh

If you need the site to reflect changes immediately (before the 1-hour cache expires),
redeploy the site or trigger a manual revalidation by restarting the server.

---

*Questions? Contact the Pack 5 webmaster at pack5wilmette@gmail.com*
