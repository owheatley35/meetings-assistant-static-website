import validateNoteText from "../../global/tools/ValidationTools";
import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";
import logger from "../../global/helper/LoggingHelper";

/**
 * Create a new note for a meeting.
 *
 * @param accessToken string access token provided by Auth0
 * @param meetingId number of meeting ID
 * @param meetingNote string Content of the new note
 */
async function createNewMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNote: string) {
    try {
        const token: string = await accessToken

        if (validateNoteText(meetingNote)) {

            const body = JSON.stringify({
                        "meeting_id": meetingId,
                        "note_content": meetingNote,
                    });
            const response = await make_request(Constants.API_ROUTE_CREATE_MEETING_NOTE, token, HttpMethod.POST, body);
            return response.response_status
        } else {
            logger.log("Invalid Params");
            return false;
        }
    } catch (e: any) {
        logger.log(e.message);
        return false;
    }
}

export default createNewMeetingNote

