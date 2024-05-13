import React, { useState } from 'react';

const YourComponent = () => {
  const [mono, setMono] = useState(false);
  const [alts, setAlts] = useState(false);
  const [nfts, setNfts] = useState(false);
  const [norebase, setNorebase] = useState(false);
  const [easy, setEasy] = useState(false);
  const [tred, setTred] = useState(false);

  const toggleMono = () => setMono(!mono);
  const toggleAlts = () => setAlts(!alts);
  const toggleNfts = () => setNfts(!nfts);
  const toggleNorebase = () => setNorebase(!norebase);
  const toggleEasy = () => setEasy(!easy);
  const toggleTred = () => setTred(!tred);

  return (
    <div className="mt-[72px] md:mt-[88px] px-[16px] md:px-[56px]">
      <div className="md:flex items-stretch">
        <div className="w-full md:w-[50%] md:h-fit">
          <div className="w-fit h-fit"><img src="/images/coolkid.png" className="md:w-[674px] md:h-[653px]" alt="" /></div>
          <div class="w-full hidden md:flex relative mt-[-150px] left-[10px]  justify-end">
                    <div class="w-fit h-fit">
                        <img src="/img/Artifact.png" class="w-[389px] h-[389px]" alt="" />
                    </div>
                </div>
                <div v-show="mono" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/Mono.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
                <div v-show="alts" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/Alts.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
                <div v-show="nfts" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/NFT.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
                <div v-show="norebase" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/Norebase.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
                <div v-show="easy" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/Easybuddy.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
                <div v-show="tred" class="hidden md:flex relative top-[-270px] left-[-90px] justify-end">
                    <div class="w-fit h-fit"><img src="/img/TredFinance.png" class="w-[237px] h-[146px]" alt="" /></div>
                </div>
            </div>
            <div className="w-full mt-[16px] md:mt-[0px] bg-[#ECEBE9] md:h-fit md:border-[1px] md:border-[#C2BEB8] px-[16px] py-[24px] md:w-[50%]">
          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>

          <div class="border-[1px] border-[#C1BEB8] w-full"></div>

          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>

          <div class="border-[1px] border-[#C1BEB8] w-full"></div>

          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>

          <div class="border-[1px] border-[#C1BEB8] w-full"></div>

          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>

          <div class="border-[1px] border-[#C1BEB8] w-full"></div>

          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>

          <div class="border-[1px] border-[#C1BEB8] w-full"></div>

          <div onMouseEnter={toggleMono} onMouseLeave={toggleMono} className="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
            <div>Mono Clone</div>
          </div>
          
          
          {/* ... Other text elements */}
        </div>
        </div>
        {/* ... The rest of your HTML */}
       
      </div>
   
  );
};

export default YourComponent;
