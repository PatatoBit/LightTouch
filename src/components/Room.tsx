import React from 'react'

function createRoom(){
	// Do backend stuff here I think

	// Create a random keycode
	const keycode = Math.floor(Math.random()* 90000) + 10000;
	console.log(keycode)
}


function Room() {

  return (
    <>
			<div className="my-2 flex flex-row">
				<input type="number" className="text-3xl w-56 h-24 bg-slate-700 rounded-lg p-2 text-center" placeholder="Room Code" pattern="\d*" maxLength={5}/>
				<button className="button ml-2">Join</button>
			</div>
      <button className="button" onClick={createRoom}>Create Room</button>
    </>
  )
}

export default Room
