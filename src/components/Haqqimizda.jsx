import React from 'react'
import photo5 from '../assets/Photo 5.png'
import photo4 from '../assets/Photo 4.png'

const Haqqimizda = () => {
  return (
    <div className="mx-10">
      <div className="flex items-center mb-4"> {/* Decreased margin here */}
        <div className="w-[636px] h-[384px] px-9">
          <h2 className="text-2xl font-bold mb-2">Haqqımızda</h2> {/* Decreased margin here */}
          <p>
            Lorem ipsum dolor sit amet consectetur. Ornare duis quis sollicitudin fusce eu viverra proin tristique. Aliquet vitae molestie massa neque magna facilisis facilisis etiam. Pellentesque fames auctor ipsum auctor id gravida amet felis. Sodales in interdum enim nisl id consectetur sed. Ut fames in fames aliquet faucibus quis tellus enim odio.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src={photo5}
            alt="Description of the image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="flex items-center mt-[-220px] ml-10"> {/* Decreased margin here */}
        <div className="w-[486px] h-[555px]">
          <img
            src={photo4}
            alt="Description of the image"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 ml-[110px]">
          
          <p>
          Lorem ipsum dolor sit amet consectetur. Ornare duis quis sollicitudin fusce eu viverra proin tristique. Aliquet vitae molestie massa neque magna facilisis facilisis etiam. Pellentesque fames auctor ipsum auctor id gravida amet felis. Sodales in interdum enim nisl id consectetur sed. Ut fames in fames aliquet faucibus quis tellus enim odio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Haqqimizda
