import React, {useState} from 'react'

function MoreThings(){
    const [moreThings, setMoreThings] = useState(["More Things 1", "More Things 2"])

    const showMoreThings = moreThings.map(moreThing => 
        <p>{moreThing}</p>
    )

    function addMoreThings(){
        setMoreThings(prevState => [...prevState, `Thing ${prevState.length + 10}`])
    }

    return(
        <div>
             <h1>More Things!</h1>
             <button onClick={addMoreThings}>Let's add more things</button>
             {showMoreThings}
        </div>
       
    )
}

export default MoreThings