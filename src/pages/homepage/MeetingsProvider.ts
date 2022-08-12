import {MeetingListMenuItemProps} from "./components/sections/meetingslistmenusection/MeetingsListMenuItem";
import formatDateForPresentation from "../../global/tools/StringTools";

async function getUsersMeetings(accessToken: string): Promise<Array<MeetingListMenuItemProps>> {

    try {

        let meetings: Array<MeetingListMenuItemProps> = [];

        const response = await fetch("/api/get/all-basic-meetings", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const meetings_data = await response;
        const json_message = await meetings_data.json();

        console.log(json_message.message);

        json_message.message.forEach((meeting: { meeting_id: any; meeting_title: any; number_of_attendees: any; meeting_date: any }) => {
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