import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div class="mt-[93px] md:mt-[88px] px-[16px] md:px-[56px]">
    <div class="lg:flex overflow-hidden w-full">
        <div class="w-fit">
            <div class="flex items-top md:items-top">
                <div class="w-fit h-fit">
                    <img src="/images/coolkid.png"class="w-[68px] h-[109px] md:w-[105px] md:h-[190px]" alt="" />
                </div>
                <div>
                    <div
                        class="font-['Panchang'] leading-[97.68px] md:leading-[192px] font-[700] text-[#221115] text-[74px] md:text-[140px] lg:text-[186px]">
                        FULL~
                    </div>
                    <div
                        class="font-['Panchang'] leading-[85.01px] md:hidden md:leading-[192px] font-[700] text-[#221115] text-[64.4px] md:text-[30px] lg:text-[186px]">
                        STACK
                    </div>
                </div>
            </div>
            <div
                class="font-['Panchang'] hidden md:block md:leading-[192px] font-[700] text-[#221115] text-[64.4px] md:text-[140px] lg:text-[186px]">
                STACK
            </div>
        </div>
        <div class="h-fit">
            <img src="/images/codingkid.png" class="md:h-[324px] h-[233px]" alt="" />
        </div>
    </div>
 
    <div class="lg:flex md:mt-[10px] mt-[1px] overflow-hidden w-full">
        <div class="w-fit h-fit">
            <div class="flex items-top md:items-top">
                <div class="w-fit h-fit">
                    <img src="/images/lovekid.png"class="w-[102px] h-[108px] md:w-[200px] md:h-[313px] lg:w-[539px] lg:h-[313px]" alt="" />
                </div>
                <div class="h-full w-[40%]">
                    <div
                        class="font-['Panchang'] leading-[97.68px] md:leading-[192px] font-[700] text-[#221115] text-[74px] md:text-[140px] lg:text-[186px]">
                        CREA
                    </div>
                    <div
                        class="font-['Panchang'] leading-[85.01px] md:leading-[192px] font-[700] text-[#221115] text-[64.4px] md:text-[140px] lg:text-[186px]">
                        TIVE~
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div
        class="p-[8px] bg-[#221115] font-['panchang'] text-center w-full font-[700] text-[#fff] text-[27px] md:text-[60px] lg:text-[90px]">
        DEVELOPER</div>
</div>
  );
};

export default page;


