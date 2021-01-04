import React, { useState } from 'react'
import { CombineContext } from './context';
import Home from './component'


function App (){

    let INITIALSTATE = {
        users : [
            {
                name : "usama rehman",
                email : "urehman739@gmail.com",
            },
            {
                name : "huzaifa rehman",
                email : "huzaifa@gmail.com",
            },
        ],
        value : 0,
    }

    let state = useState(INITIALSTATE);

    return(
        <CombineContext.Provider value={state}>
            <Home />
        </CombineContext.Provider>
    ) 
}

export default App;