import React, { useState } from 'react'



export default function Ring() {
  const [ isHovered, setHovering ] = useState(false)
  const onMouseEnter = () => setHovering(true);
  const onMouseLeave = () => setHovering(false);

 
  // return (
  //   <div className="my-10 border-4 border-yellow-300 rounded-full w-80 h-80 hover:shadow-yellow-200 hover:shadow-2xl hover:bg-yellow-200 hover:border-yellow-200 transition-all"></div>
  // )

  if ( isHovered ) {
    return (
    <div 
      className="my-10 border-4  rounded-full w-80 h-80 shadow-yellow-200 shadow-2xl bg-yellow-200 border-yellow-200 transition-all"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
    )
  } else return (
    <div 
      className="my-10 border-4 border-yellow-300 rounded-full w-80 h-80 transition-all"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  )
}
