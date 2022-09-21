import createAuth0Client, {Auth0Client} from "@auth0/auth0-spa-js";
import Constants from "../../global/Constants";

class Auth0ClientProvider {

    public async createClient(): Promise<Auth0Client> {
        return await createAuth0Client({
            domain: Constants.AUTH0_DOMAIN,
            client_id: Constants.AUTH0_CLIENT_ID,
            audience: Constants.AUTH0_AUDIENCE,
            scope: Constants.AUTH0_SCOPE
        });
    }
}

export default Auth0ClientProvider;
