import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';


const Navbar = () => {
  return (
    <div className=' w-[1441px] h-[90px] flex justify-between items-center  px-4 bg-[#06065A] text-[#fff]'>
        <div className='ml-20 text-4xl font-semibold leading-59 tracking-normal text-left '>
            Novation
        </div>
            <ul className='hidden md:flex m-40 gap-5 text-[20]'>
                <li
                className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer">
                Kateqoriyalar
                </li>
                <li
                 className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer">
                Startuplar
                </li>
                <li
                className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer">
                Tərəfdaşlar
        
                </li>
                <li
                 className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer">
                Bizə qatıl
                
                </li>
                <li
                className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer">
                Əlaqə
                
                </li>
                <li
                className="hover:text-[#959ad4] transition-colors duration-300 cursor-pointer flex items-center">
                Az <AiOutlineDown className="ml-1" />
                
                </li>
            </ul>
            {/* <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#06065A] text-[#fff] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                Kateqoriya
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                Startuplar
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                Tərəfdaşlar
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} offset={50} duration={500}>
                Bizə qatıl
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                Əlaqə
                </Link>
                </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                Az <AiOutlineDown className="ml-1" />
                </Link>
                </li>
            </ul> */}
          </div>
  );
};

export default Navbar;
