import { MessageBox, Message,Notification } from 'element-ui';


export default {
    confirm(message) {
        return new Promise((resoleve, reject) => {
            MessageBox.confirm(
                message,
                'Hint',
                {
                    confirmButtonText: 'Confirm',
                    cancelButtonText: "Cancel",
                    dangerouslyUseHTMLString: true,
                    type: "warning",
                }
            ).then(() => {
                resoleve(true);
            }).catch(() => {
                Message.info('Cancel');
                reject(false);
            })
        }).catch((err) => {
            console.log(err);
        })
    },
    message: {
        success(message) {
            Message.success(message);
        },
        error(message) {
            Message.error(message);
        },
        warning(message) {
            Message.warning(message);
        },
        info(message) {
            Message.info(message);
        }
    },
    notify: {
        success(message) {
            Notification({
                title: 'SUCCESS',
                message,
                type: 'success',
                duration: 3000,
            })
        },
        error(message) {
            Notification({
                title: 'ERROR',
                message,
                type: 'error',
                duration: 5000,
            })
        },
        warning(message) {
            Notification({
                title: 'WARNING',
                message,
                type: 'warning',
                duration: 4000,
            })
        },
        info(message) {
            Notification({
                title: 'INFO',
                message,
                type: 'info',
                duration: 3000,
            })
        }
    }
 }