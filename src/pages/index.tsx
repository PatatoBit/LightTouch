import Ring from "../components/Ring";

import RoomForm from '../components/RoomForm'

import useSocket from "../hooks/useSocket";


export default function Home() {
	useSocket("test", () => {
		console.log("test");
	});
	return (
		<div className="flex flex-col w-full h-screen items-center justify-center bg-slate-800">
			<h1 className="text-5xl text-yellow-300">Light Touch</h1>
			<Ring />
			<RoomForm />
		</div>
	);
}
