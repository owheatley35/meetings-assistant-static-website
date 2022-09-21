import Constants from "../../global/Constants";
import {WebUrls, Stage} from "../../global/Constants";


/**
 * Function to get the API URL based on the current environment.
 *
 * @param {string} currentUrl The current url of the webpage.
 *
 * @returns {string} The API URL.
 */
export function getApiUrl(currentUrl: string): string {
    if (currentUrl.includes("localhost") || currentUrl.includes(Constants.BETA_WEB_PREFIX)) {
        return Constants.BETA_API_URL;
    } else {
        return Constants.PRODUCTION_API_URL;
    }
}

/**
 * Function to format an api url
 *
 * @param {Stage} stage Stage of the website
 * @param {string} apiEndpoint Endpoint to request
 *
 * @returns {string} URL of the API
 */
export function formatAPIUrl(stage: Stage, apiEndpoint:string): string {
    const stage_api_prefix: string = getApiUrl(WebUrls.get(stage)!)
    return stage_api_prefix + apiEndpoint
}
