import MeetingInfoDisplayProps from "./MeetingInfoDisplayProps";
import "../../../../style/pages/meetingpage/components/meetinginfodisplay/MeetingInfoDisplay.scss"
import Constants from "../../../../global/Constants";
import {useState} from "react";
import updateMeetingNote, {validateNote} from "../../MeetingNoteUpdater";
import {useAuth0} from "@auth0/auth0-react";
import createNewMeeting from "../../MeetingNoteCreator";
import DeleteMeetingButton from "../DeleteMeetingButton";
import getUserRole from "../../../../global/helper/RoleHelper";
import deleteMeetingNote from "../../MeetingNoteDeleter";
import EditMeetingPage from "../../../editmeetingpage/EditMeetingPage";


function MeetingInfoDisplay(props: MeetingInfoDisplayProps) {

    const {getAccessTokenSilently} = useAuth0();
    const listOfNotes = formatNotes(props.meetingInfo.meetingNotes)
    const [newNoteState, updateNewNoteState] = useState("")
    const [userRole, updateUserRole] = useState("");

    let counter: number = 0;
    const [meetingNotesArrayState, updateMeetingNotesArrayState] = useState(listOfNotes)
    const [meetingNotesArrayNoEditState, updateMeetingNotesArrayNoEditState] = useState(listOfNotes)

    let i = 0;
    let initArray = []
    for (i = 0; i < listOfNotes.length; i++) {
        initArray.push(true)
    }

    const tokenMethod = getAccessTokenSilently()
    getUserRole(tokenMethod).then((result) => {
        updateUserRole(result)
    })

    const [editModeList, updateEditModeList] = useState(initArray)

    const elementNotesList = listOfNotes.map((note) => {
        const currentCounterValue = counter
        counter = counter + 1;

        const divId = "input-wrapper-" + currentCounterValue.toString();
        const editButtonId = "edit-button-" + currentCounterValue.toString();
        const textAreaId = `input-${currentCounterValue.toString()}`
        const pTextId = `p-text-${currentCounterValue.toString()}`
        const cancelButtonId = `cancel-button-id-${currentCounterValue.toString()}`
        const deleteButtonId = `delete-button-id-${currentCounterValue.toString()}`

        const divStyle = `#${divId}:hover #${editButtonId} { display: inline-block; }`;
        let styleSheet = document.createElement("style")
        styleSheet.innerText = divStyle
        document.head.appendChild(styleSheet)

        return (
            <li className="note-item star-bullet-point">
                <div id={divId}>
                    <textarea className="dynamic-input" id={textAreaId} value={meetingNotesArrayState[currentCounterValue]}
                              onChange={e => updateStateNotesArray(currentCounterValue, e.target.value)} contentEditable/>
                    <p className="p-text" id={pTextId}>{meetingNotesArrayState[currentCounterValue]}</p>
                    <button className="edit-button button-standard" id={editButtonId} onClick={() => {
                        if (editModeList[currentCounterValue]) {
                            document.getElementById(textAreaId)!.style.display = "inline-block";
                            document.getElementById(pTextId)!.style.display = "none";
                            document.getElementById(editButtonId)!.innerText = "Save";
                            document.getElementById(cancelButtonId)!.style.display = "inline-block";

                            if (isUserAdmin()) {
                                document.getElementById(deleteButtonId)!.style.display = "inline-block";
                            }

                            updateEditModeListArray(currentCounterValue,false);
                        } else {
                            document.getElementById(textAreaId)!.style.display = "none";
                            document.getElementById(pTextId)!.style.display = "inline-block";
                            document.getElementById(editButtonId)!.innerText = "Edit";
                            document.getElementById(cancelButtonId)!.style.display = "none";
                            document.getElementById(deleteButtonId)!.style.display = "none";
                            updateEditModeListArray(currentCounterValue, true);

                            const accessCodePromise = getAccessTokenSilently()
                            updateMeetingNote(accessCodePromise, Number(props.meetingInfo.meetingID),
                                currentCounterValue, meetingNotesArrayState[currentCounterValue]).then(r => console.log("Complete"))

                            updateStateMeetingNotesArrayNoEditState(currentCounterValue, meetingNotesArrayState[currentCounterValue])
                        }
                    }}>EDIT
                    </button>
                    <button className="button-standard delete-buttons-class" name="delete-button" id={deleteButtonId} onClick={() => {
                        const deleteButton = document.getElementById(deleteButtonId)! as HTMLInputElement
                        deleteButton.disabled = true;
                        deleteButton.innerText = "Delete in progress...";

                        const localToken = getAccessTokenSilently()
                        deleteMeetingNote(localToken, Number(props.meetingInfo.meetingID), currentCounterValue).then(() =>
                        window.location.reload())
                    }}>Delete Note</button>
                    <button className="button-standard cancel-button-li" id={cancelButtonId} onClick={() => {
                        document.getElementById(textAreaId)!.style.display = "none";
                        document.getElementById(pTextId)!.style.display = "inline-block";
                        document.getElementById(editButtonId)!.innerText = "Edit";
                        document.getElementById(cancelButtonId)!.style.display = "none";
                        document.getElementById(deleteButtonId)!.style.display = "none";

                        updateStateNotesArray(currentCounterValue, meetingNotesArrayNoEditState[currentCounterValue])
                        updateEditModeListArray(currentCounterValue, true);
                    }}>
                        Cancel
                    </button>
                </div>
            </li>
        )
    })

    return (
        <div className="meeting-info-display">
            <div className="inner-meeting-info-display">
                <div className="title-section-meeting-info-display">
                    <div className="inner-title-section-meeting-info-display">
                        <div className="info-title-section-meeting-info-display">
                            <div className="date-wrapper-info-title-section-meeting-info-display">
                                <p className="date-text-title text-large-bold">{props.meetingInfo.meetingDate}</p>
                            </div>
                            <div className="title-wrapper-info-title-section-meeting-info-display">
                                <p className="meeting-title-text text-header-small-thin">{props.meetingInfo.meetingTitle}</p>
                            </div>
                        </div>
                        <div className="options-title-section-meeting-info-display">
                            <div className="inner-options-title-section-meeting-info-display">
                                <div className="horizontal-options-title-section-meeting-info-display">
                                    <div className="button-wrap">
                                        <button className="button-standard" onClick={() => {
                                            document.location.replace(`/update-meeting/${props.meetingInfo.meetingID}`)
                                        }}>EDIT</button>
                                    </div>
                                    <div className="button-wrap">
                                        <DeleteMeetingButton  meetingId={Number(props.meetingInfo.meetingID)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-section-meeting-info-display">
                    <div className="inner-body-section-meeting-info-display">
                        <div className="horizontal-body-section-meeting-info-display">
                            <div className="main-body-section-meeting-info-display">
                                <div className="inner-main-body-section-meeting-info-display">
                                    <div className="transcript-wrap-main-body-section-meeting-info-display">
                                        <p>{props.meetingInfo.meetingTranscript}</p>
                                    </div>
                                    <div className="notes-section-main-body-section-meeting-info-display">
                                        <div className="notes-title-section">
                                            <div className="inner-title-section">
                                                <p className="notes-title text-large-bold">Notes:</p>
                                            </div>
                                        </div>
                                        <div className="notes-body-section">
                                            <div className="inner-notes-body-section">
                                                <ul className="notes-list">
                                                    {elementNotesList}
                                                    <li className="new-note-li">
                                                        <button className="button-standard" id="new-note-button" onClick={ () => {
                                                            document.getElementById("new-note-wrap")!.style.display = "inline-block";
                                                            document.getElementById("new-note-button")!.style.display = "none";
                                                            checkNewNoteAndAdjustUI();
                                                        }}>⭐ New ⭐</button>
                                                        <div className="new-note-div" id="new-note-wrap">
                                                            <textarea id="new-note-textarea" value={newNoteState} onChange={e => {
                                                                updateNewNoteState(e.target.value)
                                                                checkNewNoteAndAdjustUI();
                                                            }}/>
                                                            <button className="button-standard" id="save-new-note" onClick={() => {
                                                                document.getElementById("new-note-button")!.style.display = "inline-block";
                                                                document.getElementById("new-note-wrap")!.style.display = "none";

                                                                const accessCodePromise = getAccessTokenSilently()
                                                                createNewMeeting(accessCodePromise, Number(props.meetingInfo.meetingID), newNoteState).then(() => {
                                                                    updateNewNoteState("")
                                                                    window.location.reload()
                                                                })
                                                            }}>Save</button>
                                                            <button className="button-standard" id="new-note-back-button" onClick={() => {
                                                                document.getElementById("new-note-button")!.style.display = "inline-block";
                                                                document.getElementById("new-note-wrap")!.style.display = "none";
                                                                updateNewNoteState("");
                                                                checkNewNoteAndAdjustUI();
                                                            }}>Cancel</button>
                                                            <p className="invalid-warning" id="invalid-warning">Your input is invalid.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side-panel-body-section-meeting-info-display">
                                <div className="vertical-side-panel-body-section-meeting-info-display">
                                    <div className="actions-side-panel-body-section-meeting-info-display">

                                    </div>
                                    <div className="notes-side-panel-body-section-meeting-info-display">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function updateStateNotesArray(index: number, newValue: string) {
        let newArray = [...meetingNotesArrayState];
        newArray[index] = newValue;
        updateMeetingNotesArrayState(newArray);
    }

    function updateStateMeetingNotesArrayNoEditState(index: number, newValue: string) {
        let newArray = [...meetingNotesArrayNoEditState];
        newArray[index] = newValue;
        updateMeetingNotesArrayNoEditState(newArray);
    }

    function updateEditModeListArray(index: number, newValue: boolean) {
        let newArray = [...editModeList];
        newArray[index] = newValue;
        updateEditModeList(newArray);
    }

    function checkNewNoteAndAdjustUI() {
        if (!validateNote(1, newNoteState)) {
            document.getElementById("save-new-note")!.style.display = "none";
            document.getElementById("invalid-warning")!.style.display = "inline-block";
        } else {
            document.getElementById("save-new-note")!.style.display = "inline-block";
            document.getElementById("invalid-warning")!.style.display = "none";
        }
    }

    function isUserAdmin() {
        return userRole == "role:admin"
    }
}

function formatNotes(notes: string): string[] {
    if (notes) {
        let splitNotes = notes.split(Constants.NOTE_SPLITTER)
        return splitNotes.splice(1)
    } else {
        return []
    }
}

export default MeetingInfoDisplay
