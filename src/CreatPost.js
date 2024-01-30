import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function CreatePost({ logedUser, newPost, setNewPost, setPosts, posts, selectedId, setSelectedId, userId, setIsAdded, isAdded}) {
    const navigate = useNavigate()
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
              setPosts(newPosts)
              setSelectedId(null)
          } else {
              const post = [...(posts || []), {
                  ...newPost, user_id : userId
              }]
              setPosts(post)
          }
          setNewPost({
            ...newPost,
            title: '',
            description: '',
            tags: '',
            social_image: "",
        })
          setIsAdded(!isAdded)
          navigate('/UserProfile')
      }
  
      return (
          <>
              {logedUser && (
                     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                     <div className="mx-auto max-w-lg text-center">
                       <h1 className="text-2xl font-bold sm:text-3xl">
                         Get started to create your blog
                       </h1>
                       <p className="mt-3 text-gray-500 ml-2 text-sm">
                       Blogs can serve various purposes, including personal journals, educational resources, news outlets, marketing tools for businesses, and more.
                       </p>
                     </div>
           
                     <form
                       className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                       onSubmit={HandlSubmit}
                     >
                       <div>
                         <label htmlFor="email" className="sr-only">
                           Title
                         </label>
                         <div className="relative">
                           <input
                             type="text"
                             name="title"
                             value={newPost.title}
                             onChange={handleInpts}
                             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none"
                             placeholder="Enter Title"
                           />
                         </div>
                       </div>
                       <div>
                         <label htmlFor="" className="sr-only">
                           Description
                         </label>
                         <div className="relative">
                           <input
                             type="text"
                             name="description"
                             value={newPost.description}
                             onChange={handleInpts}
                             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none"
                             placeholder="Enter Description"
                           />
                         </div>
                       </div>
                       <div>
                         <label htmlFor="Categorie" className="sr-only">
                           Categorie
                         </label>
                         <div className="relative">
                           <input
                             type="text"
                             name="tags"
                             value={newPost.tags}
                             onChange={handleInpts}
                             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none"
                             placeholder="Enter Categorie"
                           />
                         </div>
                       </div>
                       <div>
                         <label htmlFor="Categorie" className="sr-only">
                           Image Link
                         </label>
                         <div className="relative">
                           <input
                             type="text"
                             name="social_image"
                             value={newPost.social_image}
                             onChange={handleInpts}
                             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm focus:outline-none"
                             placeholder="Enter image link"
                           />
                         </div>
                       </div>
           
                       <div className="flex items-center justify-between">
                         <button
                           type="submit"
                           className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white w-full"
                         >
                           Create
                         </button>
                       </div>
                     </form>
                   </div>
              )}
          </>
      )
  }