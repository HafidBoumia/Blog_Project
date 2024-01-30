import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

export default function Rejister({setLogedUser}) {
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
    const checkUser = (e) => {
        e.preventDefault()
        let user = localStorage.getItem(inpts1.name)
        user = JSON.parse(user)
        if (user) {
            if (user.pwd === inpts1.pwd) {
                const inpt = JSON.stringify(user)
                localStorage.setItem('inpt', inpt)
                localStorage.setItem('isloged', true)
                setLogedUser(true)
                navigate('/')
            }
        }
    }
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">LOGIN</h1>
            </div>

            <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">
                        Username
                    </label>

                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter username"
                            onChange={handleInpts}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>

                    <div className="relative">
                        <input
                            type="password"
                            name="pwd"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            onChange={handleInpts}
                        />

                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        If you don't have an account
                        <Link className="underline ml-2" to="/Login">
                            Sing Up
                        </Link>
                    </p>

                    <button
                        onClick={checkUser}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
        //     <div className="w-60 ">
        //         <div className="flex flex-col items-center justify-center">
        //             <img />
        //             <label>User name</label>
        //             <input name="name" value={inpts1.name} type="text" onChange={handleInpts} />
        //             <label>User pwd</label>
        //             <input name="pwd" value={inpts1.pwd} type="password" onChange={handleInpts} />
        //             <button onClick={checkUser}>login</button>
        //         </div>
        //     </div>
    )
}