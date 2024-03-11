import React from 'react'


function Square(props) {

  return (
    <>
     <div
     onClick={props.onClick}
     className="cursor-pointer rounded-lg font-bold font-kode text-8xl shadow-red-950 shadow-2xl text-red-800 bg-green-300 mb-8 h-32 w-40 flex justify-center items-center" 
     >
        <h5>{props.value}</h5>
    </div> 
    </>
  )
}

export default Square