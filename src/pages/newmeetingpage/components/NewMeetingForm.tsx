import "../../../style/pages/newmeetingpage/NewMeetingForm.scss"
import createMeeting from "../MeetingCreator";
import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";

const NewMeetingForm = () => {

    const {getAccessTokenSilently} = useAuth0();
    const [noteDescription, updateNoteDescription] = useState("")
    const [loadingState, updateLoadingState] = useState(false)

    if (loadingState) {
        return (
            <div>
                <h1>
                    Loading . . .
                </h1>
            </div>
        )
    } else {
        return (
            <div id="new-meeting-form" className="center-content vertical">
                <div className="title-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Title:</p>
                    <input name="title-meeting" className="form-item" type="text" id="form-title"/>
                </div>
                <div className="title-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Description:</p>
                    <textarea name="description-meeting" className="form-item" id="form-description"
                              value={noteDescription} onChange={(e) => {
                        updateNoteDescription(e.target.value)
                    }}/>
                </div>
                <div className="date-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Date:</p>
                    <input name="date-of-meeting" className="form-item" type="date" id="form-date"/>
                </div>
                <div className="attendees-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Attendee Names (Comma Seperated.):</p>
                    <input name="attendees-meeting" className="form-item" type="text" id="form-attendees"/>
                </div>
                <div className="start-time-form-section-new-meting-page center-content longways">
                    <p className="form-label-text">Meeting Time:</p>
                    <input name="time-meeting" className="form-item" type="time" id="form-time"/>
                </div>
                <div className="submit-button-form-section-new-meting-page center-content longways">
                    <button className="form-item button-standard" onClick={
                        () => {
                            updateLoadingState(true)
                            const meetingTitle: HTMLInputElement = document.getElementById("form-title")! as HTMLInputElement
                            const dateForm: HTMLInputElement = document.getElementById("form-date")! as HTMLInputElement
                            const attendees: HTMLInputElement = document.getElementById("form-attendees")! as HTMLInputElement
                            const timeInput: HTMLInputElement = document.getElementById("form-time")! as HTMLInputElement

                            const accessCodePromise = getAccessTokenSilently()
                            createMeeting(accessCodePromise, meetingTitle.value, noteDescription, dateForm.value, timeInput.value, attendees.value).then(r => window.location.replace('/'))
                        }
                    }>Finish
                    </button>
                </div>
            </div>
        )
    }
}

export default NewMeetingForm;
