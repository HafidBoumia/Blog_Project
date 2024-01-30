import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TfiTwitter } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

export default function Details({ Tag, setTag , posts }) {
    const description = 'Web development is the process of creating and maintaining websites or web applications. It encompasses a range of tasks, from designing the user interface and user experience to implementing the underlying logic and functionality. Web development can be broadly categorized into two main areas: front-end and back-end development.Front-end development involves creating the visual components of a website that users interact with directly. This includes the design, layout, and user interface. Technologies such as HTML, CSS, and JavaScript are commonly used in front-end development. Front-end developers work to ensure a seamless and visually appealing user experience.'
    useEffect(() => {
        const tag = localStorage.getItem('tag');
        setTag(tag)
    }, [])


    return (
        <div className="space-y-16">
            {posts && ((Tag ? (
                posts.filter(post => post.tag_list.includes(Tag)).map((post, index) => (
                    <div className="space-y-4" key={index}>
                        <div className="flex justify-between px-10 items-center">
                            <div className="flex space-x-3">
                                <img className="rounded-full w-12" src={post.user.profile_image_90} />
                                <Link to={post.user.website_url}>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-xs font-medium">{post.user.name}</span>
                                        <span className="text-xs font-light">{post.user.username}</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center gap-5">
                                <Link to={`https://twitter.com/${post.user.twitter_username}`}><TfiTwitter size="25" /></Link>
                                <Link to={`https://github.com/${post.user.github_username}`}><FaGithub size="25" /></Link>
                            </div>
                        </div>
                        <div className="flex space-x-4 px-8">
                            <img className="rounded-sm" src={post.social_image} width='630' />
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold">{post.title}</h3>
                                <p className="font-serif">{post.description}{description}</p>
                                <Link to='/'>see more posts</Link>
                            </div>
                        </div>
                    </div>
                ))) : (
                posts.filter(post => post.comments_count >= 4).map((post, index) => (
                    <div className="space-y-4" key={index}>
                        <div className="flex justify-between px-10 items-center">
                            <div className="flex space-x-3">
                                <img className="rounded-full w-12" src={post.user.profile_image_90} />
                                <Link to={post.user.website_url}>
                                    <div className="flex flex-col pt-1">
                                        <span className="text-xs font-medium">{post.user.name}</span>
                                        <span className="text-xs font-light">{post.user.username}</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex items-center gap-5">
                                <Link to={`https://twitter.com/${post.user.twitter_username}`}><TfiTwitter size="25" /></Link>
                                <Link to={`https://github.com/${post.user.github_username}`}><FaGithub size="25" /></Link>
                            </div>
                        </div>
                        <div className="flex space-x-4 px-8">
                            <img className="rounded-sm" src={post.social_image} width='630' />
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold">{post.title}</h3>
                                <p className="font-serif">{post.description}{description}</p>
                                <Link to='/'>see more posts</Link>
                            </div>
                        </div>
                    </div>
                )))
            ))}
        </div>
    )
}