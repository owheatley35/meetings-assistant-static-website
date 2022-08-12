import {validateSqlLongText, validateSqlText} from "../../global/tools/ValidationTools";

// TODO: Update fetch URL to new endpoint (and authentication)
async function createMeeting(accessToken: Promise<string>, meetingTitle: string, meetingDescription: string,
                             meetingDate: string, meetingTime: string, meetingAttendees: string) {
    try {
        const token: string = await accessToken

        if (validateSqlText(meetingTitle) && validateSqlLongText(meetingDescription) && validateSqlLongText(meetingAttendees)) {
             await fetch("/api/create/meeting", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "meeting_title": meetingTitle,
                    "meeting_description": meetingDescription,
                    "meeting_date": meetingDate,
                    "meeting_time": meetingTime,
                    "meeting_attendees": meetingAttendees
                })
            });
        } else {
            // TODO: Error message to the user
            console.log("Invalid Params");
        }
    } catch (e: any) {
        // TODO: Error message to user
        console.log(e.message);
    }
}

export default createMeeting;
