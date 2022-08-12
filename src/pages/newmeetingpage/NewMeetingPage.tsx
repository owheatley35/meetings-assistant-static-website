import NewMeetingForm from "./components/NewMeetingForm";
import NavBar from "../../global/components/NavBar";
import SecureContent from "../../global/SecureContent";

const NewMeetingPage = () => {
    return (
        <div className="new-meeting-page">
            <NavBar />
            <SecureContent>
                <div className="inner-new-meeting-page center-content vertical">
                    <div className="title-new-meeting-page">
                        <h1 className="text-large-bold">New Meeting</h1>
                    </div>
                    <div className="form-section-new-meeting-page">
                       <NewMeetingForm />
                    </div>
                </div>
            </SecureContent>
        </div>
    )
}

export default NewMeetingPage;
