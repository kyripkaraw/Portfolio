import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";

import ADHDRoom from "./pages/AdhdRoom";
import Home from "./pages/Home"

function App() {
  return (
      <>
          <NavigationBar/>
      <div className="main-container">
          <div className="content-area">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/adhd-room" element={<ADHDRoom/>}/>
              </Routes>
          </div>
      </div>
   </>
  )
}


export default App