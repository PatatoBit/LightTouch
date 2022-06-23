import type { NextHandler } from "next-connect";
import type { Request, Response } from "next";

import { Server } from "socket.io";

export default function socketMiddleware(
	req: Request,
	res: Response,
	next: NextHandler
) {
	if (!res.socket.server.io) {
		const io = new Server(res.socket.server);

		io.on("connection", (socket) => {
			console.log(`${socket.id} connected.`);

			socket.onAny((ev, ...args) => {
				socket.broadcast.emit(ev, args);
			});

			socket.on("disconnect", () => {
				console.log(`${socket.id} disconnected.`);
			});
		});

		res.socket.server.io = io;
	}

	return next();
}
