import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";
import logger from "../../global/helper/LoggingHelper";

/**
 * Call API to delete the meeting endpoint.
 * @param accessToken string Access Token provided by Auth0
 * @param meetingId number id of user provided by Auth0
 *
 * @return boolean Success or Failure in operation
 */
async function meetingDeleter(accessToken: Promise<string>, meetingId: number): Promise<boolean> {
    try {
        const token: string = await accessToken

        const body = JSON.stringify({
            "meeting_id": meetingId,
        });

        const response = await make_request(Constants.API_ROUTE_DELETE_MEETING, token, HttpMethod.POST, body)

        return response.response_status

    } catch (e: any) {
        logger.log(e.message);
        return false;
    }
}

export default meetingDeleter
