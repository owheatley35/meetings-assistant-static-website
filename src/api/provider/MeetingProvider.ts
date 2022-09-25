import {MeetingListMenuItemProps} from "../../components/pages/homepage/subcomponents/meetingslistmenusection/MeetingsListMenuItem";
import formatDateForPresentation from "../../global/tools/StringTools";
import Constants from "../../global/Constants";
import make_request from "../ApiRequester";
import API_ROUTE_GET_MEETING_FROM_ID = Constants.API_ROUTE_GET_MEETING_FROM_ID;
import HttpMethod from "../HttpMethod";

export interface MeetingInfo extends MeetingListMenuItemProps {
    readonly meetingTranscript: string,
    readonly meetingNotes: string
}

// TODO: Update fetch URL to new endpoint (and authentication)
async function getMeetingById(accessToken: string, meetingId: number): Promise<MeetingInfo> {
    try {

        const body = JSON.stringify({
                    "meeting_id": meetingId
            });

        const meeting = await make_request(API_ROUTE_GET_MEETING_FROM_ID, accessToken, HttpMethod.POST, body)

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
