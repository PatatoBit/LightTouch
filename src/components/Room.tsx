import React from 'react'

function createRoom(){
	// Do backend stuff here I think

	// Create a random keycode
	const keycode = Math.floor(Math.random()*90000) + 10000;
	console.log(keycode)
}


function Room() {
  return (
    <>
      <button className="text-3xl text-yellow-300 font-bold" onClick={createRoom}>Create Room</button>
      {/* <h1 className="text-3xl text-yellow-300">Room Code</h1> */}
      {/* <h1 className="text-4xl text-yellow-300 font-bold">1234</h1> */}
    </>
  )
}

export default Room
