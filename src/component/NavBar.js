
import { useState, useEffect } from "react"
import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";


export default function Navbar({
    setSearch,
    search,
    logedUser,
    setLogedUser,
    setIsReact,
    Tag }) {

    const navigate = useNavigate()
    const handle = (e) => {
        setSearch(e.target.value)
        !Tag ?
            navigate('/')
            :
            navigate('/BlogForm')
    }

    const handleForm = () => {
        const setLogout = localStorage.removeItem('isloged')
        setLogedUser(setLogout)
        setIsReact(false)
    }

    return (
        <div className="bg-white px-6">
            <nav className="flex justify-between">
                <div className="flex space-x-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 18" id="DiggLogo" width="50" height="40" className="mr-12"><path d="M9 4h3v10H9zM9 0h3v3H9zM5 0v4H0v10h8V0H5zm0 11H3V7h2v4zm8 3h5v1h-5v3h8V4h-8v10zm3-7h2v4h-2V7zm6-3v10h5v1h-5v3h8V4h-8zm3 7V7h2v4h-2z" fill="#88bfd1" class="color000000 svgShape"></path></svg>
                    <NavLink to='/' className="text-sm font-medium flex items-center"><HiOutlineHome size="18" />Home</NavLink>
                    {logedUser && <NavLink to='/CreatePost' className="text-sm font-medium flex items-center"><MdOutlineAddPhotoAlternate size="18" />New Post</NavLink>}

                </div>
                <div className="flex items-center">
                    <div className="">
                        <input type="text" value={search} placeholder="find Category" onChange={(e) => handle(e)} className="border border-gray-300 mx-10 rounded-full px-3 focus:outline-none" />
                    </div>
                    {!logedUser ? (
                        <div className="space-x-4">
                            <NavLink to="/Login" className='hover:text-orange-500'>Sing Up</NavLink>  <NavLink to="/Rejister" className='hover:text-orange-500'>Login</NavLink>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <NavLink to="/UserProfile" className="text-sm font-medium flex items-center"><FaUserEdit size="18" />Profile</NavLink>
                            <NavLink to="/" onClick={handleForm} className="text-sm font-medium flex items-center"><FiLogOut size="18" />Login Out</NavLink>
                        </div>
                    )
                    }
                </div>
            </nav>
        </div>       
    )
}