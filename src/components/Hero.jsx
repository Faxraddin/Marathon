import React from 'react';
import Typing from 'react-typing-effect';

import {
    PlayIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/Banner photo.png'


const Hero = () => {
  return (
    <div name='hero' className='w-full h-[87vh] bg-[#06065A] text-[#fff] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1260px] m-auto '>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                 <h1 className='py-3 text-white text-5xl not-italic font-bold leading-[70px] whitespace-nowrap'>Gələcəyi bu gün kəşf et,<br></br>Crowdfunding ilə {' '}
                 <Typing speed={100} startDelay={50} eraseSpeed={100} text={['dəstəklə', 'həyata keçir', 'şərait yarat']} />
                    </h1>
                <p className='w-[708px] text-white text-base not-italic font-normal leading-[25px] mb-[70px]'>Novation sahibkarlarla startupı olan şəxsləri birləşdirən bir crowdfunding platformasıdır. Sahibkar kimi qeydiyyatdan keçərək istədiyiniz startupa investisiya edə bilər və yaxud öz startupınızı saytda yerləşdirərək fond tapa bilərsiniz.</p>
                <div className='flex items-center'>
                        <button className='w-[196px] h-14 shrink-0 py-3 px-6 sm:w-[60%] my-4 mt-4 bg-[#FFC04C] text-white text-xl not-italic font-semibold leading-[normal]'>Daxil ol</button>
                        <div className='flex items-center text-xl ml-4 whitespace-nowrap cursor-pointer'>
                            <PlayIcon className='w-[55px] h-[55px] text-white' />
                            <span className='text-white ml-2'>Videonu izlə</span>
                        </div>
                </div>
                <div className="flex items-center -space-x-2">
                  <img
    alt="user 1"
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
    className="relative inline-block h-7 w-7 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 2"
    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
    className="relative inline-block h-7 w-7 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 3"
    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
    className="relative inline-block h-7 w-7 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  
  <div className="text-white text-sm self-center pl-4 whitespace-nowrap">
                      200+ istifadəçi artıq bizə qoşulub
                    </div>
</div>



            </div>
            <div className='flex'>
                <img className='w-[754px] h-[550px] top-[107px] left-[820px] mt-[-140px]' src={bgImg} alt="/" />
            </div>
            
        </div>
        <div className="flex justify-center text-white text-base self-center ml-0">
          Daha çoxu ilə maraqlanırsan? O zaman kliklə.
        </div>
    </div>
  )
}

export default Hero