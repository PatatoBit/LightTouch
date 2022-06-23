import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

import io from "socket.io-client";

declare module "next" {
	export interface Request extends NextApiRequest {
		user: {
			id: string;
			name: string;
		};
	}

	export interface Response extends NextApiResponse {
		socket: {
			server: io;
		};
	}
}
