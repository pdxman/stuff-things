import React, { useState } from 'react'

function Things(){
    const [theThings, setTheThings] = useState(["Thing 1", "Thing2"])

    const showThings = theThings.map(thing => (
        <p>{thing}</p>
    ))

    function addThing(){
        setTheThings(prevState => [...prevState, `Thing ${prevState.length + 1}`])
    }

    return(
        <div>
            <h2>Things!</h2>
            <button onClick={addThing}>Add Things to the list!</button>
            {showThings}
        </div>
        
    )
}

export default Things