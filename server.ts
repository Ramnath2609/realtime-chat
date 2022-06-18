import express from "express";
import path from 'path';
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { ISocketEvent } from "./utils/types";
import {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} from './utils/users';
import { formatMessage } from './utils/messages'
const PORT = 3005 || process.env.PORT;

const botName = 'ChatBot';

const app = express();

app.use(cors());

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(express.static("client/public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

io.on(ISocketEvent.connection, (socket: any) => {
    socket.on(ISocketEvent.joinRoom, ({ username, room }: { username: string, room: string }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit(ISocketEvent.message, formatMessage(botName, 'Welcome to ChatCord!'));

        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                ISocketEvent.message,
                formatMessage(botName, `${user.username} has joined the chat`)
            );

        // Send users and room info
        io.to(user.room).emit(ISocketEvent.roomUsers, {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for chatMessage
    socket.on(ISocketEvent.chatMessage, (msg: string) => {
        const user = getCurrentUser(socket.id);

        io.to(user!.room).emit('message', formatMessage(user!.username, msg));
    });

    // Runs when client disconnects
    socket.on(ISocketEvent.disconnect, () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                ISocketEvent.message,
                formatMessage(botName, `${user.username} has left the chat`)
            );

            // Send users and room info
            io.to(user.room).emit(ISocketEvent.roomUsers, {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
})

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
