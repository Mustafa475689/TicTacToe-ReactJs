import React from 'react'
import Square from './Square'
import { useState } from 'react'

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    //console.log("state", state);
    const [isXTurn, setIsXTurn] = useState(true);
    // funnction for decide winner
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return false;

    };


    const isWinner = checkWinner();

    const handleClick = (index) => {
        if(state[index] != null){
            return;
        }
        // console.log('cliick in idkk', index)
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    // funnction for restart 
    const handleReset = () => {
        setState(Array(9).fill(null));
    };
    return (
        <>

            <div className=' w-full h-screen fixed 
            bg-gradient-to-r from-zinc-800 via-silver-700 to-slate-900'>

<div className='w-1/2 ml-80 '>

{isWinner ? ( 
<>
<div className='w-96 h-64 rounded-lg  bg-green-300 items-center shadow-red-800 shadow-2xl ml-[180px]
 text-red-600 font-bold font-kode text-4xl mt-24 uppercase text-center'><span className='block text-8xl mb-4 '>{isWinner} </span>won  the game <button onClick={handleReset}
className='w-40 h-[48px] bg-red-600  
rounded-md font-bold text-green-300 text-4xl block shadow-green-600 shadow-lg mt-8 ml-[110px] font-kode'>Restart</button> 
</div> 
</>   
 ) : ( 
<>
<h4 className='text-3xl text-green-300 font-bold font-kode w-80 h-16 text-center py-3 rounded-lg mt-4 mb-2 ml-[180px] '>Player {isXTurn ? <span className='text-green-500 '>X</span> : <span className='text-red-500'>0</span>} Please Move</h4>
<div className='mt-8 '>
<div className='flex justify-evenly items-center  '>
                    <Square onClick={() => handleClick(0)} value={state[0]} />
                    <Square onClick={() => handleClick(1)} value={state[1]} />
                    <Square onClick={() => handleClick(2)} value={state[2]} />
                </div>
                <div className='flex justify-evenly items-center'>
                    <Square onClick={() => handleClick(3)} value={state[3]} />
                    <Square onClick={() => handleClick(4)} value={state[4]} />
                    <Square onClick={() => handleClick(5)} value={state[5]} />
                </div>
                <div className='flex justify-evenly items-center'>
                    <Square onClick={() => handleClick(6)} value={state[6]} />
                    <Square onClick={() => handleClick(7)} value={state[7]} />
                    <Square onClick={() => handleClick(8)} value={state[8]} />
                </div>
                </div>
                </>
)            }

</div>
            </div>


        </>
    );
};

export default Board
