import make_request from "../ApiRequester";
import HttpMethod from "../HttpMethod";
import Constants from "../../global/Constants";
import logger from "../../global/helper/LoggingHelper";

async function getUserRole(accessTokenPromise: Promise<string>): Promise<string> {

    try {

        const accessToken = await accessTokenPromise;

        const response = await make_request(Constants.API_ROUTE_GET_USER_ROLE, accessToken, HttpMethod.POST);

        if (response.response_status) {
            return response.response
        } else {
            return "role:standard"
        }

    } catch (e: any) {
        logger.log(e.message);
        return ""
    }
}

export default getUserRole
