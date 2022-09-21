import {MeetingListMenuSectionProps} from "../MeetingsListMenuSection";
import React, {useState} from "react";
import MeetingsListMenuItem from "../MeetingsListMenuItem";
import MeetingsListMenuItemsLoaderViewModel from "./MeetingsListMenuItemsLoaderViewModel";

const MeetingsListMenuItemsLoaderView = (meetingsProps: MeetingListMenuSectionProps) => {

    // Constants
    const loadingText: string = 'LOADING . . .';
    const refreshButtonID: string = "refresh-button";

    // States
    const [timeOutActivated, updateTimeOutActivated] = useState(false);
    const [doesHaveMeetingsToDisplay, updateDoesHaveMeetingsToDisplay] = useState((meetingsProps.meetingListItems.length > 1));
    const [loadingPlacementText, updateLoadingPlacementText] = useState(loadingText);

    const viewModel = new MeetingsListMenuItemsLoaderViewModel(document, true);

    startUITimer();

    if (!doesHaveMeetingsToDisplay) {

        return (
            <div className="vertical center-content">
                <h1>{loadingPlacementText}</h1>
                <button id={refreshButtonID} className="button-standard">Try Again</button>
            </div>
        )

    } else {

        hideRefreshButton();
        updateLoadingPlacementText(loadingText);

        return (
            <div>
                <ul>
                    {
                        meetingsProps.meetingListItems.map((item) => {
                            return <MeetingsListMenuItem {...item}/>
                        })
                    }
                </ul>
                <button id={refreshButtonID} className="button-standard">Refresh</button>
            </div>
        )
    }

    function startUITimer() {
        setTimeout(function() {
            if (!doesHaveMeetingsToDisplay) {
                updateLoadingPlacementText('There were no meetings to load.');
                showRefreshButton();
            }
        }, 10000);
    }

    function showRefreshButton() {
        const button = document.getElementById(refreshButtonID) as HTMLButtonElement;
        button.style.visibility = 'visible';
    }

    function hideRefreshButton() {
        const button = document.getElementById(refreshButtonID) as HTMLButtonElement;
        button.style.visibility = 'hidden';
    }

    function deactivateRefreshButton() {
        const button = document.getElementById(refreshButtonID) as HTMLButtonElement;
        button.style.visibility = 'visible';
    }
}

export default MeetingsListMenuItemsLoaderView
