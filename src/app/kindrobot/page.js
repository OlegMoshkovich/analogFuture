'use client';
import React, { useState } from 'react';
import ModelViewer from '../Components/ModelViewer';
import ChatComponent from '../Components/Chat'; // Import the ChatComponent
import Box from '@mui/material/Box'; // Add this import statement
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';

const KindRobot = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // Initialize the router
    const isMobile = useMediaQuery('(max-width:600px)'); // Define mobile breakpoint

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        style={{
          width: '100dvw',
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'white'
        }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: 'default',
            width: '200px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1
            style={{
              fontSize: '1rem',
              fontFamily: 'monospace',
              color: 'grey',
              marginBottom: '2em',
              marginTop: '2em',
            }}
          >
            {isHovered ? 'hi' : 'kind robot'}
          </h1>
        </div>
        <Box sx={{ width: '100%' }}>
          <ModelViewer
            modelUrl="/kind_robot.3dm"
            isRotating={isRotating}
            initialZoom={4}
            initialPosition={{ x: 0, y: 0, z: 50 }} // Default position
            verticalOffset={50} // Bring the model down by 26 units
            height={isMobile ? '200px' : '300px'} // Adjust height based on device
          />
        </Box>
        <Stack sx={{ width: '100%' }} justifyContent="center" alignItems="center">
          <ChatComponent /> {/* Render the ChatComponent below the ModelViewer */}
        </Stack>
          {/* <a href="https://www.pinterest.com/olegmoshkovich/analog-future/" target='_blank' style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'grey' }}>Thoughts about analog future .. </a> */}
          <a href="https://x.com/olegmoshkovich" target='_blank' style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '0.8rem', color: 'grey' }}>@OlegMoshkovich</a>
      </div>
    );
};

export default KindRobot;
