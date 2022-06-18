const moment = require('moment');

export function formatMessage(username: string, text: string) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}
