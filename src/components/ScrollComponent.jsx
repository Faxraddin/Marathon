import React, { useEffect, useState } from 'react';
import photo4 from '../assets/Photo 4.png';
import photo5 from '../assets/Photo 5.png';
import './ScrollComponent.css'; // Import the CSS file for custom animations

const ScrollComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-component');
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const isVisible = !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="scroll-component"
      className={`${
        isVisible ? 'visible' : 'hidden'
      } transition-all duration-500 flex p-8`}
    >
      {/* Left Side */}
      <div className="flex-1 text-center animation-from-top">
        <h2 className="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur. Ornare duis quis sollicitudin fusce eu viverra proin tristique. Aliquet vitae molestie massa neque magna facilisis facilisis etiam. </h2>
        <img src={photo4} alt="Left Side Image" className="w-[486px] h-[555px] shrink-0 rounded-[0px 0px 0px 80px] mb-4 ml-20" />
      </div>

      {/* Right Side */}
      <div className="flex-1 text-center animation-from-right">
        <img src={photo5} alt="Right Side Image" className="w-[636px] h-96 shrink-0 rounded-[0px 80px 0px 0px] mb-4" />
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur. Ornare duis quis sollicitudin fusce eu viverra proin tristique. Aliquet vitae molestie massa neque magna facilisis facilisis etiam. Pellentesque fames auctor ipsum auctor id gravida amet felis. Sodales in interdum enim nisl id consectetur sed. Ut fames in fames aliquet faucibus quis tellus enim odio.</p>
      </div>
    </div>
  );
};

export default ScrollComponent;