import React from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'
import BlogPosts from '../Home/Blogs/BlogPosts'
import { useTranslation } from "react-i18next";

const PostsC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="posts-c">
      <div className="dark-navbar">
        <Navbar />
      </div>
      {/* <div className="triangle">
        <div class="arrow-right"></div>
      </div> */}
      <div className="posts-c-details">
        <div className="blogs">
          <div className="blogs-title" style={{ flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row' }}>
            <h1>{t("blogPosts")}</h1>
            <hr />
          </div>
          <BlogPosts />
        </div>
      </div>
    </div>
  )
}

export default PostsC