import {useAuth0} from "@auth0/auth0-react";

const SecureContent = ({children}: any) => {

    const {isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return (<div className="center-content vertical"><p className="text-large-bold">Loading . . .</p></div>)
    } else if (!isLoading && isAuthenticated) {
        return (
            <div>
                {children}
            </div>
        )
    } else {
        window.location.replace(window.location.origin + "/login")
        return (<div/>)
    }
}

export default SecureContent;
