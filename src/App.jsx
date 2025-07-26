import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Shop from "./pages/shop"
import CartPage from "./pages/cartPage"
import LoginData from "./Components/LoginData"
 
import Signup from "./pages/signUp"
import Header from "./Components/header"
import Footer from "./Components/footer"

 
  
 
function App() {
  
  return <div>
  <Header/>
    <Routes>
   
    <Route path="/" element={<Home />}/>
    <Route path="/Shop" element={<Shop />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Contact" element={<Contact />}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/LoginData" element={<LoginData/>}/>
  
  </Routes>
 <Footer/>
</div>

}

export default App
