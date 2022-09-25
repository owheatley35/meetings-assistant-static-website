import "../../style/global/components/NavBar.scss"
import UserManagementButton from "./UserManagementButton";
import {getWebStage} from "../../api/provider/ProviderConfigurator";

function NavBar() {

    return (
        <div className="navbar">
            <div className="inner-navbar">
                <div className="header-navbar">
                    <div className="inner-header-navbar, longways">
                        <h1 className="site-title-navbar">Meetings Assistant</h1>
                        <h3 className="text-header-small-thin, padding-horizontal-small">{getWebStage(window.location.origin)}</h3>
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
