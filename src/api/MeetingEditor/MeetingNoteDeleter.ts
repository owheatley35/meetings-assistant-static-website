import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";
import logger from "../../global/helper/LoggingHelper";
import isResponseValid from "../../global/tools/ResponseChecker";

async function deleteMeetingNote(accessToken: Promise<string>, meetingId: number, meetingNoteIndex: number) {
    try {
        const token: string = await accessToken

        const body = JSON.stringify({
            "meeting_id": meetingId,
            "note_index": meetingNoteIndex
        });

        const response = await make_request(Constants.API_ROUTE_DELETE_MEETING_NOTE, token, HttpMethod.POST, body);
        return isResponseValid(response);

    } catch (e: any) {
        logger.log(e.message);
    }
}

export default deleteMeetingNote
