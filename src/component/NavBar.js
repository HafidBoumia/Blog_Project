
import { useState, useEffect } from "react"
import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom"


export default function Navbar({setSearch, search,posts, logedUser, setLogedUser, setIsReact}){
    const navigate = useNavigate()
     
    const handle = (e) =>{
        setSearch(e.target.value)
    }
    const handleForm = () =>{
        const setLogout = localStorage.removeItem('isloged')
        setLogedUser(setLogout)
        setIsReact(false)
    }


    return(
        <div className="bg-white px-6">
        <nav className="flex justify-between">
            <div className="flex space-x-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18" id="DiggLogo" width="50" height="40"><path d="M9 4h3v10H9zM9 0h3v3H9zM5 0v4H0v10h8V0H5zm0 11H3V7h2v4zm8 3h5v1h-5v3h8V4h-8v10zm3-7h2v4h-2V7zm6-3v10h5v1h-5v3h8V4h-8zm3 7V7h2v4h-2z" fill="#88bfd1" class="color000000 svgShape"></path></svg>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/'>Contact</NavLink>
                {logedUser && <NavLink to='/CreatePost'>New Post</NavLink>}
                
            </div>
            <div className="flex items-center">
                <div className="">
                    <input type="text" value={search} placeholder="search" onChange={(e)=>handle(e)} className="border border-gray-300 mx-10 rounded-full px-3 focus:outline-none"/>
                </div>
                <img />
                {!logedUser ? (
                    <>
                    <NavLink to="/Login">Register</NavLink> <span className="px-2">/</span> <NavLink to="/Rejister">Login</NavLink>
                    </>
                ):(
                    <>
                    <NavLink to="/UserProfile"><FaUserEdit /></NavLink> 
                    <NavLink to="/" onClick={handleForm}>Login Out</NavLink>
                    </>
                )
                }
            </div>
        </nav>
    </div>
    )
}