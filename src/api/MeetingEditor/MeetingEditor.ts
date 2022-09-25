import {validateSqlLongText, validateSqlText} from "../../global/tools/ValidationTools";
import HttpMethod from "../HttpMethod";
import Constants from "../../global/Constants";
import make_request from "../ApiRequester";

export default async function editMeeting(accessToken: Promise<string>, meetingId: string, meetingTitle: string, meetingDescription: string,
                             meetingDate: string) {

    try {
        const token: string = await accessToken

        if (validateSqlText(meetingTitle) && validateSqlLongText(meetingDescription)) {
            // const result = await fetch("/update/meeting-details", {
            //     method: "POST",
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         "meeting_id": meetingId,
            //         "meeting_title": meetingTitle,
            //         "meeting_description": meetingDescription,
            //         "meeting_date": meetingDate,
            //     })
            // });

            const body = JSON.stringify({
                "meeting_id": meetingId,
                "meeting_title": meetingTitle,
                "meeting_description": meetingDescription,
                "meeting_date": meetingDate,
            });

            const response = await make_request(Constants.API_ROUTE_UPDATE_MEETING, token, HttpMethod.POST, body);

        } else {
            console.log("Invalid Params");
        }
    } catch (e: any) {
        console.log(e.message);
    }
}
