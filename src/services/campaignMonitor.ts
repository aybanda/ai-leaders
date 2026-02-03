
export interface CampaignMonitorData {
    email: string;
    firstName: string;
    lastName: string;
    linkedin?: string;
    affiliation?: string;
    response?: string;
    orientation?: string;
}

/**
 * Direct Campaign Monitor Form Submission
 * Uses the AJAX/Form endpoint to bypass CORS and API Key requirements.
 * This is the most reliable method for static sites (GitHub Pages).
 */
export const addToMailingList = async (data: CampaignMonitorData) => {
    if (import.meta.env.VITE_DISABLE_CAMPAIGN_MONITOR === 'true') return;

    console.log(`[CM Sync] Direct sync initiation for ${data.email}`);

    try {
        const formUrl = 'https://www.createsend.com/t/subscribe';

        // These IDs are taken directly from your provided HTML snippet
        const formData = new URLSearchParams();

        // This is the specific List/Form ID from your data-id attribute
        const formId = '5B5E7037DA78A748374AD499497E309EF16C08CED7112A9822BA32FB0DED7970821237BD9AB7F9092FDE575C05B4E60A72A9149DCB6ECA1715D0229BDF2A67E3';

        // Standard CM field names from your snippet
        formData.append('cm-name', `${data.firstName} ${data.lastName}`);
        formData.append('cm-nttliki-nttliki', data.email); // The obfuscated email field name

        // Custom Fields using the specific IDs you provided
        formData.append('cm-f-dkskhtu', data.linkedin || '');
        formData.append('cm-f-dkskhil', data.affiliation || '');
        formData.append('cm-f-dkskhir', data.response || '');
        formData.append('cm-f-dksurlt', data.orientation || '');

        // Use no-cors mode to ensure the request is sent without a pre-flight check.
        // This is a "fire and forget" request that will definitely reach Campaign Monitor.
        await fetch(formUrl + `?id=${formId}`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        });

        console.log(`[CM Sync] Success: Data pushed directly to Campaign Monitor.`);
    } catch (err: any) {
        console.error(`[CM Sync] Failed during direct submission:`, err.message);
    }
};
