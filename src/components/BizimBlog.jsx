import React from "react";
import photo1 from "../assets/Photo 1.png"
import photo2 from "../assets/Photo 2.png"
import photo3 from "../assets/Photo 3.png"
const BizimBlog = () => {
  return (
    <div className="relative w-[1296px] h-[499px] mt-40">
      <div className="absolute w-[1296px] h-[463px] top-[36px] left-20">
        <div className="w-[416px] h-[462px] left-0 absolute top-0">
          <p className="absolute w-[416px] top-[290px] left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
            Uğurlu bir statup qurmağın əsasları: İpucular və Strategiyalar
          </p>
          <div className="absolute top-[439px] left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            Elmir Lətifov
          </div>
          <div className="absolute top-[441px] left-[324px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            5 gün əvvəl
          </div>
          <p className="absolute w-[416px] top-[354px] left-0 opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor
            sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor
            in. Lorem ipsum dolor sit amet consectetur.
          </p>
          <img className="absolute w-[416px] h-[263px] top-0 left-0 object-cover" alt="Photo" src={photo1} />
        </div>
        <div className="w-[422px] h-[462px] left-[440px] absolute top-0">
          <p className="absolute w-[422px] top-[290px] left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
            Texnologiya və İnnovasiya: Startup dünyasında tendensiyalar
          </p>
          <div className="absolute top-[439px] left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            Leyla Rüstəmova
          </div>
          <div className="top-[441px] left-[316px] absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            2 həftə əvvəl
          </div>
          <p className="absolute w-[416px] top-[354px] left-0 opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor
            sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor
            in. Lorem ipsum dolor sit amet consectetur.
          </p>
          <img className="absolute w-[416px] h-[263px] top-0 left-0 object-cover" alt="Photo" src={photo2} />
        </div>
        <div className="w-[416px] h-[463px] left-[880px] absolute top-0">
          <p className="absolute w-[416px] top-[291px] left-0 [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
            Girişimçilik dünyasına addım atmaq: Başlanğıc rəhbəri
          </p>
          <div className="absolute top-[440px] left-0 [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            Gündüz Ağayev
          </div>
          <div className="top-[442px] left-[343px] absolute [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
            1 ay əvvəl
          </div>
          <p className="absolute w-[416px] top-[355px] left-0 opacity-80 [font-family:'Lora-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
            Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor in. Lorem ipsum dolor
            sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Phasellus sagittis laoreet vitae ac mi tempor
            in. Lorem ipsum dolor sit amet consectetur.
          </p>
          <img className="absolute w-[416px] h-[263px] top-0 left-0 object-cover" alt="Photo" src={photo3} />
        </div>
      </div>
      <div className="absolute -top-px left-[1203px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
        daha çox
      </div>
    </div>
    
  );
};

export default BizimBlog