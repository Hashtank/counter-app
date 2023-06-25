import React, { useState } from 'react'

function Counter() {
    const [count, setcount] = useState(0)
    const [showCount, setShowCount] = useState(false)

  return (
    <div>
        <button onClick={()=>setShowCount(!showCount)}>{showCount ? 'Hide show count':'Show count'}</button>

        { showCount ? (
        <>    
        <h2> Counter Show Open</h2>
        <h3> Counter is - {count} </h3>
        <button onClick={()=>setcount(count+1)}> Increment </button>
        </>
        ) :null }

    </div>
  )
}

export default Counter