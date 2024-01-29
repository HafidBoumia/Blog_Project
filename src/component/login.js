import { useState } from "react"
import { json } from "react-router-dom"

export default function Login({ inpts, setInpts, setUserId}) {

    const handleInpts = (e) => {
        setInpts({
            ...inpts,
            [e.target.name]: e.target.value
        })
    }
    const createUser = () => {
        const user = JSON.stringify({...inpts, userId : Date.now()})
        localStorage.setItem(inpts.name, user)
        localStorage.setItem('isloged',true)
        setUserId(user.userId)
    }
    
    return (
        <div className="w-60 ">
            <div className="flex flex-col items-center justify-center">
                <img />
                <label>User name</label>
                <input name="name"  type="text" onChange={handleInpts} />
                <label>User Email</label>
                <input name="email"  type="email" onChange={handleInpts} />
                <label>User pwd</label>
                <input name="pwd" type="password" onChange={handleInpts} />
                <button onClick={createUser}>Creat</button>
            </div>
        </div>
    )
}