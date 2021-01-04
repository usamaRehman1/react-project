import React, { useContext, useState } from "react"
import { CombineContext } from '../../context'

export const Users = () => {

    let context = useContext(CombineContext)
    let { value , users } = context[0];

    let [ name , setName ] = useState('');
    let [ email , setEmail ] = useState('')

    const handelChange = (ev)=>{
        ev.preventDefault()

        let newUser = {
            name,
            email,
        }

        users.push(newUser)

        context[1]({
            users,
            value,
        })
        setName('')
        setEmail('')
    }

    return(
        <div>
            <h2>Users</h2>

            <form style={{margin: 20 }} onSubmit={handelChange}>
                <label>Name :</label>
                <input type="text" value={name}  onChange={(ev) => setName(ev.target.value)}/>
                <br /> 

                <label>Email :</label>
                <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
                <br />

                <button type="submit">ADD USER</button>
            </form>
            <table border="1">
                <tbody>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    users.map((userObj , ind) => {
                        return(
                            <tr key={ind}>
                                <td>{ind}</td>
                                <td>{userObj.name}</td>
                                <td>{userObj.email}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}