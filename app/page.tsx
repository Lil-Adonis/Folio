"use client"

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homie from './components/HomePage/Homie'
import Hero from './components/Hero/Hero'
import Innovation from './components/HomePage/Innovation'
import NewHero from './components/Hero/NewHero'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <main className="flex flex-col items-center justify-center">
   
      
     <NewHero/>
      {/* <Hero/> */}
      {/* <Innovation/> */}
      
    
      


    </main>
  )
}
