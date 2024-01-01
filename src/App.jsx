import React, { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home'
import Contactus from './Pages/Contactus'
import Aboutus from './Pages/Aboutus'
import Posts from './Pages/Posts'
import Products from './Pages/Products'
import Projects from './Pages/Projects'
import PostView from './Pages/PostView'
import ProjectView from './Pages/ProjectView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmoothScroll from './SmoothScroll'
import ProductView from './Pages/ProductView';
import Consult from './Pages/Consult';
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, [])
  function handleContextMenu(event) {
    event.preventDefault();
  }
  function handleCopy(event) {
    event.preventDefault();
  }


  useEffect(() => {
    const lang = i18n.language;
    const contentEl = document.getElementById('App');

    if (lang === 'ar') {
      contentEl.style.textAlign = 'right';
      contentEl.style.fontFamily = 'Tajawal, sans-serif';
    } else {
      contentEl.style.textAlign = 'left';
    }
  }, [i18n.language]);

  return (
    <div id='App' className="App" /*onContextMenu={handleContextMenu} onCopy={handleCopy}*/>
      <Router>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/post/:postId" element={<PostView />} />
            <Route path="/project/:projectId" element={<ProjectView />} />
            <Route path="/product/:productId" element={<ProductView />} />

          </Routes>
        </SmoothScroll>
      </Router>
    </div>
  )
}

export default App
