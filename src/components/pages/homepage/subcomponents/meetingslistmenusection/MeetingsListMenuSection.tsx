import React, {useEffect, useState} from "react";
import "../../../../../style/pages/homepage/components/sections/meetingslistmenusection/MeetingsListMenuSection.scss"
import MeetingsListMenuItem, {MeetingListMenuItemProps} from './MeetingsListMenuItem';
import {useAuth0} from "@auth0/auth0-react";
import getUsersMeetings from "../../../../../api/provider/MeetingsProvider";
import HomePageState from "../HomePageState";

export interface MeetingListMenuSectionProps {
    readonly meetingListItems: Array<MeetingListMenuItemProps>
    readonly pageState: HomePageState
}

const MeetingsListMenuSection = () => {

    const starterStateArray: Array<MeetingListMenuItemProps> = []
    const [meetingListMenuSectionProps, setMeetingListMenuSectionProps] =
        useState(starterStateArray);
    const [pageState, setPageState] = useState(HomePageState.LOADING);

    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getMeetingItems();

    }, []);

    return (
        <div className="meetingslistmenusection">
            <div className="inner-meetingslistmenusection">
                <div className="toprow-meetingslistmenusection longways">
                    <div className="title-toprow-meetingslistmenusection">
                        <h1 className="heading-title-toprow-meetingslistmenusection">Your Meetings:</h1>
                    </div>
                    <div className="button-toprow-meetingslistmenusection">
                        <button
                            className="button-button-toprow-meetingslistmenusection button-standard text-normalish-thin"
                            onClick={() => {window.location.replace(window.location.origin + "/new-meeting")}}>
                            New Meeting
                        </button>
                    </div>
                </div>
                <div className="meeetinglist-meetingslistmenusection">
                    {
                        meetingsDisplayLoad()
                    }
                </div>
            </div>
        </div>
    )

    async function getMeetingItems() {
        setPageState(HomePageState.LOADING);
        const accessToken = await getAccessTokenSilently();
        const meetingItems = await getUsersMeetings(accessToken);
        setMeetingListMenuSectionProps(meetingItems);
        setPageState(HomePageState.COMPLETE);
    }

    function meetingsDisplayLoad() {
        if (pageState === HomePageState.LOADING) {
            return (
                <div className="vertical center-content">
                    <h1>Loading Your Meetings . . .</h1>
                </div>
            )
        } else if (pageState === HomePageState.COMPLETE) {
            if (meetingListMenuSectionProps.length >= 1) {
                return (
                    <div>
                        <ul>
                            {
                                meetingListMenuSectionProps.map((item) => {
                                    return <MeetingsListMenuItem {...item}/>
                                })
                            }
                        </ul>
                        <button className="button-standard" onClick={getMeetingItems}>Refresh</button>
                    </div>
                )
            } else {
                return (
                    <div className="vertical center-content">
                        <h1>There were no meetings to load.</h1>
                        <button className="button-standard" onClick={getMeetingItems}>Try Again</button>
                    </div>
                )
            }
        }
    }
}



export default MeetingsListMenuSection
