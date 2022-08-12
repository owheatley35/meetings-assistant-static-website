import MeetingInfoDisplay from "../pages/meetingpage/components/meetinginfodisplay/MeetingInfoDisplay";
import {MeetingInfo} from "../pages/meetingpage/MeetingProvider";
import NavBar from "./components/NavBar";
import "../style/global.scss"
import {useState} from "react";
import EditMeetingForm from "../pages/editmeetingpage/components/EditMeetingForm";

function LocalView() {

    const meetingInfo: MeetingInfo = {
        meetingID: "1",
        meetingTitle: "IPA Discussion Meeting",
        meetingTranscript: "We need to review the future of IPA, I also need a drink.",
        meetingNotes: " /#&-Things were spoken about. /#&-And there were lost of drinks.",
        meetingDate: "11/04/2022",
        numberOfPeople: 5
    }

    const [innerText, updateInnerText] = useState("Hello")
    const [isEditMode, updateEditMode] = useState(true)

    return (
        <div>
            <NavBar />
            <div>
                <EditMeetingForm meetingInfo={meetingInfo} />
            </div>
        </div>
    )
}

export default LocalView
