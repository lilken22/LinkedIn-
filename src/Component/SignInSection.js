import React from 'react';
import { Link } from 'react-router-dom';

function SignInSection() {
  return (
    <section className="w-1/4 min-w-min bg-white p-5 m-auto shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-1">Sign In</h2>
      <p className="text-sm font-bold mt-0">Stay updated on your professional world</p>
      <input type="text" placeholder="Email or Phone" className="p-4 text-xs w-full mt-4 mb-2 border border-gray-400 rounded transition duration-300 hover:border-blue-900 focus:outline-none focus:text-sm cursor-text" />

      <div className="password flex items-center mb-2 border border-gray-400 rounded hover:border-blue-900">
        <input type="password" id="password" placeholder="Password" className="p-2 w-full border-none focus:outline-none" />
        <Link to="#" className="text-xs text-blue-600 font-bold py-2 px-3">Show</Link>
      </div>

      <Link to="#" id="pwd-change" className="block text-xs text-blue-600 font-bold mb-3">Forgot Password?</Link>

      <button type="submit" className="p-2 w-full bg-blue-600 text-white text-xs rounded-full shadow-md transition duration-300 mb-2 hover:text-sm hover:shadow-none">Sign in</button>

      <div className="flex items-center text-gray-500 font-light py-4">
         <span className="flex-grow h-px bg-gray-500"></span>
         <span className="mx-2 text-gray-500">or</span>
          <span className="flex-grow h-px bg-gray-500"></span>
      </div>


      <div className="text-center text-gray-500 text-xs font-light mb-3">
        <p>By clicking continue, you agree to LinkedIn's <Link to="#" className="text-blue-600">User Agreement</Link>, <Link to="#" className="text-blue-600">Privacy Policy</Link> and <Link to="#" className="text-blue-600">Cookie Policy</Link>.</p>
      </div>

      <button type="button" className="p-2 w-full bg-transparent border border-black text-xs rounded-full shadow-md transition duration-300 mb-2 hover:bg-gray-100">Continue with Google</button>
      <button type="button" className="p-2 w-full bg-transparent border border-black text-xs rounded-full shadow-md transition duration-300 mb-2 hover:bg-gray-100">
        <i className="fa-brands fa-apple mr-2"></i>Sign in with Apple
      </button>
    </section>
  );
}

export default SignInSection;
