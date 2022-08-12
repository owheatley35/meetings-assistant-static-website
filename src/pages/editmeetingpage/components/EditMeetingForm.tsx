import MeetingInfoDisplayProps from "../../meetingpage/components/meetinginfodisplay/MeetingInfoDisplayProps";
import {useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {unformatDateForTransmission} from "../../../global/tools/StringTools";
import editMeeting from "../MeetingEditor";

function EditMeetingForm(props: MeetingInfoDisplayProps) {

    const [title, updateTitle] = useState(props.meetingInfo.meetingTitle);
    const [meetingDescription, updateMeetingDescription] = useState(props.meetingInfo.meetingTranscript)
    const [meetingDate, updateMeetingDate] = useState(unformatDateForTransmission(props.meetingInfo.meetingDate))

    const {getAccessTokenSilently} = useAuth0();

    return (
        <div id="new-meeting-form" className="center-content vertical">
                <div className="title-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Title:</p>
                    <input name="title-meeting" className="form-item" type="text" id="form-title"
                           value={title}
                           onChange={(e) => {
                               updateTitle(e.target.value)
                               console.log(title)
                           }}/>
                </div>
                <div className="title-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Description:</p>
                    <textarea name="description-meeting" className="form-item" id="form-description"
                        value={meetingDescription} onChange={(e) => {
                        updateMeetingDescription(e.target.value)
                    }}/>
                </div>
                <div className="date-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Date:</p>
                    <input name="date-of-meeting" className="form-item" type="date" id="form-date"
                           value={meetingDate} onChange={(e) => updateMeetingDate(e.target.value)}/>
                </div>
                <div className="submit-button-form-section-new-meting-page center-content longways">
                    <button className="form-item button-standard" id="updateButtonId" onClick={
                        () => {
                            const thisButton = document.getElementById("updateButtonId")! as HTMLInputElement
                            thisButton.disabled = true
                            thisButton.innerText = "Updating . . ."

                            const accessCodePromise = getAccessTokenSilently()
                            editMeeting(accessCodePromise, props.meetingInfo.meetingID, title, meetingDescription, meetingDate).then(() => document.location.replace(`/meeting/${props.meetingInfo.meetingID}`))
                        }
                    }>Update
                    </button>
                    <button className="form-item button-standard" onClick={() => {
                        const newUrl = `/meeting/${props.meetingInfo.meetingID}`
                        document.location.replace(newUrl)
                    }}>
                        Cancel
                    </button>
                </div>
            </div>
    )
}

export default EditMeetingForm;
