import React, { useContext } from 'react'
import { CombineContext } from '../../context'

export function Counter (){

    let context = useContext(CombineContext);
    let { value , users } = context[0]; 

    return(
        <div>
            <h2>Value of counter is : { value } </h2>
            <button onClick={()=> { context[1]({users , value : ++context[0].value })}}>Increment</button>
            <button onClick={()=> { context[1]({users , value : --context[0].value })}}>Decrement</button>
            <button onClick={()=> { context[1]({users , value : 0 })}}>Reset</button>
            
        </div>
    )

}
