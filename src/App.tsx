import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";

import AdhdRoomPage from "./pages/AdhdRoomPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/OopsPage.tsx";

function App() {
  return (
      <>
          <NavigationBar/>
      <div className="main-container">
          <div className="content-area">
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/adhd-room" element={<AdhdRoomPage/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
              </Routes>
          </div>
      </div>
   </>
  )
}


export default App