import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/home"
import About from "./assets/pages/about"
import Contact from "./assets/pages/contact"
import Login from "./assets/pages/login"
import Shop from "./assets/pages/shop"
import CartPage from "./assets/pages/cartPage"
 
import Signup from "./assets/pages/signUp"

 
  
 
function App() {
  
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Shop" element={<Shop />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/Signup" element={<Signup/>}/>
  </Routes>
}

export default App
