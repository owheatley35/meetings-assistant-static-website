namespace Constants {
    // STATES
    export const LOADING: string = "LOADING"
    export const DOES_NOT_EXIST: string = "DOES_NOT_EXIST"

    // Other Strings
    export const NOTE_SPLITTER: string =  "/#&-"

    // Auth0 Configuration - All information below is safe to be public:
    export const AUTH0_DOMAIN: string = 'oliwheatley.eu.auth0.com';
    export const AUTH0_CLIENT_ID: string = 'mdXr3UNFvfDNl8rl7npeY6jfu4Hd1Qoa';
    export const AUTH0_AUDIENCE: string = 'meetings-assistant-api';
    export const AUTH0_SCOPE: string = 'read:messages';

    // Web / API Configuration
    export const BETA_WEB_PREFIX: string = "https://d39fabdbkbjoyk.cloudfront.net";
    export const PRODUCTION_WEB_PREFIX: string = "https://d2v87sbys8bkb2.cloudfront.net";
    export const BETA_API_URL: string = "https://xs275qcq3m.execute-api.eu-west-2.amazonaws.com/prod";
    export const PRODUCTION_API_URL: string = "https://uc1971ytq4.execute-api.eu-west-2.amazonaws.com/prod";

    // API Routes:
    export const API_ROUTE_GET_ALL_MEETINGS: string = "/get/all-basic-meetings";
    export const API_ROUTE_GET_ALL_MEETING_NOTES: string = "/get/all-meeting-notes";
    export const API_ROUTE_GET_MEETING_FROM_ID: string = "/get/meeting-from-id";
    export const API_ROUTE_UPDATE_MEETING_NOTE: string = "/update/meeting-note";
    export const API_ROUTE_CREATE_MEETING_NOTE: string = "/create/meeting-note";
    export const API_ROUTE_DELETE_MEETING_NOTE: string = "/delete/meeting-note";
    export const API_ROUTE_CREATE_MEETING: string = "/create/meeting";
    export const API_ROUTE_UPDATE_MEETING: string = "/update/meeting-details";
    export const API_ROUTE_DELETE_MEETING: string = "/delete/meeting";
    export const API_ROUTE_GET_USER_ROLE: string = "/get/user/role";
}

export enum Stage {
    BETA = "BETA",
    PROD = "PROD"
}

export const WebUrls: Map<Stage, string> = new Map<Stage, string>([
    [Stage.BETA, Constants.BETA_WEB_PREFIX],
    [Stage.PROD, Constants.PRODUCTION_WEB_PREFIX]
]);

export const ApiUrls: Map<Stage, string> = new Map<Stage, string>([
    [Stage.BETA, Constants.BETA_API_URL],
    [Stage.PROD, Constants.PRODUCTION_API_URL]
]);

export default Constants
