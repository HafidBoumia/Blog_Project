import { Link } from "react-router-dom"
import { useEffect } from "react";
export default function UserProfile({ posts, inpts, logedUser, edit, destroy, userId, }) {

    return (
        <>
            {logedUser && (
                <div className="bg-slate-200 space-y-5 w-full">
                    <div className="grid grid-cols-6 gap-4 px-6 pb-6">
                        <div className="bg-white px-4 py-3 col-span-2">
                            {inpts && (
                                <div className="flex flex-col">
                                    <span> {inpts.name} </span>
                                    <span> {inpts.email} </span>
                                    {/* <label>Add website Link: </label>
                                    <input value="" type="text" />
                                    <label>Add full_name</label>
                                    <input value="" type="text" />
                                    <label>Add twitter Username:  </label>
                                    <input value="" type="text" />
                                    <label>Add github Username:  </label>
                                    <input value="" type="text" /> */}

                                </div>
                            )}
                        </div>
                        <div className="col-span-4 space-y-4">
                            <div className="flex justify-between items-center px-2 py-2 h-10 bg-white">
                                <span className="font-medium text-sm">My Posts</span>
                                <Link to='/CreatePost' className="bg-blue-500 text-sm text-white px-3 py-1 rounded-sm">Create Post</Link>
                            </div>
                            {posts && userId && (posts.filter(post => post.user_id === userId).map((post, index) => (
                                <div key={index}>
                                    <div className="bg-white space-y-4 rounded-t-md">
                                        <img className="w-full h-80 rounded-md mb-3" src={post.social_image} />
                                        <div className="px-3 pb-4">
                                            <h4 className="font-bold text-md">{post.title}</h4>
                                            <p className="text-sm font-light">{post.description}</p>
                                            <span className="text-xs font-light">{post.published_at}</span>
                                            <div className="flex space-x-4 px-3 mt-1">
                                                <Link to='/CreatePost'><button onClick={() => edit(post, post.id)} className="border border-cyan-600 px-4 rounded-sm hover:bg-teal-600">edit</button></Link> <br />
                                                <Link to='/UserProfile' onClick={() => destroy(post.id)}><button onClick={() => destroy(post.id)} className="border border-red-600 px-2 rounded-sm hover:bg-red-500">delete</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}