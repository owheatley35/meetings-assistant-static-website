import {useEffect, useState} from "react";
import meetingDeleter from "../MeetingDeleter";
import {useAuth0} from "@auth0/auth0-react";
import getUserRole from "../../../global/helper/RoleHelper";

interface DeleteMeetingButtonProps {
    readonly meetingId: number
}

export default function DeleteMeetingButton(props: DeleteMeetingButtonProps) {

    const [isAdmin, updateIsAdmin] = useState(false)
    const {getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        const token = getAccessTokenSilently()
        getUserRole(token).then((r) => {
            if (r == "role:admin") {
                updateIsAdmin(true);
            }
        })
    })



    if (isAdmin) {
        return (
            <div>
                <button className="button-standard" id="delete-meeting-button" onClick={() => {
                    const meetingDeleteButton = document.getElementById("delete-meeting-button") as HTMLInputElement
                    meetingDeleteButton.disabled = true
                    meetingDeleteButton.innerText = "Delete in progress . . ."
                    const accessCodePromise = getAccessTokenSilently()
                    meetingDeleter(accessCodePromise, props.meetingId).then(r => {
                        if (r) {
                            document.location.replace("/")
                        } else {
                            console.log("delete failed")
                            meetingDeleteButton.disabled = false
                            meetingDeleteButton.innerText = "Delete"
                        }
                    })
                }}>Delete</button>
            </div>
        )
    } else {
        return (<div/>)
    }
}