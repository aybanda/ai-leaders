export interface GoogleSheetData {
    email: string;
    firstName: string;
    lastName: string;
    linkedin?: string;
    affiliation?: string;
    response?: string;
    orientation?: string;
}

/**
 * Sends data to a Google Sheet via a deployed Google Apps Script Web App.
 * 
 * Setup:
 * 1. Create a Google Sheet.
 * 2. Extensions > Apps Script.
 * 3. Paste the doPost(e) code provided in the implementation plan.
 * 4. Deploy > New Deployment > Web App > Access: Anyone.
 * 5. Add the URL to VITE_GOOGLE_SHEETS_WEBHOOK_URL.
 */
export const syncToGoogleSheet = async (data: GoogleSheetData) => {
    // Check if feature is disabled
    if (import.meta.env.VITE_DISABLE_GOOGLE_SHEETS === 'true') {
        console.log('[Google Sheets] Disabled via env var.');
        return;
    }

    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

    if (!scriptUrl) {
        console.warn('[Google Sheets] Missing Webhook URL (VITE_GOOGLE_SHEETS_WEBHOOK_URL). Data was not synced.');
        return;
    }

    console.log(`[Google Sheets] Syncing ${data.email}...`);

    try {
        // We use no-cors mode because Google Apps Script redirects to a different domain,
        // which causes CORS issues in 'cors' mode. 'no-cors' allows the request to succeed
        // silently (response type is 'opaque').
        await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('[Google Sheets] Sync request sent successfully.');

    } catch (error) {
        console.error('[Google Sheets] Sync failed:', error);
    }
};
