// TODO: Update fetch URL to new endpoint (and authentication)
import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";

async function deleteMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNoteIndex: number) {
    try {
        const token: string = await accessToken

        //  await fetch("/delete/meeting-note", {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "meeting_id": meetingId,
        //         "note_index": meetingNoteIndex
        //     })
        // });

        const body = JSON.stringify({
            "meeting_id": meetingId,
            "note_index": meetingNoteIndex
        });

        const response = await make_request(Constants.API_ROUTE_DELETE_MEETING_NOTE, token, HttpMethod.POST, body);

    } catch (e: any) {
        // TODO: Show Failure message to the user.
        console.log(e.message);
    }
}

export default deleteMeetingNote
