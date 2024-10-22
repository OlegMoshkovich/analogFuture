'use client';
import React, { useState } from 'react';
import ModelViewer from '../Components/ModelViewer';
import ChatComponent from '../Components/Chat'; // Import the ChatComponent
import Box from '@mui/material/Box'; // Add this import statement
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation';

const KindRobot = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // Initialize the router

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
            {isHovered ? 'hi' : 'Kind Robot'}
          </h1>
        </div>
        <Box sx={{ width: '100%' }}>
          <ModelViewer
            modelUrl="/kind_robot.3dm"
            isRotating={isRotating}
            initialZoom={3}
            initialPosition={{ x: 0, y: 0, z: 50 }} // Default position
            verticalOffset={50} // Bring the model down by 26 units
            height="300px" // Set the height to 300px
          />
        </Box>
        <Stack sx={{ width: '100%' }} justifyContent="center" alignItems="center">
          <ChatComponent /> {/* Render the ChatComponent below the ModelViewer */}
        </Stack>
        <a
          href="/"
          style={{
            position: 'absolute',
            fontFamily: 'monospace',
            bottom: '1rem',
            left: '2rem',
            fontSize: '.8rem',
            color: 'grey'
          }}
        >
          back
        </a>
      </div>
    );
};

export default KindRobot;
