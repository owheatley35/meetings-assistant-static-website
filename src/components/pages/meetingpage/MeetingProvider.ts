import {MeetingListMenuItemProps} from "../homepage/subcomponents/meetingslistmenusection/MeetingsListMenuItem";
import formatDateForPresentation from "../../../global/tools/StringTools";
import Constants from "../../../global/Constants";

export interface MeetingInfo extends MeetingListMenuItemProps {
    readonly meetingTranscript: string,
    readonly meetingNotes: string
}

// TODO: Update fetch URL to new endpoint (and authentication)
async function getMeetingById(accessToken: string, meetingId: number): Promise<MeetingInfo> {
    try {
        const response = await fetch("/api/get/meeting-from-id", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "meeting_id": meetingId
            })
        });

        const meetings_data = await response;
        const json_data = await meetings_data.json();

        console.log(json_data.meeting);

        const meeting = json_data.meeting

        return {
            meetingID: meeting.meeting_id,
            meetingTitle: meeting.meeting_title,
            meetingDate: formatDateForPresentation(meeting.meeting_date),
            numberOfPeople: meeting.number_of_attendees,
            meetingTranscript: meeting.meeting_transcript,
            meetingNotes: meeting.meeting_notes
        }
    } catch (e: any) {
        console.log(e.message);
        return {
            meetingID: Constants.DOES_NOT_EXIST,
            meetingTitle: "",
            meetingDate: "",
            numberOfPeople: 0,
            meetingTranscript: "",
            meetingNotes: ""
        }
    }
}

export default getMeetingById
