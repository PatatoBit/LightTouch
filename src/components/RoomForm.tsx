import React, { useState } from 'react'
import Link from 'next/link';

let keycode: number = Math.floor(Math.random()* 90000) + 10000;
function createRoom(){
	// Do backend stuff here I think

	// Create a random keycode
	keycode = Math.floor(Math.random()* 90000) + 10000;
}


function RoomForm() {
	const [inputValue, setInputValue] = useState('');

  return (
    <>
			<div className="my-2 flex flex-row">
				<input type="number" className="input" placeholder="Room Code" pattern="\d*" maxLength={5} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				
				{inputValue ? 
					<Link href={`/${inputValue}`}><a className="button ml-2">Join</a></Link> 
					: 
					<button className="button">Join</button>
				}
			</div>
			<Link href={`/${keycode}`}><a className="button" onClick={createRoom}>Create Room</a></Link>
    </>
  )
}

export default RoomForm
