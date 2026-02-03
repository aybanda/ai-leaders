
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
    // Trim credentials just in case there's accidental whitespace from GitHub Secrets
    const apiKey = import.meta.env.VITE_CAMPAIGN_MONITOR_API_KEY?.trim();
    const listId = import.meta.env.VITE_CAMPAIGN_MONITOR_LIST_ID?.trim();

    if (import.meta.env.VITE_DISABLE_CAMPAIGN_MONITOR === 'true') {
        return;
    }

    if (!apiKey || !listId) {
        console.warn('[Campaign Monitor] Missing credentials. Check GitHub Secrets.');
        return;
    }

    try {
        console.log(`[Campaign Monitor] Syncing ${data.email}...`);

        const authHeader = btoa(`${apiKey}:x`);

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

        // Trying a different proxy that is often more reliable for POST requests with custom headers
        const proxyUrl = `https://thingproxy.freeboard.io/fetch/${apiUrl}`;

        console.log(`[Campaign Monitor] Requesting via ThingProxy...`);

        // We use a shorter timeout for this attempt
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            const response = await fetch(proxyUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${authHeader}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });

            clearTimeout(timeoutId);
            console.log(`[Campaign Monitor] Received status: ${response.status}`);

            if (!response.ok) {
                const errorBody = await response.text();
                console.error(`[Campaign Monitor] Error (${response.status}):`, errorBody);
            } else {
                console.log('[Campaign Monitor] Sync complete!');
            }
        } catch (fetchError: any) {
            if (fetchError.name === 'AbortError') {
                console.error('[Campaign Monitor] Timeout reached. The proxy might be down or blocked.');
            } else {
                throw fetchError;
            }
        }

    } catch (error: any) {
        console.error('[Campaign Monitor] Critical Failure:', error.message || error);
    }
};
