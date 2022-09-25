import {MeetingListMenuItemProps} from "../../components/pages/homepage/subcomponents/meetingslistmenusection/MeetingsListMenuItem";
import formatDateForPresentation from "../../global/tools/StringTools";
import Constants from "../../global/Constants";
import make_request from "../ApiRequester";
import HttpMethod from "../HttpMethod";

async function getUsersMeetings(accessToken: string): Promise<Array<MeetingListMenuItemProps>> {

    try {

        let meetings: Array<MeetingListMenuItemProps> = [];

        const json_message = await make_request(Constants.API_ROUTE_GET_ALL_MEETINGS, accessToken, HttpMethod.GET);

        json_message.forEach((meeting: { meeting_id: any; meeting_title: any; number_of_attendees: any; meeting_date: any }) => {
            meetings.push({
                meetingID: meeting.meeting_id,
                meetingTitle: meeting.meeting_title,
                meetingDate: formatDateForPresentation(meeting.meeting_date),
                numberOfPeople: meeting.number_of_attendees
            });
        });

        return meetings;
    } catch (e: any) {
        console.log(e.message);
        return []
    }
}

export default getUsersMeetings;
