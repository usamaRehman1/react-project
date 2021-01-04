import React from 'react'
import { Users } from './user'
import { Counter } from './counter'

function Home(){

    return(
        <div>
            <Counter />
            <Users  />
        </div>
    )
}
export default Home;