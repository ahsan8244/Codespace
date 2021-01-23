import { Socket } from "socket.io/dist/socket";

interface ICode {
  [fileName: string]: string
}

export const handleSocket = (socket: Socket) => {
  socket.on("join_stream", (streamId: string) => {
    socket.join(streamId);
  });

  socket.on("start_stream", (streamId: string) => {
    socket.on("write_code", (code: ICode) => {
      console.log(code);
      socket.to(streamId).emit("read_code", code);
    });

    socket.on("change_file", (filename: string) => {
      socket.to(streamId).emit("current_file_change", filename);
    });
  });
}