This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import { motion } from "framer-motion";
import Skills from "./Skills"

const Page = () => {
return (
<>
<div className="flex items-end justify-center h-screen">
<motion.div
className="text-black text-center sm:text-4xl md:text-5xl lg:text-8xl 2xl:text-9xl uppercase mt-0"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }} >
Frontend Addicted <br /> Fullstack Capable
</motion.div>

    </div>
    <Skills/>
    </>

);
};

export default Page;
bg-lime-400
bg-rose-400

import Link from 'next/link';

const Nav = () => {
return (
<div className="flex flex-col items-end 2xl:mt-0 lg:mt-[0]  md:mt-0 sm:mt-7 mt-6 mr-4 text-7xl font-bold">
<Link href="/work">
<div className="cursor-pointer mr-16">
<span className="text-lg font-semibold uppercase">01</span>Works
</div>
</Link>
<Link href="/about">
<div className="cursor-pointer mr-8 mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0">
<span className="text-lg font-semibold uppercase">03</span>Profile
</div>
</Link>
<Link href="/contact">
<div className="cursor-pointer mt-4 sm:mt-5 md:mt-0 lg:mt-0 2xl:mt-0 mr-16">
<span className="text-lg font-semibold uppercase">02</span>Contact
</div>
</Link>
</div>
);
};

export default Nav;

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import './Footer.css'

const Footer = () => {
return (
<div className="announce">
<Marquee speed={60} gradient={false} pauseOnHover>
<div className="announce-text text1">
<span>spend 110 or more for free us shipping</span>
<span>spend 110 or more for free us shipping</span>
</div>

    <div className="announce-text text2">
    <span> Dont spend more 110 or more for free us shipping</span>
    <span>whatever you do spend 110 or more for free us shipping</span>
    </div>
    </Marquee>

   </div>
  );
};

export default Footer;

import React from 'react'
import './Work.css'

const page = () => {
return (
<div>
<main class="container">

        <header class="header">
            <h1 class="header__paragraph">Our services</h1>
            <a href="#" class="header__link">Let's work together</a>
        </header>


        <div class="content__wrapper">


            <div class="left__container">
                <div class="top__wrapper">
                    <div class="stack__wrapper">
                        <p class="stack__wrapper--word">
                            <span class="letter">f</span>
                            <span class="letter">r</span>
                            <span class="letter">o</span>
                            <span class="letter">n</span>
                            <span class="letter">t</span>
                        </p>
                        <p class="stack__wrapper--word btmStack__wrapper--word">
                            <span class="back__letter">b</span>
                            <span class="back__letter">a</span>
                            <span class="back__letter">c</span>
                            <span class="back__letter">k</span>
                        </p>
                    </div>
                    <p class="stack__wrapper--paragraph">end</p>
                </div>

                <div class="bottom__wrapper">
                    <p class="first__list">
                        <span class="first__list--letter">0</span>
                        <span class="first__list--letter">1</span>
                    </p>
                    <p class="second__list">
                        <span class="second__list--letter">0</span>
                        <span class="second__list--letter">2</span>
                    </p>
                </div>
            </div>

            <div class="right__container">
                <h2 class="right__container--heading">(Front End Services)</h2>

                <div class="accordion">
                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Creative development
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Animation
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Landing pages
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Performance optimization
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Performance optimization
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Animation
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>
                </div>

                <h2 class="right__container--heading  trigger__animation">(Back End Services)</h2>

                <div class="accordion">
                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Backend structures
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Content management systems
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    User authentication
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Remote updating
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Cloud storage
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Hosting
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Hosting
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>

                    <div class="accordion__panel">
                        <h3 class="accordion__heading">
                            <button class="accordion__button" aria-controls="first__panel" aria-expanded="true">
                                <span class="accordion__span">
                                    Hosting
                                </span>
                                <span class="indicator"></span>
                            </button>
                        </h3>

                        <div class="accordion__content" id="first__panel" aria-labelledby="accordion__heading" aria-hidden="false" role="region">
                            <p class="accordion__content--text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum corporis necessitatibus, ipsa nam modi illum numquam,
                                vitae laborum sed recusandae impedit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
    </div>

)
}

