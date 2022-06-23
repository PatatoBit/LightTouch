import { useEffect } from "react";
import io from "socket.io-client";

const socket = io();

socket.on("connect", () => {
	console.log(`connected to socket-server ${socket.id}`);
});

export default function useSocket(name: string, callback: () => void) {
	useEffect(() => {
		socket.on(name, callback);

		return function cleanSocket() {
			socket.off(name, callback);
		};
	}, [name, callback]);

	return socket;
}
