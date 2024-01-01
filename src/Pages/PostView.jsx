import React from 'react'
import Post from '../Components/Post/Post'
import Blogs from '../Components/Home/Blogs/Blogs'
import Consult from '../Components/Home/Consult/Consult'
import Footer from '../Components/Footer/Footer'
const PostView = () => {
  return (
    <div className='post-view'>
      <Post />
      <Consult />
      <br />
      <Blogs/>
      <Footer />
    </div>
  )
}

export default PostView