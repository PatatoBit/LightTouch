import nextConnect from "next-connect";
import socketMiddleware from "./socket.io";

const middleware = nextConnect();

middleware.use(socketMiddleware);

export default middleware;
