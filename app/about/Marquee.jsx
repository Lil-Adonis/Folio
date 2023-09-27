import React from 'react';
import './marquee.css';

const Marquee = () => {
  return (
    <section>
      <div className="marquee">
        <div className="marquee__group">
          <span>hello there ➺</span>
          <span>hello there ➺</span>
          <span>hello there ➺</span>
        </div>
        <div className="marquee__group" aria-hidden="true">
          <span>hello there ➺</span>
          <span>hello there ➺</span>
          <span>hello there ➺</span>
        </div>
        
        <div className="marquee__three marquee--hover-pause">
          <div className="marquee__group__three">
            <img  src="/images/coolkid.png" alt="" />
            <img src="/images/coolkid.png" alt="" />
            <img  src="/images/coolkid.png" alt="" />
          </div>
          <div aria-hidden="true" className="marquee__group__three">
            <div className="marquee__group__three">
              <img  src="/images/coolkid.png" alt="" />
              <img  src="/images/coolkid.png" alt="" />
              <img  src="/images/coolkid.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
