import React from 'react'

import {
    FaFacebook,
   
    FaInstagram,
    FaTwitter,

} from 'react-icons/fa'

const Footer = () => {
    return (
      <div className='w-full mt-[50px] bg-[#2b2b2d] text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between border-b-2 border-gray-600 py-8'>
          <div className='mb-4 md:mb-0'>
            <h6 className='text-white text-5xl not-italic font-semibold leading-[normal]'>Novation</h6>
            <div className='flex items-center cursor-pointer'>
              <FaFacebook className='mr-2 h-[52px] w-6' />
              <FaInstagram className='mr-2 h-[22px] w-6' />
              <FaTwitter className='h-[22px] w-6'/>
            </div>
          </div>
          <div className='flex flex-row w-[344px]'>
            <div className='w-1/2 flex flex-col items-start gap-3'>
              <h6 className='font-bold uppercase pt-2 '>Kateqoriyalar</h6>
              <ul>
                <li className='py-1'>Sahibkar</li>
                <li className='py-1'>Startup sahibi</li>
                <li className='py-1'>Fərdi</li>
              </ul>
            </div>
            <div className='w-1/2 flex flex-col items-start gap-3'>
              <h6 className='font-bold uppercase pt-2 whitespace-nowrap '>Haqqımızda</h6>
              <ul>
                <li className='py-1'>İstifadəçi şərtləri</li>
                <li className='py-1'>Bizə qoşul</li>
                <li className='py-1'>Əlaqə</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex max-w-[1240px] px-2 py-4 mx-auto justify-center text-center text-gray-500'>
          <p className='py-4 '>2023 Novation Crowdfunding. All rights reserved.</p>
          
        </div>
      </div>
    )
  }
  
  export default Footer;
  