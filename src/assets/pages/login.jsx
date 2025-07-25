import Header from "../../header/header"


function Login () {
    return <div className="w-full justify-center items-center h-screen">
         <Header />

         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm justify-center items-center ml-[38%] mt-[10%]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700" for="username">Username</label>
                <input type="text" name="" id="" className="mt-1 p-2 w-full border border-gray-300 rounded"  required/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" for="password">Password</label>
                <input className="mt-1 p-2 w-full border border-gray-300 rounded" type="password" id="password" required/>
            </div>
            <div className="flex items-center mb-4">
                <input type="checkbox" id="remember" className="mr-2"/>
                <label for="remember" className="text-gray-700">Remember Me</label>
            </div>
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
        </form>
        <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="mt-2 text-center">
            <p className="text-gray-600">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a></p>
        </div>


    </div>



    

<footer className="bg-gray-100 text-gray-700 px-8 py-10 mt-[10%]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

    
    <div>
      <h1 className="text-xl font-bold text-gray-900 mb-2">Goru.</h1>
      <p className="text-gray-600 mb-4">
        Sed ut perspiciatis unde omnis iste natus er sit voluptatem accusantium doloremque.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-600 hover:text-blue-600"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
 
    <div>
      <h2 className="font-semibold text-gray-800 mb-2">Useful Links</h2>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Return Policy</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
      </ul>
    </div>
 
    <div>
      <h2 className="font-semibold text-gray-800 mb-2">Account</h2>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">My Account</a></li>
        <li><a href="#" className="hover:underline">Log in</a></li>
        <li><a href="#" className="hover:underline">Sign Up</a></li>
        <li><a href="#" className="hover:underline">Purchases</a></li>
        <li><a href="#" className="hover:underline">Shipping Address</a></li>
      </ul>
    </div>
 
    <div>
      <h2 className="font-semibold text-gray-800 mb-2">Contact & Address</h2>
      <p>123 Street, Gandy Street, Syracuse<br />New York - 13221</p>
      <p className="mt-2">Phone: +1 315-234-3812</p>
      <p>Email: info@goru.com</p>
    </div>
 
    <div>
      <h2 className="font-semibold text-gray-800 mb-2">Subscribe</h2>
      <input type="email" name="" id=""  placeholder="admin@email.com" className="w-full px-3 py-2 border border-gray-300 rounded mb-2 focus:outline-none" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Subscribe</button>
    </div>

  </div>


  <div className="text-center text-xs text-gray-500 mt-10">
    <p>© Copyright WpSmasher 2020 | All Rights Reserved</p>
  </div>
</footer>


    </div>
}

export default Login