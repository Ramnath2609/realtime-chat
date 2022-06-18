export interface IUser {
    id: string;
    room: string;
    username: string;
}

export enum ISocketEvent {
    connection = "connection",
    joinRoom = "joinRoom",
    message = "message",
    chatMessage = "chatMessage",
    disconnect = "disconnect",
    roomUsers = "roomUsers"
}