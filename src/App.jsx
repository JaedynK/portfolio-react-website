import { useState } from 'react'
import './App.css'
import HomePage from './components/Home'
import ProjectPage from './components/Projects'
import AboutPage from './components/About'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const video = {
    src: 'path/to/video.mp4',
    width: '100%',
    height: '100%',
    loop: true,
    autoplay: true,
    muted: true,
    controls: false,
    playsinline: true,
  };

  return (
    <div>
      <HomePage />
      <ProjectPage />
      <AboutPage />
      {/* <div className="card">
      </div> */}
    </div>
  )
}

export default App
