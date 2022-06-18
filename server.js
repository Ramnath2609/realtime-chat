const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", socket => {
    console.log(`WS connection ....${socket}`)
})

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
