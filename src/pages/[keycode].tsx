import type { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { useRouter, NextRouter } from "next/router";

import Link from "next/link";
import Head from 'next/head';


import middleware from "../middlewares/middleware";

import Ring from "../components/Ring";

import { io, Socket } from "socket.io-client";
let socket: Socket;

export default function Lobby() {
	const router: NextRouter = useRouter();
	const { keycode } = router.query;

	const [light, setLight] = useState(false);

	const mouseEnter = async () => {
		socket.emit(`${keycode} light`, true);
		setLight(true);

		return;
	};

	const mouseLeave = async () => {
		socket.emit(`${keycode} light`, false);
		setLight(false);

		return;
	};

	useEffect((): any => {
		socket = io();

		socket.on(`${keycode} light`, (status) => {
			setLight(status[0]);
		});

		if (socket) return () => socket.disconnect();
	}, [keycode]);

	return (
		<>
			<Head>
				<title>Room: {keycode}</title>
				<link rel="icon" href="/assets/PixelLight.png" />
			</Head>

			<div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
				<h1 className="text-5xl text-yellow-300">Light Touch</h1>
				<div className="text-2xl mt-2 text-yellow-300">Room ID: {keycode}</div>

				<Ring
					isHovering={light}
					onMouseEnter={mouseEnter}
					onMouseLeave={mouseLeave}
				/>
				<Link href="/">
					<a className="button">Leave</a>
				</Link>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	await middleware.run(req, res);

	return {
		props: {},
	};
};
