export const FloatingNotificationView = (notificationConfiguration: string) => {
    return (
        <div className="floating-notification-view">
            <div>
                <p>{notificationConfiguration}</p>
            </div>
        </div>
    )
}

export default FloatingNotificationView;
