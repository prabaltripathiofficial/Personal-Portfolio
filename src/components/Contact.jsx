import React from 'react'
import {CONTACT} from '../constants'
import {motion} from 'framer-motion'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
        initial={{y:-50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.5}}
        className='my-10 text-center text-4xl'>Get In Touch</motion.h1>
   <div className='text-center tracking-tighter'>
    <motion.p
     initial ={{x:100, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{duration:0.5, delay:0}}
    className='my-4'>{CONTACT.address}</motion.p>
    <motion.p
    initial ={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{duration:0.5, delay:0}}
    className='my-4'>{CONTACT.phoneNo}</motion.p>
    <a href="mailto:prabaltripathiofficial@gmail.com" className='border-b'>{CONTACT.email}</a>
   </div>
    </div>
  )
}

export default Contact