import http from "http";
import express from "express";
const app = express();
import { Server as SocketServer } from "socket.io";
import { handleSocket } from "./socket";

app.get("/", (req, res) => {
    res.send("hello world");
});

const httpServer = http.createServer(app);
const io = new SocketServer(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
});

io.sockets.on("connection", (socket) => {
  console.log("A client connected to the websocket layer");
  handleSocket(socket);
});

httpServer.listen({ port: process.env.PORT || 5000 }, () => {
  console.log(`🚀  Web Socket Server ready at http://localhost:5000/`);
});