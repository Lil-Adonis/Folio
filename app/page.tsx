"use client"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homie from './components/HomePage/Homie'
import Hero from './components/Hero/Hero'
import Innovation from './components/HomePage/Innovation'
import NewHero from './components/Hero/NewHero'
import { useEffect } from 'react'
import Nav from './components/Hero/Nav'
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { dynamicAnimation, menuAnimation } from "./animation";

export default function Home() {
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      dynamicAnimation();
      menuAnimation();
    
    });

    return () => {
      context.revert();
  }

  }, [])
  return (
    <main className="flex flex-col items-center justify-center">
   
      
     <NewHero/>
     <Nav/>
      {/* <Hero/> */}
      {/* <Innovation/> */}

      <div className="w-full h-full fixed top-0 left-0 bg-secondary-color overlay z-[50] overflow-hidden">
        <div className="absolute top-[63%] left-[50%] tranlate-y-[-50%] translate-x-[-50%] text-shadow-2">
          <p className="text-white text-lg text-center">click to access portfolio</p>
          <div className="w-[230px] h-[100px] absolute top-0 left-[-2%] bg-secondary-color mask"></div>
        </div>
      </div>
      
    
      


    </main>
  )
}
