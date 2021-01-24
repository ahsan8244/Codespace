"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSocket = void 0;
var handleSocket = function (socket) {
    socket.on("join_stream", function (streamId) {
        socket.join(streamId);
    });
    socket.on("start_stream", function (streamId) {
        socket.on("write_code", function (code) {
            console.log(code);
            socket.to(streamId).emit("read_code", code);
        });
        socket.on("change_file", function (filename) {
            socket.to(streamId).emit("current_file_change", filename);
        });
    });
};
exports.handleSocket = handleSocket;
