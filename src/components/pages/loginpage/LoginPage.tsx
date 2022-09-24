import {Component} from "react";
import NavBar from "../../navbar/NavBar";
import "../../../style/pages/loginpage/LoginPage.scss"
import LoginButton from "./components/LoginButton";

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
                <NavBar />
                <div className="center-content vertical">
                    <div className="divider"></div>
                    <h1 className="text-large-bold">A Meeting note Tool for Professionals.</h1>
                    <div className="divider"></div>
                    <h1 className="text-large-bold">Please Log In by clicking below...</h1>
                    <div className="main-content center-content vertical">
                        <LoginButton />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage
