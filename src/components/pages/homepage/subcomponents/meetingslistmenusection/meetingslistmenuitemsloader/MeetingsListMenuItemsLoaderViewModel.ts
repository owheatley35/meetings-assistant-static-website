import ViewModel from "../../../../../../global/ViewModel";

// Constants
const loadingText: string = 'LOADING . . .';
const refreshButtonID: string = "refresh-button";

class MeetingsListMenuItemsLoaderViewModel extends ViewModel {

    public showRefreshButton() {
        const button = this.givenDocument.getElementById(refreshButtonID) as HTMLButtonElement;
        button.style.visibility = 'visible';
    }

    public hideRefreshButton() {
        const button = this.givenDocument.getElementById(refreshButtonID) as HTMLButtonElement;
        button.style.visibility = 'hidden';
    }
}

export default MeetingsListMenuItemsLoaderViewModel;
