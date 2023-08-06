import React from 'react'
import Logo from '../assets/hom.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=' flex justify-between bg-regal-blue px-5 py-3 ' >
    <div className=' flex items-baseline gap-1'>
      <img src={Logo}  className=' px-0 py-0 my-0'/>
      
    </div>
    <nav className=' flex justify-between gap-10 mx-5 text-white items-center focus:ring font-semibold font-cerebri text-xl'>
      <Link className=' focus:underline decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in '  to={"/"}>Home</Link>
      <Link className=' focus:underline decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in ' to={"/about"}>About</Link>
      <Link className=' focus:underline decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in ' to={"/properties"}>Properties</Link>
      <Link className=' focus:underline decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in ' to={"/blog"}>Blogs</Link>
      <Link className=' focus:underline decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in ' to={"/contact"}>Contact Us</Link>
        </nav>
    </div>
  )
}

export default Header