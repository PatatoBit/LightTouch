import React from 'react'
import Link from 'next/link';


let keycode: number = Math.floor(Math.random()* 90000) + 10000;;
function createRoom(){
	// Do backend stuff here I think

	// Create a random keycode
	keycode = Math.floor(Math.random()* 90000) + 10000;
}


function RoomForm() {
  return (
    <>
			<div className="my-2 flex flex-row">
				<input type="number" className="text-3xl w-56 h-24 bg-slate-700 rounded-lg p-2 text-center" placeholder="Room Code" pattern="\d*" maxLength={5}/>
				<button className="button ml-2">Join</button>
			</div>
			<Link href={`/${keycode}`}><a className="button" onClick={createRoom}>Create Room</a></Link>
    </>
  )
}

export default RoomForm
