import Counter from './Counter';
import React,{useState} from 'react';

function App() {
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >

    <h1> Counter App </h1>


    <Counter/>
    </div>
  );
}

export default App;
