import React, { useState } from 'react';
import ModelViewer from '../src/app/Components/ModelViewer';
import ChatComponent from '../src/app/Components/Chat'; // Import the ChatComponent
import Box from '@mui/material/Box'; // Add this import statement
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router'; // Import useRouter

const KindRobot = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // Initialize the router

    const handleTitleClick = () => {
      router.push('/'); // Navigate to the index page
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div
        onClick={handleTitleClick} // Add onClick event
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'default', width:'200px', height:'40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1 style={{ fontSize: '1rem',  marginTop: '1.6rem', marginBottom: '1em', fontFamily: 'monospace', color: 'grey' }}>
          {isHovered ? 'hi' : 'Kind Robot'}
        </h1>
      </div>
      <Box sx={{ width: '100%', mb: 4 }}>
        <ModelViewer
          modelUrl="/kind_robot.3dm"
          isRotating={isRotating}
          initialZoom={3}
          initialPosition={{ x: 0, y: 0, z: 50 }} // Default position
          verticalOffset={50} // Bring the model down by 26 units
        />
      </Box>
      <Stack sx={{ width: '100%' }} justifyContent="center" alignItems="center">
        <ChatComponent /> {/* Render the ChatComponent below the ModelViewer */}
      </Stack>
      {/* <a href="https://coolbuildings.xyz" target='_blank'
      style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'grey', fontFamily: 'monospace' }}>
        check out cool buildlings
    </a> */}
      <a href="/"style={{ position: 'absolute', fontFamily: 'monospace', bottom: '2rem', left: '2rem', fontSize: '.8rem', color: 'grey' }}> back </a>
    </div>
  );
};

export default KindRobot;
