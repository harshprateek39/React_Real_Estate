import React from 'react'
import Logo from '../assets/home.gif'
import {FaFacebook} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {BiSolidMessageAltDots} from 'react-icons/bi';
import {FaPhone} from 'react-icons/fa';
import {MdLocationPin} from 'react-icons/md';


const Footer = () => {
  return (
    <div className=' flex bg-regal-blue h-96 py-12  mt-auto items-center justify-evenly'>
        <div className=' flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center'>
        <img src={Logo}  className=' w-12 h-9 px-0 py-0 my-0'/>
      <h2 className=' text-white  text-lg font-cerebri font-black '> Gharperfect<span className=' font-medium text-xs'>.com</span></h2></div>
      
        <div className='flex gap-3'> 
        <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'> <FaFacebook/></div>
        <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'> <FaLinkedin/></div>
        <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'><FaTwitter/></div>
        <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'><FaInstagram/></div>
        </div>
        </div>
        <nav className=' flex flex-col justify-between gap-2 mx-5 text-white items-center focus:ring'>
      <Link className=""  to={"/"}>Home</Link>
      <Link className="" to={"/about"}>About</Link>
      <Link className="" to={"/properties"}>Properties</Link>
      <Link className="" to={"/contact"}>Contact Us</Link>
      <Link className="" to={"/blog"}>Blogs and NewsLetters</Link>
        </nav>
        <div className=' flex flex-col gap-3 py-5'>
            <div className='flex gap-3 items-center justify-start'> <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'> <FaPhone/> </div> <p className='text-white'>+91 83992 22123</p></div>
            <div className='flex gap-3 items-center justify-start'> <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'> <BiSolidMessageAltDots/></div><p className='text-white'>invest@gharperfect.com</p></div>
            <div className='flex gap-3 items-center justify-start'> <div className=' rounded-full bg-regal-sky w-8 h-8 flex justify-center items-center text-white'> <MdLocationPin/></div> <p className='text-white'>Dehradun, Utrakhand</p></div>
            <button className=' bg-regal-sky w-24 p-1 text-white self-center rounded-xl'> Contact Us</button>
        </div>
    </div>
  )
}

export default Footer 