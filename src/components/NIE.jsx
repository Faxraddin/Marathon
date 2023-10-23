import React from "react";
import map from '../assets/gray-world-map-isolated-on-white-background-world-map-flat-earth-template-for-web-site-pattern-anual-report-inphographics-vector.png'
import arrow1 from '../assets/Arrow 1.svg'
import qyd from '../assets/Qeydiyyat icon.svg'
import startup from '../assets/Startup icon.svg'
import fond from '../assets/Fond icon.svg'
const NIE = () => {
  return (
    <div className="w-[1297px] h-[752px] ml-[100px] relative">
      <div className="relative h-[753px] -top-px">
        <div className="absolute mt-[80px] left-[458px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[normal]">
          Necə istifadə etməli?
        </div>
        <div
          className="absolute top-[-63px] left-[1px] w-[1300px] h-[730px] bg-cover"
          style={{
            backgroundImage: `url(${map})`,
          }}
        />
        <div className="absolute w-[1297px] h-[255px] top-[240px] left-0">
          <div className="absolute w-[782px] h-[255px] top-0 left-0">
            <img className="left-[273px] absolute w-[217px] h-[35px] top-[55px]" alt="Arrow" src={arrow1} />
            <div className="inline-flex flex-col items-center gap-[36px] absolute top-0 left-[484px]">
            <div className="relative w-[118px] h-[118px] bg-[#ffb60e] rounded-[59px]">
              <img src={startup} alt="Your SVG" className="w-1/2 h-1/2 mt-7 ml-7" />
            </div>
              <div className="inline-flex flex-col items-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Startupını yerləşdir
                </div>
                <p className="relative w-[298px] opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal]">
                  Saytımızda startupınızı yerləşdirirsiniz və sahibkarların diqqətini çəkməyə çalışırsınız
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[36px] absolute top-0 left-0">
              <div className="relative w-[118px] h-[118px] bg-[#ffb60e] rounded-[59px]">
                <img src={qyd} alt="Your SVG" className="w-1/2 h-1/2 mt-7 ml-7" />
              </div>
              <div className="inline-flex flex-col items-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Qeydiyyatdan keç
                </div>
                <p className="relative w-[290px] opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal]">
                  Novationda sahibkar kimi və yaxud startup sahibi kimi qeydiyyatdan keçirsiniz
                </p>
              </div>
            </div>
          </div>
          <div className="absolute w-[510px] h-[255px] top-0 left-[787px]">
            <img className="left-0 absolute w-[217px] h-[35px] top-[55px]" alt="Arrow" src={arrow1} />
            <div className="inline-flex flex-col items-center gap-[36px] absolute top-0 left-[210px]">
              <div className="relative w-[118px] h-[118px] bg-[#ffb60e] rounded-[59px]">
              <img src={fond} alt="Your SVG" className="w-1/2 h-1/2 mt-7 ml-7" />
            </div>
              <div className="inline-flex flex-col items-center gap-[12px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[28.8px] whitespace-nowrap">
                  Fond əldə et
                </div>
                <p className="relative w-[300px] opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] text-center tracking-[0] leading-[normal]">
                  Startup sahibi kimi sahibkarlarla əlaqə yaradıb öz startupınız üçün müxtəlif fondlar tapa bilərsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIE