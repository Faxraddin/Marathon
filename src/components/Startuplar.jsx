import React from 'react'
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';


const Startuplar = () => {
  return (
    
    <div className="w-[1441px] mx-auto p-4 mt-[100px]">
        <h1 className=" flex text-4xl font-bold mb-4 justify-center">Startuplar</h1>
      <div className="flex justify-between">
        <img src={image1} alt="Image 1" className="w-1/6 h-800" />
        <img src={image2} alt="Image 2" className="w-1/6 h-800" />
        <img src={image3} alt="Image 3" className="w-1/6 h-800" />
        <img src={image4} alt="Image 4" className="w-1/6 h-800" />
        <img src={image5} alt="Image 5" className="w-1/6 h-800" />
        <img src={image6} alt="Image 6" className="w-1/6 h-800" />
      </div>
    </div>
  )
}

export default Startuplar