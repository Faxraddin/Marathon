    import React from 'react'
    import iconf from '../assets/icon ferdi.svg'
    import icons from '../assets/icon sahibkar.svg'

    const Kateqoriya = () => {
    return (
        <div className=' md:px14 max-w-screen-2xl mx-auto'>
            <div className='flex lg:flex-row justify-between items-start gap-10'>
                
                <div
                 className='w-full'>
                    <div  className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-9 md:gap-12 gap-8'>
                    <div className='relative w-[436px] bg-[#06065A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
    <div className="flex items-center justify-center flex-col text-center">
        <h5 className='text-4xl text-white font-semibold mt-5'>Saihbkar</h5>
        <p className='px-5 text-white mt-5 font-thin'>
        Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor sit amet consectetur.
        </p>
        <img src={icons} alt='s' />
        
    </div>
    
    <div className="absolute bottom-0 right-0 h-[50px] w-[50px] bg-[#06065A] clip-path-[circle(50%)]"></div>
    </div><div className='relative w-[436px] bg-[#06065A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
    <div className="flex items-center justify-center flex-col text-center">
        <h5 className='text-4xl text-white font-semibold mt-5'>Startup sahibi</h5>
        <p className='px-5 text-white mt-5 font-thin'>
        Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor sit amet consectetur.
        </p>
        <img src={iconf} alt='s' />
        
    </div>
    
    <div className="absolute bottom-0 right-0 h-[50px] w-[50px] bg-[#06065A] clip-path-[circle(50%)]"></div>
    </div><div className='relative w-[436px] bg-[#06065A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
    <div className="flex items-center justify-center flex-col text-center">
        <h5 className='text-4xl text-white font-semibold mt-5'>Fərdi</h5>
        <p className='px-5 text-white mt-5 text-[16px] font-thin'>
        Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor sit amet consectetur.
        </p>
        <img src={iconf} alt='s' />
        
    </div>
    
    <div className="absolute bottom-0 right-0 h-[50px] w-[50px] bg-[#06065A] clip-path-[circle(50%)]"></div>
    </div>


                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Kateqoriya