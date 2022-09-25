import validateNoteText from "../../global/tools/ValidationTools";
import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";

// TODO: Update fetch URL to new endpoint (and authentication)
async function createNewMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNote: string) {
    try {
        const token: string = await accessToken

        if (validateNoteText(meetingNote)) {
            //  await fetch("/create/meeting-note", {
            //     method: "POST",
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         "meeting_id": meetingId,
            //         "note_content": meetingNote,
            //     })
            // });

            const body = JSON.stringify({
                        "meeting_id": meetingId,
                        "note_content": meetingNote,
                    });
            const response = await make_request(Constants.API_ROUTE_CREATE_MEETING_NOTE, token, HttpMethod.POST, body);
        } else {
            // TODO: Show message to the user
            console.log("Invalid Params");
        }
    } catch (e: any) {
        // TODO: Show a message to the user
        console.log(e.message);
    }
}

export default createNewMeetingNote

