import React, { useEffect, useRef, useState } from 'react';
const App=()=>{

    const[firtsName,setFirstName]=useState('');
    const renderCount=useRef(1);
    useEffect(()=>{
        renderCount.current=renderCount.current+1;
    })
    return <>
    <input type="text" id="firstName" name="firstName"
    onChange={(e)=> {
        setFirstName(e.target.value);
    }}
    />
    <h5>Typing:{firtsName}</h5>
    <h5>Component rendered {renderCount.current} times</h5>
    </>
};
export default App;