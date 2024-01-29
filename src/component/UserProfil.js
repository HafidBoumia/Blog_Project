import { Link } from "react-router-dom"
import { useEffect } from "react";
export default function UserProfile({ posts, inpts, logedUser, setInpts, edit, destroy, userId }) {
    useEffect(() => {
        let inpt = JSON.parse(localStorage.getItem('inpt'))
        setInpts(inpt)
    }, [])
    return (
        <>
            {logedUser && (
                <div className="bg-slate-200 space-y-5 w-full">
                    <div className="grid grid-cols-6 gap-4 px-6 pb-6">
                        <div className="bg-white px-4 py-3 col-span-2">
                            {inpts &&(
                                <>
                                <input value={inpts.name} disabled />
                                <input value={inpts.email} disabled />
                                </>
                            )}
                        </div>
                        <div className="col-span-4 space-y-4">
                            <div className="flex justify-between items-center px-2 py-2 h-10 bg-white">
                                <span className="font-medium text-sm">Populars</span>
                                <Link to='/CreatePost' className="bg-blue-500 text-sm text-white px-3 py-1 rounded-sm">Create Post</Link>
                            </div>
                            {posts && posts.filter(post => post.user_id === userId).map((post, index) => (
                                <div key={index}>
                                    <div className="bg-white space-y-4 rounded-t-md">
                                        <img className="w-full h-80 rounded-md mb-3" src={post.social_image} />
                                        <div className="px-3 pb-4">
                                            <h4 className="font-bold text-md">{post.title}</h4>
                                            <p className="text-sm font-light">{post.description}</p>
                                            <span className="text-xs font-light">{post.published_at}</span>
                                            <Link to='/CreatePost'><button onClick={() => edit(post, post.id)}>edit</button></Link> <br />
                                            <Link to='/UserProfile' onClick={() => destroy(post.id)}><button onClick={() => destroy(post.id)}>delete</button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}