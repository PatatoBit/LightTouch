import type { NextHandler } from "next-connect";
import type { Request, Response } from "next";

import { Server } from "socket.io";

export default function socketMiddleware(
	req: Request,
	res: Response,
	next: NextHandler
) {
	if (res.socket.server.io) {
		console.info("socket server is already running !");
	} else {
		console.info("socket server is initializing");
		const io = new Server(res.socket.server);

		res.socket.server.io = io;
	}
	return next();
}
