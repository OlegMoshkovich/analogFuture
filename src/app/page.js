'use client';
import React, { useState } from 'react';
import Home from './Components/Home';

export default function Page() {
  const [isRotating, setIsRotating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTitleClick = () => {
    setIsRotating(!isRotating);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div
        // onClick={handleTitleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width:'200px', height:'40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1 style={{ fontSize: '1rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1em' }}>
          {isHovered ? 'play' : 'analog future'}
        </h1>
      </div>
      <Home isRotating={isRotating} />
      {/* <a href="https://www.pinterest.com/olegmoshkovich/analog-future/" target='_blank' style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'grey' }}>Maybe it feels like this ..?</a>
      <a href="https://x.com/analogfuture00" target='_blank' style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '0.8rem', color: 'grey' }}>@AnalogFuture</a> */}
      <style jsx>{`
        @media (max-width: 600px) {
          h1 {
            margin-top: 1em;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </div>
  );
}
