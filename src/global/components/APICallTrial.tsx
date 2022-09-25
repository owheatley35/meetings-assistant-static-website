import {useAuth0} from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import logger from "../helper/LoggingHelper";

const APICallTrial = () => {
    const {user, getAccessTokenSilently, getIdTokenClaims} = useAuth0();
    const [userMetadata, setUserMetadata] = useState("inital");

    useEffect(() => {
        const getUserMetadata = async () => {

            try {
                const accessToken = await getAccessTokenSilently();

                const metadataResponse = await fetch("/get/all-basic-meetings", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                logger.log(metadataResponse);

                const user_metadata = await metadataResponse
                const json_message = await user_metadata.json()

                logger.log(json_message.message);

                setUserMetadata(json_message.message);
            } catch (e: any) {
                logger.log(e.message);
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
