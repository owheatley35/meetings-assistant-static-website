// TODO: Update fetch URL to new endpoint (and authentication)
async function deleteMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNoteIndex: number) {
    try {
        const token: string = await accessToken

         await fetch("/api/delete/meeting-note", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "meeting_id": meetingId,
                "note_index": meetingNoteIndex
            })
        });

    } catch (e: any) {
        // TODO: Show Failure message to the user.
        console.log(e.message);
    }
}

export default deleteMeetingNote
