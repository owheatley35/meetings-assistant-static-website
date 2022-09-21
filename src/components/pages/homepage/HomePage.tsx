import NavBar from "../../navbar/NavBar";
import "../../../style/pages/homepage/HomePage.scss"
import MeetingsListMenuSection
 from "./subcomponents/meetingslistmenusection/MeetingsListMenuSection";
import SecureContent from "../../../global/SecureContent";


function HomePage() {

    return (
        <div className="HomePage">
            <NavBar/>
            <SecureContent>
                <MeetingsListMenuSection />
            </SecureContent>
        </div>
    )
}

export default HomePage;
