import React from 'react'

import { useRouter } from 'next/router';
import Link from 'next/link';

import Ring from '../components/Ring'

function Lobby() {
	const router = useRouter();
	const { keycode } = router.query;

	return (
		<>
			<div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
				<h1 className="text-5xl text-yellow-300">Light Touch</h1>
				<div className="text-2xl mt-2 text-yellow-300">Room ID: { keycode }</div>

				<Ring />
				<Link href="/"><a className="button">Leave</a></Link>
			</div>
		</>
	)
}

export default Lobby
