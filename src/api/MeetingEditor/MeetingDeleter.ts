// TODO: Update fetch URL to new endpoint (and authentication)
import make_request from "../ApiRequester";
import Constants from "../../global/Constants";
import HttpMethod from "../HttpMethod";

async function meetingDeleter(accessToken: Promise<string>, meetingId: number): Promise<boolean> {
    try {
        const token: string = await accessToken

        //  const response = await fetch("/delete/meeting", {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "meeting_id": meetingId,
        //     })
        // });

        const body = JSON.stringify({
            "meeting_id": meetingId,
        });

        const response = await make_request(Constants.API_ROUTE_DELETE_MEETING, token, HttpMethod.POST, body)

        return response.response_status

    } catch (e: any) {
        console.log(e.message);
        return false;
    }
}

export default meetingDeleter
