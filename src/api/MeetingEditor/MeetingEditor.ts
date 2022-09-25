import {validateSqlLongText, validateSqlText} from "../../global/tools/ValidationTools";
import HttpMethod from "../HttpMethod";
import Constants from "../../global/Constants";
import make_request from "../ApiRequester";
import logger from "../../global/helper/LoggingHelper";

/**
 * Edit the information describing a meeting
 *
 * @param accessToken string token provided by Auth0
 * @param meetingId string meeting id
 * @param meetingTitle string title of the meeting
 * @param meetingDescription string description of the meeting
 * @param meetingDate string date of meeting
 *
 * @return {boolean} success or failure
 */
async function editMeeting(accessToken: Promise<string>, meetingId: string, meetingTitle: string, meetingDescription: string,
                             meetingDate: string): Promise<boolean> {

    try {
        const token: string = await accessToken

        // Complete front end validation of data, don't allow request if invalid. Completing checks here, additionally to the backend, decreases latency.
        if (validateSqlText(meetingTitle) && validateSqlLongText(meetingDescription)) {

            const body = JSON.stringify({
                "meeting_id": meetingId,
                "meeting_title": meetingTitle,
                "meeting_description": meetingDescription,
                "meeting_date": meetingDate,
            });

            const response = await make_request(Constants.API_ROUTE_UPDATE_MEETING, token, HttpMethod.POST, body);

            return response.response_status;

        } else {
            logger.log("Invalid Params");
            return false;
        }
    } catch (e: any) {
        logger.log(e.message);
        return false;
    }
}

export default editMeeting;
