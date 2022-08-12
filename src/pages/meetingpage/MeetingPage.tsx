import NavBar from "../../global/components/NavBar";
import SecureContent from "../../global/SecureContent";
import {useParams} from "react-router-dom";
import MeetingInfoDisplayLoader from "./components/MeetingInfoDisplayLoader";

function MeetingPage() {

    const {meeting_id} = useParams()

    return(
        <div className="meeting-page">
            <NavBar />
            <SecureContent>
                <MeetingInfoDisplayLoader meetingId={Number(meeting_id)}/>
            </SecureContent>
        </div>
    )
}

export default MeetingPage