import NavBar from "../../global/components/NavBar";
import SecureContent from "../../global/SecureContent";
import {useParams} from "react-router-dom";
import EditMeetingDisplayLoader from "./EditMeetingDisplayLoader";

function EditMeetingPage() {

    const {meeting_id} = useParams()

    return (
        <div className="EditMeetingPage">
            <NavBar />
            <SecureContent>
                <h1>Update Meeting</h1>
                <EditMeetingDisplayLoader  meetingId={Number(meeting_id)}/>
            </SecureContent>
        </div>
    )
}

export default EditMeetingPage