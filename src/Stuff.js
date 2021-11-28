import React, { useState } from 'react'

function Stuff(){
    const [theStuff, setTheStuff] = useState(["Stuff 1", "Stuff 2"])

    const showTheStuff = theStuff.map(stuff => (
        <p>{stuff}</p>
    ))

    function addStuff(){
        setTheStuff(prevState => [...prevState, `Stuff ${prevState.length + 1}`])
    }

    return(
        <div>
            <h2>Stuff!</h2>
            <button onClick={addStuff}>add some stuff!</button>
            {showTheStuff}
        </div>
    )
}

export default Stuff