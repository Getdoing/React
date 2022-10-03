import React, { useState } from 'react';
import Functional from'./Functional';
import Class from './Class';

const Comman=()=>{
    const [state1,setState]=useState(false);
    const [state2,setState2]=useState(false);

    function handleChange1(){
        setState(!state1);
    }
    function handleChange2(){
        setState2(!state2);
    }

    return(
        <>
        <div>
            <h1 className='heading'>Styling Using Functional And Class Component</h1>

            <button className='btn1' onClick={handleChange1}>To See Styling In Functional Component</button>
            <button className='btn2' onClick={handleChange2}>To See Styling In Class Componen</button>

        </div>
        {state1 && <Functional/>}
        {state2 && <Class/>}

        </>
    )
}

export default Comman;
