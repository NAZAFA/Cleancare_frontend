import React from 'react'
import logo from "../../assets/imags/logo.png"
import send from "../../assets/imags/send.png"
import {BiLogoFacebook ,BiLogoTwitter ,BiLogoInstagram} from 'react-icons/bi'
function Footer() {
  return (
  <div className='bg-gray'>
      <div className='grid md:grid-cols-3 sm:grid-cols-1  py-16 container'>
          <div className='flex justify-center   items-start'><img src={logo} className=" -mt-16 w-[15rem] h-[13rem] " alt="logo"  /></div>
        <div className='flex justify-start p-4  lg:p-0'>
        <div className='text-xl font-normal text-left me-16'>
            <p className='text-2xl font-semibold mb-4 '>About Us</p>
            <p className='mb-3'><a href="#">About</a></p>
            <p className='mb-3'><a href="#">Services</a></p>
            <p><a href="#">How We Work</a></p>
          </div>
          <div className='text-xl font-normal text-left'>
            <p className='text-2xl font-semibold mb-4'>Pages</p>
            <p className='mb-3'><a href="#">For Home</a></p>
            <p className='mb-3'><a href="#">Category</a></p>
            <p><a href="#">Contact</a></p>
          </div>
        </div>
          <div className='px-4 py-8 lg:p-0'>
            <p className='text-2xl font-semibold mb-4 text-left'>Newsletter</p>
             <div className='bg-white p-2 flex justify-between align-center '>
              <input type="text" placeholder='Email address' className='w-full outline-none'/>
               <img src={send} alt="sendIMage" className='w-10 h-10 block' />
             </div>
             <div className='flex pt-5 '>
              <div className='me-4 rounded-full bg-Primary text-white w-11 h-11 flex justify-center items-center font-bold  text-3xl'><a href="#"><BiLogoFacebook/></a></div>
              <div className='me-4 rounded-full bg-white text-Primary w-11 h-11 flex justify-center items-center font-semibold text-2xl'><a href="#"><BiLogoTwitter/></a></div>
              <div className='rounded-full bg-white text-Primary w-11 h-11 flex justify-center items-center font-semibold  text-2xl'><a href="#"><BiLogoInstagram/></a></div>
             </div>
          </div>
       </div>
  <div className='bg-[#201C26]  '>
  <div className='flex lg:justify-between  justify-center items-center flex-wrap  text-[#FFFFFFAB]  container mx-auto py-10'>
     <div className='text-base font-normal text-left flex flex-wrap mb-4  lg-mb-0'>
           <p className='me-8'><a href="#">For Home</a></p>
            <p className='me-8'><a href="#">Category</a></p>
            <p><a href="#">Contact</a></p>
          </div>
      <p >copyright All Reservied @ Cleancare 2022-2023</p>
     </div>
  </div>
  </div>
  )
}

export default Footer