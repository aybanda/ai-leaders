export interface NotificationData {
    firstName: string;
    lastName: string;
    email: string;
    linkedin: string;
    affiliation: string;
    affiliationOther?: string;
    response: string;
    scores: {
        curiosity: number;
        clarity: number;
        motivation: number;
        experience: number;
    };
    status: 'ACCEPTED';
}


export interface OrientationData {
    firstName: string;
    lastName: string;
    email: string;
    selection: string;
}


export const sendNotification = async (data: NotificationData): Promise<boolean> => {
    const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn('Slack Webhook URL not configured (VITE_SLACK_WEBHOOK_URL)');
        return false;
    }

    try {
        const payload = {
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🎉 New Qualified Applicant!",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Name:*\n${data.firstName} ${data.lastName}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Email:*\n${data.email}`
                        }
                    ]
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Affiliation:*\n${data.affiliation === 'Other' ? data.affiliationOther : data.affiliation}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*LinkedIn:*\n${data.linkedin}`
                        }
                    ]
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Scores:*`
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Curiosity:* ${data.scores.curiosity}/100`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Clarity:* ${data.scores.clarity}/100`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Motivation:* ${data.scores.motivation}/100`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Experience:* ${data.scores.experience}/100`
                        }
                    ]
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Response:*\n>${data.response.replace(/\n/g, "\n>")}`
                    }
                }
            ]
        };

        // Use no-cors mode to bypass CORS restrictions for client-side requests.
        // Note: This results in an opaque response, so we can't check response.ok or status.
        // We assume success if the fetch doesn't throw.
        await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // Slack accepts this and parses the body
            },
            body: JSON.stringify(payload)
        });

        // With no-cors, we can't verify success, but it avoids the browser blocking the request.
        return true;
    } catch (error) {
        console.error('Error sending notification:', error);
        return false;
    }
};

export const sendOrientationSelection = async (data: OrientationData): Promise<boolean> => {
    const webhookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn('Slack Webhook URL not configured (VITE_SLACK_WEBHOOK_URL)');
        return false;
    }

    try {
        const payload = {
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "📅 New Orientation Registration",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*Name:*\n${data.firstName} ${data.lastName}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*Email:*\n${data.email}`
                        }
                    ]
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Orientation Selection:*\n${data.selection}`
                    }
                }
            ]
        };

        await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(payload)
        });

        return true;
    } catch (error) {
        console.error('Error sending orientation notification:', error);
        return false;
    }
};

