"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var socket_io_1 = require("socket.io");
var socket_1 = require("./socket");
app.get("/", function (req, res) {
    res.send("hello world");
});
var httpServer = http_1.default.createServer(app);
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    }
});
io.sockets.on("connection", function (socket) {
    console.log("A client connected to the websocket layer");
    socket_1.handleSocket(socket);
});
httpServer.listen({ port: process.env.PORT || 5000 }, function () {
    console.log("\uD83D\uDE80  Web Socket Server ready at http://localhost:5000/");
});
