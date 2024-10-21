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
      setIsRotating(!isRotating);
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
        style={{ cursor: 'pointer', width:'200px', height:'40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1 style={{ fontSize: '1rem',  marginTop: '2rem', marginBottom: '1em', fontFamily: 'monospace', color: 'lightgrey' }}>
          {isHovered ? 'hi' : 'Analog Future'}
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
    </div>
  );
};

export default KindRobot;
