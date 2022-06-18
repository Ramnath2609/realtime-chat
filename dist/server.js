"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const types_1 = require("./utils/types");
const users_1 = require("./utils/users");
const messages_1 = require("./utils/messages");
const PORT = 3005 || process.env.PORT;
const botName = 'ChatBot';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on(types_1.ISocketEvent.connection, (socket) => {
    console.log('within connection', socket);
    socket.on(types_1.ISocketEvent.joinRoom, ({ username, room }) => {
        const user = (0, users_1.userJoin)(socket.id, username, room);
        console.log(socket.id, username, room);
        socket.join(user.room);
        // Welcome current user
        socket.emit(types_1.ISocketEvent.message, (0, messages_1.formatMessage)(botName, 'Welcome to ChatCord!'));
        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(types_1.ISocketEvent.message, (0, messages_1.formatMessage)(botName, `${user.username} has joined the chat`));
        // Send users and room info
        io.to(user.room).emit(types_1.ISocketEvent.roomUsers, {
            room: user.room,
            users: (0, users_1.getRoomUsers)(user.room)
        });
    });
    // Listen for chatMessage
    socket.on(types_1.ISocketEvent.chatMessage, (msg) => {
        const user = (0, users_1.getCurrentUser)(socket.id);
        io.to(user.room).emit('message', (0, messages_1.formatMessage)(user.username, msg));
    });
    // Runs when client disconnects
    socket.on(types_1.ISocketEvent.disconnect, () => {
        const user = (0, users_1.userLeave)(socket.id);
        if (user) {
            io.to(user.room).emit(types_1.ISocketEvent.message, (0, messages_1.formatMessage)(botName, `${user.username} has left the chat`));
            // Send users and room info
            io.to(user.room).emit(types_1.ISocketEvent.roomUsers, {
                room: user.room,
                users: (0, users_1.getRoomUsers)(user.room)
            });
        }
    });
});
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
