import React from "react"
import Landing from "./pages/Landing"
import SignUp from "./pages/SignUp" 
import Profile from "./pages/Profile"
import Uploading from "./pages/Uploading"
import Viewing from "./pages/Viewing"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/upload" element={<Uploading />}/>
        <Route path="/viewing" element={<Viewing/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App
