
import Login from "./components/auth/login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import Home from "./pagses/home/Home";
function App() {
 

  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />  
      </Routes>
    </Router>
 </>
  )
}

export default App
