'use client'


import React, { useState, useEffect } from 'react';
import './Work.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page = () => {
  // State for active accordion items
  const [activeFrontendIndex, setActiveFrontendIndex] = useState(null);
  const [activeBackendIndex, setActiveBackendIndex] = useState(null);


  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Set the height of the wrappers to the height of each word
    gsap.set('.stack__wrapper', {
      height: () => document.querySelector('.stack__wrapper--word').offsetHeight + 'px',
    });
    gsap.set('.bottom__wrapper', {
      height: () => document.querySelector('.first__list').offsetHeight + 'px',
    });

    // Get all letters in the stack and list item
    const frontendLetter = gsap.utils.toArray('.letter');
    const backendLetter = gsap.utils.toArray('.back__letter');
    const firstLetter = gsap.utils.toArray('.first__list--letter');
    const secondLetter = gsap.utils.toArray('.second__list--letter');

    // Timeline containing all transform tweens
    let transformTl = gsap.timeline({
      defaults: { stagger: 0.1, ease: 'expo.inOut', duration: 1.3 },
    });

    // Add transform tweens
    transformTl
      .to(frontendLetter, { yPercent: () => -130 }, 0)
      .to(backendLetter, { yPercent: () => -120 }, 0)
      .to(firstLetter, { y: () => -document.querySelector('.first__list').offsetHeight + 'px' }, 0)
      .to(secondLetter, { y: () => -document.querySelector('.first__list').offsetHeight - 3 + 'px' }, 0);

    // Scroll trigger animation to play the timeline
    ScrollTrigger.create({
      trigger: '.trigger__animation',
      start: 'top 20%',
      animation: transformTl,
      onLeaveBack: () => transformTl.reverse(),
    });
  }, []); // Run this effect only once on component mount



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const updateMobileAnimations = () => {
      const isMobile = window.innerWidth <= 768;
  
      if (isMobile) {
        const frontendLetter = gsap.utils.toArray('.letter');
        const backendLetter = gsap.utils.toArray('.back__letter');
        const firstLetter = gsap.utils.toArray('.first__list--letter');
        const secondLetter = gsap.utils.toArray('.second__list--letter');
  
        // Clear existing mobile-specific animations
        ScrollTrigger.getAll().forEach(st => st.kill());
        gsap.killTweensOf([frontendLetter, backendLetter, firstLetter, secondLetter]);
  
        // Mobile animations
        const frontToBackTl = gsap.timeline({
          scrollTrigger: {
            trigger: '.trigger__animation', // Mobile trigger
            start: 'top 60%',               // Start animation when top of element is 60% from top of viewport
            end: '+=100',                   // End after scrolling 100px
            toggleActions: 'play none none reverse',
          }
        });
  
        // Adjust yPercent values to create more space between the front and back
        frontToBackTl
          .to(frontendLetter, {
            yPercent: -190,  // Move more than the original value to fully hide the frontend letter
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.05
          })
          .to(backendLetter, {
            yPercent: -150,  // Match the same yPercent to ensure it aligns properly with frontendLetter
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.05
          }, 0)
          .to(firstLetter, {
            yPercent: -150,  // Apply the same spacing for firstLetter
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.05
          }, 0)
          .to(secondLetter, {
            yPercent: -150,  // Ensure secondLetter moves with enough spacing too
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.05
          }, 0);
      }
    };
  
    // Initial setup for mobile
    updateMobileAnimations();
  
    // Update on resize
    window.addEventListener('resize', updateMobileAnimations);
  
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateMobileAnimations);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
  
  

  // Toggle active Frontend accordion item
  const toggleFrontendAccordion = (index) => {
    if (activeFrontendIndex === index) {
      setActiveFrontendIndex(null);
    } else {
      setActiveFrontendIndex(index);
    }
  };

  // Toggle active Backend accordion item
  const toggleBackendAccordion = (index) => {
    if (activeBackendIndex === index) {
      setActiveBackendIndex(null);
    } else {
      setActiveBackendIndex(index);
    }
  };

  const frontendAccordionItems = [
    {
      title: 'Creative development (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Animation (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Animation (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Animation (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Animation (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Landing pages (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: '(Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: ' pages (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Landing (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    {
      title: 'Landing pages (Frontend)',
      content: 'Frontend content: Lorem ipsum...',
    },
    
    // Add more Frontend items as needed
  ];

  const backendAccordionItems = [
    {
      title: 'Backend structures (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    {
      title: 'Content management systems (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    {
      title: 'User authentication (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    {
      title: 'Node authentication (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    {
      title: 'User authentication (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    {
      title: 'authentication (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
     {
      title: 'systems (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
     {
      title: 'Content systems (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
     {
      title: 'management systems (Backend)',
      content: 'Backend content: Lorem ipsum...',
    },
    // Add more Backend items as needed
  ];

  return (
    <div>
      <main className="container">
        <header className="header">
          <h1 className="header__paragraph">Our services</h1>
          <a href="#" className="header__link">
            Let's work together
          </a>
        </header>

        <div className="content__wrapper">
          <div className="left__container">
            <div className="top__wrapper">
              <div className="stack__wrapper">
                <p className="stack__wrapper--word">
                  <span className="letter">f</span>
                  <span className="letter">r</span>
                  <span className="letter">o</span>
                  <span className="letter">n</span>
                  <span className="letter">t</span>
                </p>
                <p className="stack__wrapper--word btmStack__wrapper--word">
                  <span className="back__letter">b</span>
                  <span className="back__letter">a</span>
                  <span className="back__letter">c</span>
                  <span className="back__letter">k</span>
                </p>
              </div>
              <p className="stack__wrapper--paragraph">end</p>
            </div>

            <div className="bottom__wrapper">
              <p className="first__list">
                <span className="first__list--letter">0</span>
                <span className="first__list--letter">1</span>
              </p>
              <p className="second__list">
                <span className="second__list--letter">0</span>
                <span className="second__list--letter">2</span>
              </p>
            </div>
          </div>

          <div className="right__container">
            <h2 className="right__container--heading">(Front End Services)</h2>

            <div className="accordion">
              {frontendAccordionItems.map((item, index) => (
                <div className="accordion__panel" key={index}>
                  <h3 className="accordion__heading">
                    <button
                      className={`accordion__button ${activeFrontendIndex === index ? 'active' : ''}`}
                      aria-controls={`frontend-panel-${index}`}
                      aria-expanded={activeFrontendIndex === index}
                      onClick={() => toggleFrontendAccordion(index)}
                    >
                      <span className="accordion__span">{item.title}</span>
                      <span className="indicator"></span>
                    </button>
                  </h3>

                  <div
                    className={`accordion__content ${activeFrontendIndex === index ? 'active' : ''}`}
                    id={`frontend-panel-${index}`}
                    aria-labelledby={`accordion__heading-${index}`}
                    aria-hidden={activeFrontendIndex !== index}
                    role="region"
                  >
                    <p className="accordion__content--text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="right__container--heading trigger__animation">(Back End Services)</h2>

            <div className="accordion">
              {backendAccordionItems.map((item, index) => (
                <div className="accordion__panel" key={index}>
                  <h3 className="accordion__heading">
                    <button
                      className={`accordion__button ${activeBackendIndex === index ? 'active' : ''}`}
                      aria-controls={`backend-panel-${index}`}
                      aria-expanded={activeBackendIndex === index}
                      onClick={() => toggleBackendAccordion(index)}
                    >
                      <span className="accordion__span">{item.title}</span>
                      <span className="indicator"></span>
                    </button>
                  </h3>

                  <div
                    className={`accordion__content ${activeBackendIndex === index ? 'active' : ''}`}
                    id={`backend-panel-${index}`}
                    aria-labelledby={`accordion__heading-${index}`}
                    aria-hidden={activeBackendIndex !== index}
                    role="region"
                  >
                    <p className="accordion__content--text">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;

