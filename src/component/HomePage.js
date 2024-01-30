import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { LuHeart } from "react-icons/lu"
import axios from "axios"

export default function HomePage({ posts, search }) {
    useEffect(() => {
        localStorage.removeItem('tag');
    }, [])

    return (
        <>
            <div className="col-span-2 space-y-4 overflow-y-auto h-screen">
                <div className="flex justify-between items-center px-2 py-2 h-10 bg-white">
                    <span className="font-medium text-sm">Populars</span>
                    <Link to='/Details' className="bg-blue-500 text-sm text-white px-3 py-1 rounded-sm">SEE MORE</Link>
                </div>
                {posts && (!search ? (
                    posts.map((post, index) => (
                        <div key={index}>
                            <div className="bg-white space-y-4 rounded-t-md">
                                <img className="w-full h-80 rounded-md mb-3" src={post.social_image} />
                                <div className="px-3 pb-4">
                                    <h4 className="font-bold text-md">{post.title}</h4>
                                    <p className="text-sm font-light">{post.description}</p>
                                    <div className="flex  justify-between items-center">
                                        <span className="text-xs font-light">{post.published_at}</span>
                                        {/* <div className="flex items-center mt-2">
                                            <button onClick={() => postReact(post.id)}><LuHeart color={isReact ? "red" : "" }/></button>
                                            <code>{post.public_reactions_count}</code>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))) : (
                    posts.filter(post => post.tags.replace(/[,\s]/g, "").toLowerCase().includes(search.replace(/[,\s]/g, "").toLowerCase())).map((post, index) => (
                        <div>
                            <div className="bg-white space-y-4 rounded-t-md">
                                <img className="w-full h-80 rounded-md mb-3" src={post.social_image} />
                                <div className="px-3 pb-4">
                                    <h4 className="font-bold text-md">{post.title}</h4>
                                    <p className="text-sm font-light">{post.description}</p>
                                    <div className="flex  justify-between items-center">
                                        <span className="text-xs font-light">{post.published_at}</span>
                                        {/* <div className="flex items-center mt-2">
                                            <button onClick={() => postReact(post.id)}><LuHeart /></button>
                                            <code>{post.public_reactions_count}</code>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )))}
            </div>

        </>


    )
} 