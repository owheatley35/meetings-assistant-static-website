import validateNoteText from "../../global/tools/ValidationTools";
import Constants from "../../global/Constants";
import make_request from "../ApiRequester";
import HttpMethod from "../HttpMethod";
import logger from "../../global/helper/LoggingHelper";

async function updateMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNoteIndex: number, meetingNote: string) {
    try {
        const token: string = await accessToken

        if (validateNote(meetingNoteIndex, meetingNote)) {

             const body = JSON.stringify({
                 "meeting_id": meetingId,
                 "note_content": meetingNote,
                 "note_index": meetingNoteIndex
             });

             const response = await make_request(Constants.API_ROUTE_UPDATE_MEETING_NOTE, token, HttpMethod.POST, body);

        } else {
            // TODO: Provide a message to the user.
            logger.log("Invalid Params");
        }
    } catch (e: any) {
        // TODO: Provide a fail message to the user.
        logger.log(e.message);
    }
}

export function validateNote(meetingNoteIndex: number, meetingNote: string): boolean {
    return (meetingNoteIndex >= 0) && validateNoteText(meetingNote)
}

export default updateMeetingNote
