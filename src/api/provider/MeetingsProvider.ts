import {MeetingListMenuItemProps} from "../../components/pages/homepage/subcomponents/meetingslistmenusection/MeetingsListMenuItem";
import formatDateForPresentation from "../../global/tools/StringTools";
import Constants from "../../global/Constants";
import {formatAPIUrl} from "./ProviderConfigurator";
import identifyStage from "../StageChecker";

async function getUsersMeetings(accessToken: string): Promise<Array<MeetingListMenuItemProps>> {

    try {

        let meetings: Array<MeetingListMenuItemProps> = [];

        const apiUrl = formatAPIUrl(identifyStage(window.location.origin), Constants.API_ROUTE_GET_ALL_MEETINGS)

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Origin': window.location.origin
            },
        });

        const meetings_data = await response;
        const json_message = await meetings_data.json();

        console.log(json_message)
        console.log(json_message.message);

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
