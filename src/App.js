
import BlogForm from './component/BlogForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './component/Categories';
import Rendom from './component/Rendom';
import Navbar from './component/NavBar';
import PopularPosts from './component/PopularPosts';
import SocialPlugin from './component/Social';
import Tags from './component/Tags';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './component/HomePage';
import Details from './component/Details';
import PostDetails from './component/PostDetails';
import FilteredPostDetails from './component/FiltredPostDetails';
import Login from './component/login';
import Rejister from './component/Rejistre';
import UserProfile from './component/UserProfil';
import CreatePost from './CreatPost';

function App() {
  const [BlogPosts, setBlogPosts] = useState(null);
  const [newArray, setNewArray] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [Tag, setTag] = useState(null);
  const [search, setSearch] = useState(null);
  const [logedUser, setLogedUser] = useState(false);
  const [object, setObject] = useState(null)
  const [isReact, setIsReact] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const [inpts, setInpts] = useState({
    name: '',
    email: '',
    pwd: '',
  })
  const [newPost, setNewPost] = useState({
    id: Date.now(),
    title: '',
    description: '',
    tags: '',
    tag_list: [""],
    social_image: "",
    published_at: Date().toString(),
    comments_count: 0,
    public_reactions_count: 0,
    created_by_U: '',
    User: {}
  })
  const [User, setUser] = useState({
    name: '',
    username: '',
    twitter_username: '',
    github_username: '',
    website_url: '',
    profile_image: ''
  })

  const getData = async () => {
    const posts = await axios.get('https://dev.to/api/articles/');
    setNewArray(posts.data)
  }

  // const postReact = (index) => {
  //   const newPost = [...BlogPosts];
  //   const postIndex = newPost.findIndex(post => post.id === index);

  //   if (postIndex !== -1) {
  //     if (!isReact) {
  //       newPost[postIndex].public_reactions_count += 1;
  //     } else {
  //       newPost[postIndex].public_reactions_count -= 1;
  //     }
  //     setBlogPosts([...newPost]);
  //     localStorage.setItem('obj', JSON.stringify(newPost));
  //     console.log(newPost[postIndex]);
  //   } else {
  //     console.log("Post not found");
  //   }
  //   setIsReact(!isReact)
  // }

  const edit = (post, index) => {
    setSelectedId(index)
    setNewPost(post)
  }
  const destroy = (index) => {
    const newPost = [...BlogPosts]
    const id = BlogPosts.findIndex(post => post.id === index)
    newPost.splice(id, 1)
    const obj = JSON.stringify(newPost);
    localStorage.setItem('obj', obj);
    setBlogPosts(newPost)
    setSelectedId(null)
  }

  useEffect(() => {
    getData();
    const isloged = localStorage.getItem('isloged')
    let inpt = JSON.parse(localStorage.getItem('inpt'))
    setInpts(inpt)
    setLogedUser(isloged)
    if (inpt) {
      setUserId(inpt.userId)
    }
  }, [userId])

  useEffect(() => {
    if (!BlogPosts)
      return;
    const obj = JSON.stringify(BlogPosts);
    localStorage.setItem('obj', obj);
  }, [isAdded])

  useEffect(() => {
    let obj = localStorage.getItem('obj')
    obj = JSON.parse(obj)
    if (obj) {
      setBlogPosts(obj)
    } else {
      setBlogPosts(newArray)
    }
  }, [newArray])


  return (
    <BrowserRouter>
      <div className="space-y-5 bg-slate-200">
        <Navbar setSearch={setSearch} search={search} posts={BlogPosts} logedUser={logedUser} setLogedUser={setLogedUser} setIsReact={setIsReact} Tag={Tag} />
        <Routes>
          <Route path='/Details' element={
          <Details posts={BlogPosts} Tag={Tag} setTag={setTag} />
          }/>
          <Route path='/PostDetails/:id' element={
          <PostDetails />
          }/>
          <Route path='/filtredPosts' element={
          <FilteredPostDetails posts={BlogPosts} search={search} setTag={setTag} setSearch={setSearch} />
          }/>
          <Route path='/UserProfile' element={
            <UserProfile posts={BlogPosts} inpts={inpts} logedUser={logedUser} edit={edit} destroy={destroy} userId={userId} />
          } />
          <Route path='/CreatePost' element={<CreatePost logedUser={logedUser} posts={BlogPosts} setPosts={setBlogPosts} newPost={newPost} setNewPost={setNewPost} selectedId={selectedId} setSelectedId={setSelectedId} userId={userId} setIsAdded={setIsAdded} isAdded={isAdded} />} />
          {!logedUser && (
            <>
              <Route path='/Rejister' element={<Rejister setLogedUser={setLogedUser}/>} />
              <Route path='/Login' element={<Login inpts={inpts} setInpts={setInpts} setUserId={setUserId} setLogedUser={setLogedUser} />} />
            </>
          )}
        </Routes>

        <div className="grid grid-cols-4 gap-4 px-5 pb-6">
          <Routes>
            <Route path='/BlogForm' element={
              <>
                <div className="flex flex-col gap-5 h-screen">
                  <Categories posts={BlogPosts} setTag={setTag} />
                  <Rendom posts={BlogPosts} setPosts={setBlogPosts} />
                </div>

                <BlogForm posts={BlogPosts} Tag={Tag} search={search} setTag={setTag} />

                <div className="flex flex-col gap-5 h-screen">
                  <SocialPlugin />
                  <PopularPosts posts={BlogPosts} />
                  <Tags />
                </div>
              </>
            } />

            <Route path='/' element={
              <>
                <div className="flex flex-col gap-5 h-screen">
                  <Categories posts={BlogPosts} setTag={setTag} />
                  <Rendom posts={BlogPosts} setPosts={setBlogPosts} />
                </div>

                <HomePage posts={BlogPosts} Tag={Tag} setTag={setTag} setSearch={setSearch} search={search} />
                
                <div className="flex flex-col gap-5 h-screen">
                  <SocialPlugin />
                  <PopularPosts posts={BlogPosts} />
                  <Tags />
                </div>
              </>
            } />
          </Routes>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
