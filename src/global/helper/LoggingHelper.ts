import {Stage} from "../Constants";
import {getWebStage} from "../../api/provider/ProviderConfigurator";

/**
 * Class to help make logs.
 */
class LoggingHelper {
    private readonly canLog: boolean;

    constructor(stage: Stage) {
        this.canLog = (stage == Stage.BETA)
    }

    /**
     * Log to the console,only in beta
     * @param item Object to be logged
     */
    log(item: any): void {
        if (this.canLog) {
            console.log(item);
        }
    }
}

const logger = new LoggingHelper(getWebStage(window.location.origin))

export default logger;
