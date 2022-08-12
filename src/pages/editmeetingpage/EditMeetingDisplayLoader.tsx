import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import EditMeetingForm from "./components/EditMeetingForm";
import Constants from "../../global/Constants";
import getMeetingById, {MeetingInfo} from "../meetingpage/MeetingProvider";

interface EditMeetingProps {
    readonly meetingId: number
}

function MeetingInfoDisplayLoader(props: EditMeetingProps) {

    const starterMeeting: MeetingInfo = {
            meetingID: Constants.LOADING,
            meetingTitle: "",
            meetingDate: "",
            numberOfPeople: 0,
            meetingTranscript: "",
            meetingNotes: ""
        }

    const {getAccessTokenSilently} = useAuth0();
    const [meetingInfoState, setMeetingInfoState] = useState(starterMeeting)

    useEffect(() => {
        const getMeetingInfo = async () => {
            const accessToken = await getAccessTokenSilently();
            const meetingId: number = props.meetingId;
            const meetingInfo: MeetingInfo = await getMeetingById(accessToken, meetingId)

            setMeetingInfoState(meetingInfo)
        }

        getMeetingInfo()
    }, [])

    // return section
    if (meetingInfoState.meetingID == Constants.LOADING) {
        return (
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    } else if (meetingInfoState.meetingID == Constants.DOES_NOT_EXIST) {
        return (
            <div>
                <h1>Sorry - We couldn't find that meeting :(</h1>
                <button className="button-standard" onClick={() => {window.location.assign('/')}}>
                    Click here to return home
                </button>
            </div>
        )
    } else {
        return (
            <EditMeetingForm meetingInfo={meetingInfoState}/>
        )
    }
}

export default MeetingInfoDisplayLoader
