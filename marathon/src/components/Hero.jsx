import React from 'react';
import {
    PlayIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/Banner photo.png'


const Hero = () => {
  return (
    <div name='home' className='w-full h-[87vh] bg-[#06065A] text-[#fff] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1260px] m-auto '>
            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                 <h1 className='py-3 text-white text-5xl not-italic font-bold leading-[70px] whitespace-nowrap'>Gələcəyi bu gün kəşf et,<br></br>Crowdfunding ilə şərait yarat
                    </h1>
                <p className='w-[708px] text-white text-base not-italic font-normal leading-[25px] mb-[70px]'>Novation sahibkarlarla startupı olan şəxsləri birləşdirən bir crowdfunding platformasıdır. Sahibkar kimi qeydiyyatdan keçərək istədiyiniz startupa investisiya edə bilər və yaxud öz startupınızı saytda yerləşdirərək fond tapa bilərsiniz.</p>
                <div className='flex items-center'>
                        <button className='w-[196px] h-14 shrink-0 py-3 px-6 sm:w-[60%] my-4 mt-4 bg-[#FFC04C] text-white text-xl not-italic font-semibold leading-[normal]'>Daxil ol</button>
                        <div className='flex items-center text-xl ml-4 whitespace-nowrap cursor-pointer'>
                            <PlayIcon className='w-[55px] h-[55px] text-white' />
                            <span className='text-white ml-2'>Videonu izlə</span>
                        </div>
                </div>
                <div className="flex w-[331px] max-w-full items-start gap-2.5 mt-1">
                    <img
                      loading="lazy"
                    //   
                      className="aspect-[2.53] object-cover object-center w-[91px] overflow-hidden shrink-0" alt=''
                    />
                    <div className="text-white text-sm self-center whitespace-nowrap">
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