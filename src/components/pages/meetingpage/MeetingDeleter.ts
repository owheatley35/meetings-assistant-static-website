// TODO: Update fetch URL to new endpoint (and authentication)
async function meetingDeleter(accessToken: Promise<string>, meetingId: number): Promise<boolean> {
    try {
        const token: string = await accessToken

         const response = await fetch("/api/delete/meeting", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "meeting_id": meetingId,
            })
        });

        const newResponse = await response.json()

        return newResponse.response_status

    } catch (e: any) {
        console.log(e.message);
        return false;
    }
}

export default meetingDeleter