export default page

<div class="mt-[72px] md:mt-[88px] px-[16px] md:px-[56px]">
        <div class="md:flex items-stretch">
            <div class="w-full md:w-[50%] md:h-fit">
                <div class="w-fit h-fit"><img src="/img/AAkid.png" class="md:w-[674px] md:h-[653px]" alt="" /></div>
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
                    <div class="w-fit h-fit"><img src="/img/TredFinance.png" class="w-[237px] h-[146px]" alt="" />
                    </div>
                </div>
            </div>
            <!----->
            <div class="md:hidden mx-auto relative mt-[-110px] w-fit h-fit">
                <img src="/img/Artifact.png" class="w-[195px] h-[195px]" alt="" />
            </div>
            <div v-show="mono" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/Mono.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" />
                </div>
            </div>
            <div v-show="alts" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/Alts.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" />
                </div>
            </div>
            <div v-show="nfts" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/NFT.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" /></div>
            </div>
            <div v-show="norebase" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/Norebase.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" />
                </div>
            </div>
            <div v-show="easy" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/Easybuddy.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" />
                </div>
            </div>
            <div v-show="tred" class="md:hidden relative top-[-140px] left-[-17px] mx-auto justify-end">
                <div class="w-fit mx-auto h-fit"><img src="/img/TredFinance.png" class="w-[118.8px] mx-auto h-[73.19px]"
                        alt="" />
                </div>
            </div>
            <!---->
            <div
                class="w-full mt-[16px] md:mt-[0px] bg-[#ECEBE9] md:h-fit md:border-[1px] md:border-[#C2BEB8] px-[16px] py-[24px] md:w-[50%]">
                <div @mouseenter="showmono()" @mouseleave="showmono()"
                    class="font-[700] font-['panchang'] cursor-pointer text-[24px] tx_stroke text-right text-[transparent] flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>Mono Clone</div>
                </div>
                <div class="border-[1px] border-[#C1BEB8] w-full"></div>
                <div @mouseenter="showalts()" @mouseleave="showalts()"
                    class="font-[700] cursor-pointer mt-[48px] font-['panchang'] text-[24px] tx_stroke text-[transparent] text-right flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>Alt~School Clone</div>
                </div>
                <div class="border-[1px] border-[#C1BEB8] w-full"></div>
                <div @mouseenter="shownfts()" @mouseleave="shownfts()"
                    class="font-[700] cursor-pointer mt-[48px] font-['panchang'] text-[24px] tx_stroke text-[transparent] text-right flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>NFTsHOT</div>
                </div>
                <div class="border-[1px] border-[#C1BEB8] w-full"></div>
                <div @mouseenter="shownorebase()" @mouseleave="shownorebase()"
                    class="font-[700] cursor-pointer mt-[48px] font-['panchang'] text-[24px] tx_stroke text-[transparent] text-right flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>NoreBase Clone</div>
                </div>
                <div class="border-[1px] border-[#C1BEB8] w-full"></div>
                <div @mouseenter="showeasy()" @mouseleave="showeasy()"
                    class="font-[700] cursor-pointer mt-[48px] font-['panchang'] text-[24px] tx_stroke text-[transparent] text-right flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>EasyBuddy Waitlist</div>
                </div>
                <div class="border-[1px] border-[#C1BEB8] w-full"></div>
                <div @mouseenter="showtred()" @mouseleave="showtred()"
                    class="font-[700] cursor-pointer mt-[48px] font-['panchang'] text-[24px] tx_stroke text-[transparent] text-right flex justify-end md:text-[30px] lg:text-[40px] hover:text-[#221115]">
                    <div>Tred Finance</div>
                </div>
            </div>
            <!--choose part-->
        </div>
    </div>
