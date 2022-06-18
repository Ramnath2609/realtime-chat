"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const moment = require('moment');
function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    };
}
exports.formatMessage = formatMessage;
