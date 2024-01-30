import { Link } from "react-router-dom"

export default function PopularPosts({ posts }) {
    return (
        <div className="bg-white px-4 py-3 overflow-y-auto">
            <span className="font-medium">Popular Posts</span>
            <div className="flex flex-col gap-3 mt-2 ">
                {posts && posts.filter(post => post.public_reactions_count >= 4).map((post, index) => (
                    <div className=" flex space-x-2 items-center font-normal text-sm">
                        <img className="rounded-sm float-left object-cover w-20 h-14" src={post.social_image} />
                        <div className="flex flex-col">
                            <span><Link className="" to={`/PostDetails/${post.id}`}>{post.title}</Link></span>
                            <code className="font-light text-xs">June 11,2024</code>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   