import React, { useState } from 'react'
import Link from 'next/link';

let keycode: number = Math.floor(Math.random()* 90000) + 10000;
function createRoom(){
	// Create a random keycode
	keycode = Math.floor(Math.random()* 90000) + 10000;
}

function RoomForm() {
	const [inputValue, setInputValue] = useState('');

  return (
		<div className="flex flex-col w-74">
			<div className="my-2 flex flex-row">
				<input type="number" className="input" placeholder="Room Code" pattern="\d*" maxLength={5} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				
				{inputValue ? 
					<Link href={`/${inputValue}`}><button className="button ml-2">Join</button></Link> 
					: 
					<button className="button ml-2">Join</button>
				}
			</div>
			<Link href={`/${keycode}`}><a className="button text-center" onClick={createRoom}>Create Room</a></Link>
		</div>
  )
}

export default RoomForm
