
export interface CampaignMonitorData {
    email: string;
    firstName: string;
    lastName: string;
    linkedin?: string;
    affiliation?: string;
    response?: string;
    orientation?: string;
}

export const addToMailingList = async (data: CampaignMonitorData) => {
    const apiKey = import.meta.env.VITE_CAMPAIGN_MONITOR_API_KEY;
    const listId = import.meta.env.VITE_CAMPAIGN_MONITOR_LIST_ID;

    if (import.meta.env.VITE_DISABLE_CAMPAIGN_MONITOR === 'true') {
        console.info('Campaign Monitor subscription is disabled (VITE_DISABLE_CAMPAIGN_MONITOR=true). Skipping.');
        return;
    }

    if (!apiKey || !listId) {
        console.warn('Campaign Monitor credentials missing. Please check your GitHub secrets and deploy workflow.');
        return;
    }

    try {
        const auth = btoa(`${apiKey}:x`);

        const payload = {
            "EmailAddress": data.email,
            "Name": `${data.firstName} ${data.lastName}`,
            "CustomFields": [
                { "Key": "linkedIn", "Value": data.linkedin || "" },
                { "Key": "affiliation", "Value": data.affiliation || "" },
                { "Key": "task", "Value": data.response || "" },
                { "Key": "orientation", "Value": data.orientation || "" }
            ],
            "Resubscribe": true,
            "RestartSubscriptionBasedAutoresponders": true,
            "ConsentToTrack": "Yes"
        };

        const apiUrl = `https://api.createsend.com/api/v3.3/subscribers/${listId}.json`;
        // Using a reliable CORS proxy
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

        console.log(`Syncing ${data.email} to Campaign Monitor...`);

        const response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Campaign Monitor API Error (${response.status}):`, errorText);

            if (response.status === 401) {
                console.warn('Unauthorized: Please double-check that your Campaign Monitor API Key is correct.');
            } else if (response.status === 400) {
                console.warn('Bad Request: One or more custom fields (linkedIn, affiliation, task, orientation) might not be configured in your list.');
            }
        } else {
            console.log('Successfully synced with Campaign Monitor');
        }
    } catch (error) {
        console.error('Network error during Campaign Monitor sync:', error);
    }
};
