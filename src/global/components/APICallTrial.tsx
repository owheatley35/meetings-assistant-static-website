import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";

const APICallTrial = () => {
    const {user, getAccessTokenSilently, getIdTokenClaims} = useAuth0();
    const [userMetadata, setUserMetadata] = useState("inital");

    useEffect(() => {
        const getUserMetadata = async () => {

            try {
                const accessToken = await getAccessTokenSilently();

                const metadataResponse = await fetch("/api/get/all-basic-meetings", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                console.log(metadataResponse);

                const user_metadata = await metadataResponse
                const json_message = await user_metadata.json()

                console.log(json_message.message);

                setUserMetadata(json_message.message);
            } catch (e: any) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);

    return (
        <div>
            <div>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "initial"
                )}
            </div>
        </div>
    )
}

export default APICallTrial