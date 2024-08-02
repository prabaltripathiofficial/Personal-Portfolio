import React from 'react'
import logo from '../assets/Logo.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
         <a href="https://www.linkedin.com/in/prabaltripathiofficial/"><FaLinkedin /></a>
            <a href="https://github.com/prabaltripathiofficial"><FaGithub /></a>
            <a href="https://x.com/_chaibiskut"><FaXTwitter /></a>
            <a href="https://www.instagram.com/prabaltripathi__/"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
