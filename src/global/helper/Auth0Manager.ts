import {Auth0Client} from "@auth0/auth0-spa-js";
import Auth0ClientProvider from "../../api/provider/Auth0ClientProvider";
import {User} from "@auth0/auth0-react";
import logger from "./LoggingHelper";

class Auth0Manager {
    private client: Auth0Client | undefined;
    private user: User | undefined;
    private isInformationLoaded: boolean;

    constructor(auth0ClientProvider: Auth0ClientProvider) {
        this.isInformationLoaded = false;

        auth0ClientProvider.createClient().then(client => {
            this.client = client;
            this.update().then(r => this.isInformationLoaded = true);
            logger.log("Client created")
        });
    }

    public async update(): Promise<void> {

        this.waitForClient();

        this.client!.getUser().then(user => {
            this.user = user
            logger.log("user updated")
        })
    }

    public isReady(): boolean {
        return this.isInformationLoaded;
    }

    private getUser(): User {
        return this.user!;
    }

    private waitForClient() {
        // let hasTimedOut: boolean = false;

        // wait(5000).then(r => {hasTimedOut = true;})

        while ((this.client === undefined)) {}
        logger.log("wait complete")
    }

    public async withUser(): Promise<User> {
        this.waitForClient();
        await this.update();
        return this.getUser();
    }

    public async isAuthenticated(): Promise<boolean> {
        this.waitForClient();
        return this.client!.isAuthenticated();
    }

    public initiateLogin(): void {
        this.client!.loginWithPopup()
    }
}

export default Auth0Manager;
