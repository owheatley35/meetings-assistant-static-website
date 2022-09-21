import {WebUrls, Stage} from "../global/Constants";

/**
 *  Identifies the stage name based on the current URL.
 *
 *  @param {string} url The current url retrieved from the document
 *
 *  @returns {Stage} The stage name in CAPS
 */
export default function identifyStage(url: string): Stage {
    if (url.includes(WebUrls.get(Stage.BETA)!)) {
        return Stage.BETA;
    } else {
        return Stage.PROD;
    }
}
