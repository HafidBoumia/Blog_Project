import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TfiTwitter } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PostDetails({}) {
    const description = 'Web development is the process of creating and maintaining websites or web applications. It encompasses a range of tasks, from designing the user interface and user experience to implementing the underlying logic and functionality. Web development can be broadly categorized into two main areas: front-end and back-end development.Front-end development involves creating the visual components of a website that users interact with directly. This includes the design, layout, and user interface. Technologies such as HTML, CSS, and JavaScript are commonly used in front-end development. Front-end developers work to ensure a seamless and visually appealing user experience.'
    const [RandomPost, setRandomPost] = useState(null)
    const { id } = useParams();
    const getPost = async () => {
        const post = await axios.get(`https://dev.to/api/articles/${id}`);
        setRandomPost(post.data)
    }
    useEffect(() => {
        getPost()
    }, [id])
    return (
        <>
            {RandomPost && (
                <div className="space-y-4">
                    <div className="flex justify-between px-10 items-center">
                        <div className="flex space-x-3">
                            <img className="rounded-full w-12" src={RandomPost.user.profile_image_90} />
                            <Link to={RandomPost.user.website_url}>
                                <div className="flex flex-col pt-1">
                                    <span className="text-xs font-medium">{RandomPost.user.name}</span>
                                    <span className="text-xs font-light">{RandomPost.user.username}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="flex gap-5">
                            <Link to={`https://twitter.com/${RandomPost.user.twitter_username}`}><TfiTwitter size="25" /></Link>
                            <Link to={`https://github.com/${RandomPost.user.github_username}`}><FaGithub size="25" /></Link>
                        </div>
                    </div>
                    <div className="flex space-x-4 px-8">
                        <img className="rounded-sm" src={RandomPost.social_image} width='630' />
                        <div className="space-y-3">
                            <h3 className="text-lg font-bold">{RandomPost.title}</h3>
                            <p className="font-serif">{RandomPost.description}{description}</p>
                            <Link to='/'>see more posts</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}