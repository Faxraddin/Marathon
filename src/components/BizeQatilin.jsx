import React from "react";
// import { DefaultVersion } from "./DefaultVersion";
// import { Euro } from "../assets/Euro.svg";
// import { IconLampa } from "../assets/IconLampa.svg";
// import { IconStatistik } from "../assets/Icon Statistik.svg";
import qrafik from '../assets/Qrafik photo.png'
import iconcursor from "../assets/icon cursor.svg"
import { FaEuroSign, FaLightbulb, FaChartBar } from 'react-icons/fa';
import startupsahibi from '../assets/Startup sahibi photo.svg'
import Sahibkaruserphoto from '../assets/Sahibkar user photo.svg'
import User1photo from '../assets/User 1 photo.svg'
import User2photo from '../assets/User 2 photo.svg'
import Fireemoji from '../assets/Fire emoji.png'

const BizeQatilin = () => {
  return (
    <div className="relative w-[1441px] h-[495px] bg-[#06065a]">
      <div className="absolute w-[633px] h-[463px] top-[16px] left-[715px]">
        <div className="relative h-[463px]">
          <div className="absolute w-[629px] h-[463px] top-0 left-0">
            <img
              className="absolute w-[96px] h-[96px] top-[11px] left-[91px] object-cover"
              alt="User photo"
              src={User2photo}
            />
            <div className="absolute w-[303px] h-[174px] top-[238px] left-[48px] bg-white rounded-[20px] shadow-[0px_0px_60px_5px_#06065a80]" />
            <div className="absolute w-[108px] h-[108px] top-[271px] left-[74px] rounded-[54px] border border-solid border-[#d3d3d3]" />
            <div className="absolute w-[96px] h-[96px] top-[367px] left-[281px] bg-[#f89929] rounded-[48px]" />
            <div className="absolute w-[327px] h-[198px] top-[72px] left-[157px] bg-white rounded-[20px] shadow-[0px_0px_60px_5px_#06065a80]" />
            <img
              className="absolute w-[46px] h-[46px] top-[244px] left-[372px]"
              alt="Icon cursor"
              src={iconcursor}
            />
            <div className="absolute w-[116px] h-[116px] top-[114px] left-[181px] rounded-[58px] border border-solid border-[#d3d3d3]" />
            <div className="absolute top-[176px] left-[322px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#252525] text-[15px] tracking-[0] leading-[normal]">
              Lorem Ipsum
            </div>
            <div className="absolute top-[122px] left-[322px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#252525] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Ramil Orucov
            </div>
            <div className="absolute top-[282px] left-[199px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#252525] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Arzu Firəngiz
            </div>
            <div className="absolute top-[146px] left-[322px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#252525] text-[12px] tracking-[0] leading-[normal]">
              Startup sahibi
            </div>
            <div className="absolute top-[306px] left-[199px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#252525] text-[12px] tracking-[0] leading-[normal]">
              Sahibkar
            </div>
            <div className="absolute top-[196px] left-[322px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#252525] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              50000 AZN investisiya
            </div>
            <div className="absolute top-[346px] left-[199px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#252525] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              10+ startupa dəstək
            </div>
            <img
              className="absolute w-[190px] h-[142px] top-[221px] left-[439px] object-cover"
              alt="Qrafik photo"
              src={qrafik}
            />
            <img
              className="absolute w-[104px] h-[104px] top-[119px] left-[187px] object-cover"
              alt="Startup sahibi photo"
              src={startupsahibi}
            />
            <img
              className="absolute w-[96px] h-[96px] top-[277px] left-[80px] object-cover"
              alt="Sahibkar user photo"
              src={Sahibkaruserphoto}
            />
            <img
              className="absolute w-[55px] h-[55px] top-[375px] left-[12px] object-cover"
              alt="Fire emoji"
              src={Fireemoji}
            />
            <p className="absolute top-[245px] left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-transparent text-[24px] tracking-[0] leading-[normal]">
              <span className="text-white">star</span>
              <span className="text-[#252525]">tup</span>
            </p>
            <div className="absolute top-[394px] left-[293px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[16px] text-center tracking-[0] leading-[normal]">
              200+
              <br />
              istifadəçi
            </div>
            <img
              className="absolute w-[96px] h-[96px] top-0 left-[351px] object-cover"
              alt="User photo"
              src={User1photo}
            />
          </div>
          <div className="absolute w-[70px] h-[70px] top-[370px] left-[465px] bg-[#70da56] rounded-[35px]">
            <FaLightbulb className="!absolute !w-[28px] !h-[28px] !top-[21px] !left-[21px] " style={{ color: "white" }} />
          </div>
          <div className="absolute w-[70px] h-[70px] top-[150px] left-[48px] bg-[#ea6e6e] rounded-[35px]">
            <FaChartBar className="!absolute !w-[28px] !h-[28px] !top-[21px] !left-[21px]" color="white" />
          </div>
          <div className="absolute w-[70px] h-[70px] top-[130px] left-[504px] bg-[#f4d638] rounded-[35px]">
            <FaEuroSign className="!absolute !w-[28px] !h-[28px] !top-[22px] !left-[20px]" color="white" />
          </div>
          <div className="absolute top-[89px] left-[504px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
            investisiya
          </div>
        </div>
      </div>
      <div className="absolute w-[554px] h-[232px] top-[132px] left-[112px]">
        {/* <DefaultVersion className="!rounded-[5px] !absolute !left-0 !top-[182px]" /> */}
        <p className="absolute w-[554px] top-[55px] left-0 [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[26.2px]">
          Loremqqq ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor
          sit amet consectetur.
        </p>
        <button className='w-[196px] h-14 shrink-0 py-3 px-6 sm:w-[60%] my-4 mt-[160px] bg-[#FFC04C] text-white text-xl not-italic font-semibold leading-[normal]'>Daxil ol</button>
        <div className="absolute -top-px left-0 [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-[36px] tracking-[0] leading-[normal]">
          Bizə qatılın
        </div>
        
      </div>
    </div>
  );
};

export default BizeQatilin
