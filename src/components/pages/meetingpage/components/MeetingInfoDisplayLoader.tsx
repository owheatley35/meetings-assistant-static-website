import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import getMeetingById, {MeetingInfo} from "../../../../api/provider/MeetingProvider";
import Constants from "../../../../global/Constants";
import MeetingInfoDisplay from "./meetinginfodisplay/MeetingInfoDisplay";

interface MeetingInfoDisplayProps {
    readonly meetingId: number
}

function MeetingInfoDisplayLoader(props: MeetingInfoDisplayProps) {

    const starterMeeting: MeetingInfo = {
            meetingID: Constants.LOADING,
            meetingTitle: "",
            meetingDate: "",
            numberOfPeople: 0,
            meetingTranscript: "",
            meetingNotes: ""
        }

    const meetingId = useState(props.meetingId)
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
                <h1>LOADING Your Meeting...</h1>
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
            <div className="meeting-info-display">
                <MeetingInfoDisplay meetingInfo={meetingInfoState} />
            </div>
        )
    }
}

export default MeetingInfoDisplayLoader
