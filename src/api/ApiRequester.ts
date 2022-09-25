import {formatAPIUrl} from "./provider/ProviderConfigurator";
import identifyStage from "./StageChecker";

async function make_request(apiEndpoint: string, accessToken: string, method: string, body?: string) {

    const apiUrl = formatAPIUrl(identifyStage(window.location.origin), apiEndpoint)
    let response;

    if (body) {
        response = fetch(apiUrl, {
            method: method,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Origin': window.location.origin
            },
            body: body
        });
    } else {
        response = fetch(apiUrl, {
            method: method,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Origin': window.location.origin
            }
        });
    }

    const data = await response;
    return await data.json();
}

export default make_request;
