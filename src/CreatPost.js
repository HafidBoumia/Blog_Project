import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function CreatePost({ logedUser, newPost, setNewPost, setPosts, posts, selectedId, setSelectedId, userId }) {

    const handleInpts = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value,
        })
    }

    const HandlSubmit = (e) => {
        e.preventDefault();
        if (selectedId) {
            const newPosts = [...posts]
            const index = posts.findIndex(post => post.id === selectedId)
            newPosts[index] = { ...newPost }
            const obj = JSON.stringify(newPosts);
            localStorage.setItem('obj', obj);
            setPosts(newPosts)
            setSelectedId(null)
        } else {
            const post = [...(posts || []), {
                ...newPost, user_id : userId, social_image: "https://media.dev.to/cdn-cgi/image/width=1000,height500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F27uh52gilomv7059lwf4.png"
            }]
            const obj = JSON.stringify(post);
            localStorage.setItem('obj', obj);
            setPosts(post)
        }

    }

    return (
        <>
            {logedUser && (
                <form onSubmit={HandlSubmit}>
                    <div className="flex flex-col">
                        <label>Title</label>
                        <input type="text" name="title" value={newPost.title} onChange={handleInpts} />
                        <label>description</label>
                        <input type="description" name="description" value={newPost.description} onChange={handleInpts} />
                        <label>Categorie</label>
                        <input type="text" name="tags" value={newPost.tags} onChange={handleInpts} />
                        <label>Image Link</label>
                        <input type="text" name="social_image" value={newPost.social_image} onChange={handleInpts} />
                        <button>Create</button>
                    </div>
                </form>
            )}
        </>
    )
}