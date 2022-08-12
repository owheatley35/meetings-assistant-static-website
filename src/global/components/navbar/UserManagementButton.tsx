import "../../../style/global/components/navbar/UserManagementButton.scss"
import {useAuth0, User} from "@auth0/auth0-react";
import LoginButton from "../../../pages/loginpage/components/LoginButton";


function UserManagementButton() {

    const {user, isAuthenticated, isLoading, logout} = useAuth0();

    let userInfo: UserInformation | undefined = undefined;

    if ((!isLoading || isAuthenticated) && user) {
        userInfo = getUser(user);
    }

    if (userInfo) {
        return (
            <div className="usermanagementbutton">
                <div className="inner-usermanagementbutton">
                    <div className="logout-usermanagementbutton">
                        <p className="text-item-list-navigation-navbar" onClick={() => {logout({ returnTo: (window.location.origin + "/login")  })}}>Logout</p>
                    </div>
                    <div className="userimage-usermanagementbutton">
                        <img className="img-userimage-usermanagementbutton" src={userInfo.imageLink} alt="UserImage"/>
                    </div>
                    <div className="username-usermanagementbutton">
                        <div className="inner-username-usermanagementbutton">
                            <p className="test-username-usermanagementbutton text-item-list-navigation-navbar">Hi, {userInfo.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="usermanagementbutton center-content">
                <LoginButton />
            </div>
        )
    }
}

function getUser(user: User): UserInformation | undefined {

    return {
        username: user.nickname || "there",
        imageLink: user.picture || "https://assets.amazonapprenticeships.co.uk/dims4/default/aaf9596/2147483647/strip/true/crop/1333x1333+355+0/resize/326x326!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fapprenticeship%2Fd6%2F7e%2Fdc546dc64f509407427550bcbdfe%2Foli-wheatley-picture.jpg"
    }
}

interface UserInformation {
    readonly username: string,
    readonly imageLink: string
}

export default UserManagementButton