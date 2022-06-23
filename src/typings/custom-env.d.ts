import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

declare module "next" {
	export interface Request extends NextApiRequest {}

	export interface Response extends NextApiResponse {
		socket: {
			server: io;
		};
	}
}
