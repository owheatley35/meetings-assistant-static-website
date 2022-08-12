import "../../../style/pages/loginpage/components/LoginForm.scss"

const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="inner-login-form">
                <div className="title-login-form">
                    <div className="inner-title-login-form">
                        <p className="text-title-login-form text-large-bold">Log In</p>
                    </div>
                </div>
                <div className="information-login-form">
                    <div className="username-information-login-form login-box-section">
                        <input id="username" type="text" placeholder="Username" required/>
                    </div>
                    <div className="password-information-login-form login-box-section">
                        <input id="password" type="password" placeholder="Password" required/>
                    </div>
                </div>
                <div className="submit-login-form">
                    <button className="button-standard" onClick={submitLogin}>Log In</button>
                </div>
            </div>
        </div>
    )
}

function submitLogin() {
    const username: string = (document.getElementById("username") as HTMLInputElement).value;
    const password: string = (document.getElementById("password") as HTMLInputElement).value;

    // code to initiate login
}

export default LoginForm