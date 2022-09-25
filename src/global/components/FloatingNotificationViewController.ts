import delay from "../tools/TimeTools";

const notificationId: string = "floating-notification";

class FloatingNotificationViewController {
    public notificationMessage: string

    constructor() {
        this.notificationMessage = ""
    }

    createSuccessNotification(message: string) {
        this.notificationMessage = message;
        this.show("#5dffc9");
    }

    createFailureNotification(message: string) {
        this.notificationMessage = message;
        this.show("#fd2c46");
    }

    private show(color: string) {
        const notification = document.getElementById(notificationId) as HTMLElement;
        notification.style.background = color;
        notification.style.visibility = "visible"
        delay(3000).then(() => this.hide())
    }

    private hide() {
        const notification = document.getElementById(notificationId) as HTMLElement;
        notification.style.visibility = "hidden"
    }
}



export default FloatingNotificationViewController;
