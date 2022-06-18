"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISocketEvent = void 0;
var ISocketEvent;
(function (ISocketEvent) {
    ISocketEvent["connection"] = "connection";
    ISocketEvent["joinRoom"] = "joinRoom";
    ISocketEvent["message"] = "message";
    ISocketEvent["chatMessage"] = "chatMessage";
    ISocketEvent["disconnect"] = "disconnect";
    ISocketEvent["roomUsers"] = "roomUsers";
})(ISocketEvent = exports.ISocketEvent || (exports.ISocketEvent = {}));
