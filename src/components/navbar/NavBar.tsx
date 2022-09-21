import "../../style/global/components/NavBar.scss"
import UserManagementButton from "./UserManagementButton";

function NavBar() {

    return (
        <div className="navbar">
            <div className="inner-navbar">
                <div className="header-navbar">
                    <div className="inner-header-navbar">
                        <h1 className="site-title-navbar">Meetings Assistant</h1>
                    </div>
                </div>
                <div className="navigation-navbar">
                    <div className="inner-navigation-navbar">
                        <ul className="list-navigation-navbar">
                            <li className="item-list-navigation-navbar">
                                <p className="text-item-list-navigation-navbar" onClick={divertHome}>Home</p>
                            </li>
                            <li className="item-list-navigation-navbar">
                                <UserManagementButton/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function divertHome() {
    window.location.replace(window.location.origin);
}

export default NavBar;
