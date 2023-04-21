import { useState } from 'react'
import './App.css'
import HomePage from './components/Home'
import ProjectPage from './components/Projects'
import AboutPage from './components/About'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
      <AboutPage />
      <ProjectPage />
      {/* <div className="card">
      </div> */}
    </div>
  )
}

export default App
