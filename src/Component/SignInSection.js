import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";


function SignInSection() {
  return (
    <section className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 min-w-min bg-white p-8 m-auto shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Sign In</h2>
      <p className="text-sm font-bold mt-0">Stay updated on your professional world</p>
      <input 
        type="text" 
        placeholder="Email or Phone" 
        className="p-4 text-xs w-full mt-6 mb-4 border border-gray-400 rounded transition duration-300 hover:border-blue-900 focus:outline-none focus:text-sm cursor-text" 
      />
    
      <div className="password flex items-center mb-4 border border-gray-400 rounded hover:border-blue-900">
        <input 
          type="password" 
          id="password" 
          placeholder="Password" 
          className="p-4 w-full border-none focus:outline-none" 
        />
        <Link to="#" className="text-xs text-blue-600 font-bold py-2 px-3">Show</Link>
      </div>
    
      <Link to="#" id="pwd-change" className="block text-xs text-blue-600 font-bold mb-4">Forgot Password?</Link>
    
      <button 
        type="submit" 
        onClick={() => window.location.href = 'https://www.linkedin.com'}
        className="p-3 w-full bg-blue-600 text-white text-xs rounded-full shadow-md transition duration-300 mb-4 hover:text-sm hover:shadow-none">
        Sign in
      </button>
    
      <div className="flex items-center text-gray-500 font-light py-4">
        <span className="flex-grow h-px bg-gray-500"></span>
        <span className="mx-2 text-gray-500">or</span>
        <span className="flex-grow h-px bg-gray-500"></span>
      </div>
    
      <div className="text-center text-gray-500 text-xs font-light mb-4">
        <p>
          By clicking continue, you agree to LinkedIn's <Link to="#" className="text-blue-600">User Agreement</Link>, <Link to="#" className="text-blue-600">Privacy Policy</Link> and <Link to="#" className="text-blue-600">Cookie Policy</Link>.
        </p>
      </div>
    
      <button 
        type="button" 
        onClick={() => window.location.href = 'https://www.linkedin.com'}
        className="p-3 w-full bg-transparent border border-black text-normal flex justify-center items-center rounded-full shadow-md transition duration-300 mb-4 hover:bg-gray-100">
        <FcGoogle  className='mr-2'/> Continue with Google
      </button>
      <button 
        type="button" 
        onClick={() => window.location.href = 'https://www.linkedin.com'}
        className="p-2 w-full bg-transparent border border-black text-normal flex justify-center items-center rounded-full shadow-md transition duration-300 mb-4 hover:bg-gray-100 font-semibold">
        <GrApple className='mr-3'/>Sign in with Apple
      </button>
    </section>
  );
}

export default SignInSection;

