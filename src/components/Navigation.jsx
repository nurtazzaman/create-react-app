import React from 'react';
import { NavLink } from 'react-router-dom';
// import {Link } from 'react-router-dom':
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';




function Navigation() {

      const login = false;  
 
  
  return (
    <div className="row-2">
      <div className="flex flex-row justify-between items-center bg-gray-100 h-8">
        <div className="flex flex-row gap-1 text-xs px-6">
          <p>+8801*********</p>
          {/* <FontAwesomeIcon icon={faEnvelope} size='2x' className="text-gray-500" /> */}
          <p>abcdschool@gmail.com</p>
        </div>
        <div className="flex flex-row gap-1 text-xs px-4 ">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-blue-500" />
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-500" />
          <FontAwesomeIcon icon={faTwitter} size='2x' className='text-blue-400' />
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-blue-600' />
        </div>
      </div>
      <div className="flex flex-row justify-between px-5 bg-gray-300 shadow-2xl drop-shadow-2xl h-10 items-center">
        <div className=""><p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent ...">
        Abcd School 
        </p></div>

        <div className="">
          <ul className='flex content-center flex-col sm:flex-row   w-1/4 text-center ' >
            <NavLink to="/home" className="mx-2 hover:bg-gray-400 px-4 p-2 rounded-sm rounded-b-none text-sm font-RobotoSlab">home</NavLink>
            <NavLink to="/curriculum" className="mx-2 hover:bg-gray-400 px-4 p-2 rounded-sm rounded-b-none text-sm font-RobotoSlab" >curriculum</NavLink>
            <NavLink to="/achievements" className="mx-2 hover:bg-gray-400 px-4 p-2 rounded-sm rounded-b-none text-sm font-RobotoSlab" >achievements</NavLink>
            <NavLink to="/projects" className="mx-2 hover:bg-gray-400 px-4 p-2 rounded-sm text-sm rounded-b-none font-RobotoSlab" >projects</NavLink>
            <NavLink to="/about" className="mx-2 hover:bg-gray-400 px-4 p-2 rounded-sm text-sm rounded-b-none font-RobotoSlab" >about</NavLink>
          </ul>
        </div>

        <div className="mx-5">
          
           {(login)?  <button className='bg-linear-30 from-blue-600 to-yellow-400 p-1 text-sm px-8 font-bold text-white rounded-2xl'>Login</button>  : <div className="flex justify-center items-center flex-row">
            <div className="h-7 w-7 bg-indigo-600 rounded-full"></div>
            <div className="px-2"><p>profile</p></div>

           </div> }

           
        </div>

      </div>
    </div>

  )
}

export default Navigation