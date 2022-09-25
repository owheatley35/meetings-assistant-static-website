import {validateSqlLongText, validateSqlText} from "../global/tools/ValidationTools";
import {formatAPIUrl} from "./provider/ProviderConfigurator";
import identifyStage from "./StageChecker";
import Constants from "../global/Constants";
import logger from "../global/helper/LoggingHelper";
import isResponseValid from "../global/tools/ResponseChecker";
import make_request from "./ApiRequester";
import HttpMethod from "./HttpMethod";

/**
 * Call API to create a new meeting.
 *
 * @param accessToken string Access Token provided by Auth0
 * @param meetingTitle string Meeting title
 * @param meetingDescription string meeting description
 * @param meetingDate string date of meeting
 * @param meetingTime string time of meeting (HH:MM)
 * @param meetingAttendees string comma seperated list of attendee names
 *
 * @return boolean describing success or failure
 */
async function createMeeting(accessToken: Promise<string>, meetingTitle: string, meetingDescription: string,
                             meetingDate: string, meetingTime: string, meetingAttendees: string): Promise<boolean> {
    try {
        const token: string = await accessToken

        if (validateSqlText(meetingTitle) && validateSqlLongText(meetingDescription) && validateSqlLongText(meetingAttendees)) {

            const apiUrl = formatAPIUrl(identifyStage(window.location.origin), Constants.API_ROUTE_CREATE_MEETING);

             const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                    'Origin': window.location.origin
                },
                body: JSON.stringify({
                    "meeting_title": meetingTitle,
                    "meeting_description": meetingDescription,
                    "meeting_date": meetingDate,
                    "meeting_time": meetingTime,
                    "meeting_attendees": meetingAttendees
                })
            });

            // const body = JSON.stringify({
            //     "meeting_title": meetingTitle,
            //     "meeting_description": meetingDescription,
            //     "meeting_date": meetingDate,
            //     "meeting_time": meetingTime,
            //     "meeting_attendees": meetingAttendees
            // });
            //
            // const response = make_request(Constants.API_ROUTE_CREATE_MEETING, token, HttpMethod.POST, body);
            return isResponseValid(response);
        } else {
            logger.log("Invalid Params");
            return false;
        }
    } catch (e: any) {
        logger.log(e.message);
        return false;
    }
}

export default createMeeting;
