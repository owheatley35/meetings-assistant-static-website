import "../../style/global/components/FloatingnotifiationView.scss"
import FloatingNotificationViewController from "./FloatingNotificationViewController";

export interface FloatingNotificationViewProps {
    readonly controller: FloatingNotificationViewController
}

export const FloatingNotificationView = (props: FloatingNotificationViewProps) => {
    return (
        <div id="floating-notification" className="floating-notification-view">
            <div className="text-container">
                <p>{props.controller.notificationMessage}</p>
            </div>
        </div>
    )
}

export default FloatingNotificationView;
