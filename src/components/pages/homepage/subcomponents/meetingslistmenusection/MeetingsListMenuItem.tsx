import "../../../../../style/global.scss"
import "../../../../../style/pages/homepage/components/sections/meetingslistmenusection/MeetingsListMenuItem.scss"

export interface MeetingListMenuItemProps {
    readonly meetingID: string
    readonly meetingTitle: string;
    readonly meetingDate: string;
    readonly numberOfPeople: number;
}

const MeetingsListMenuItem = (props: MeetingListMenuItemProps) => {
    return(
        <li>
            <div className="meetingslistmenuitem">
                <div className="row-meetingslistmenuitem longways">
                    <div className="titlesection-row-meetingslistmenuitem">
                        <div className="vertical-titlesection-row-meetingslistmenuitem">
                            <div className="meetingtitle-vertical-titlesection-row-meetingslistmenuitem">
                                <p className="text-meetingtitle-vertical-titlesection-row-meetingslistmenuitem text-header-small-thin">{props.meetingTitle}</p>
                            </div>
                            <div className="date-vertical-titlesection-row-meetingslistmenuitem">
                                <p className="text-date-vertical-titlesection-row-meetingslistmenuitem text-small-bold">{props.meetingDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightside-row-meetingslistmenuitem longways">
                        <div className="meetingstats-row-meetingslistmenuitem">
                            <div className="vertical-meetingstats-row-meetingslistmenuitem">
                                <div className="attendees-vertical-meetingstats-row-meetingslistmenuitem">
                                    <p className="text-meetingstats-row-meetingslistmenuitem text-normal">Attendees: {props.numberOfPeople}</p>
                                </div>
                            </div>
                        </div>
                        <div className="viewmeeting-row-meetingslistmenuitem">
                            <button className="button-viewmeeting-row-meetingslistmenuitem text-normalish-thin button-standard"
                                    onClick={() => {handleViewMeetingClick(props.meetingID)}}>
                                View Meeting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

function handleViewMeetingClick(meetingId: String) {
    window.location.replace(`/meeting/${meetingId}`)
}

export default MeetingsListMenuItem;
