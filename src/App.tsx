import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import ADHDRoom from "./pages/AdhdRoom";
import Home from "./pages/Home"

function App() {
  return (
      <div className="main-container">
          <div className='nav-bar'>
              <nav className='nav-bar-in'>
                  <Link to='/'> Home | </Link>
                  <Link to='/adhd-room'> ADHD Room </Link>
              </nav>
          </div>
          <div className="content-area">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/adhd-room" element={<ADHDRoom/>}/>
              </Routes>
          </div>
      </div>
  )
}


export default App