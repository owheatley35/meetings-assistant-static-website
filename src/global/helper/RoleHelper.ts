
async function getUserRole(accessTokenPromise: Promise<string>): Promise<string> {

    try {

        const accessToken = await accessTokenPromise;

        const response = await fetch("/api/get/user/role", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });

        const result = await response;
        const json_obj = await result.json()

        if (json_obj.response_status) {
            return json_obj.response
        } else {
            return ""
        }

    } catch (e: any) {
        console.log(e.message);
        return ""
    }
}

export default getUserRole
