import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Rejister({ inpts, setInpts, setLogedUser, setUserId, setUserData}) {
    const [inpts1, setInpts1] = useState({
        name: '',
        pwd: '',
    })
    const navigate = useNavigate()
    const handleInpts = (e) => {
        setInpts1({
            ...inpts1,
            [e.target.name]: e.target.value
        })
    }
    const checkUser = () => {
        let user = localStorage.getItem(inpts1.name)
        user = JSON.parse(user)
        setUserId(inpts1.userId)
        if(user){
            if (user.pwd === inpts1.pwd) {
                const inpt = JSON.stringify(user)
                localStorage.setItem('inpt', inpt)
                localStorage.setItem('isloged', true)
                setLogedUser(true)
                navigate('/UserProfile')
            }
        }
    }
    return (
        <div className="w-60 ">
            <div className="flex flex-col items-center justify-center">
                <img />
                <label>User name</label>
                <input name="name" value={inpts1.name} type="text" onChange={handleInpts} />
                <label>User pwd</label>
                <input name="pwd" value={inpts1.pwd} type="password" onChange={handleInpts} />
                <button onClick={checkUser}>login</button>
            </div>
        </div>
    )
}