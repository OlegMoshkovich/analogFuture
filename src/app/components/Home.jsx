import React, { useEffect, useState, useCallback } from 'react';
import ModelViewer from './ModelViewer';
import { Chip, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';

export default function Home({ isRotating }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:768px)'); // MUI hook for responsive design

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChipClick = useCallback(() => {
    window.open('https://workspace.berlin', '_blank');
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div
        style={{ width:'200px', height:'40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}
      >
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="23" width="84" height="54" fill="black" stroke="white" stroke-width="6"/>
          <circle cx="70" cy="46" r="7.5" stroke="white" stroke-width="7"/>
          <circle cx="30" cy="46" r="7.5" stroke="white" stroke-width="7"/>
          <rect x="30.5" y="64.5" width="39" height="11" fill="white" stroke="white"/>
        </svg>
        </div>
      <div style={{ width: '100%', height: '100%', mb: 4 }}>
        <ModelViewer
          modelUrl="/analog_future.3dm"
          isRotating={isRotating}
          initialZoom={.8}
          height={isMobile ? '450px' : '550px'} // Use MUI's useMediaQuery for responsive height
        />
      </div>
      <Stack spacing={1} sx={{ marginTop: '-300px' }}>
        <Chip
          label="Cadence"
          clickable
          onClick={() => window.open('https://cadence.day', '_blank')}
          sx={{
            backgroundColor: '#212121',
            color: 'white',
            '&:hover': {
              backgroundColor: '#141414',
              color: 'white',
            },
          }}
        />
        <Chip
          label="Workspace"
          clickable
          onClick={handleChipClick}
          sx={{
            backgroundColor: '#212121',
            color: 'white',
            '&:hover': {
              backgroundColor: '#141414',
              color: 'white',
            },
          }}
        />
        <Chip
          label="Cool Buildings"
          clickable
          onClick={() => window.open('https://coolbuildings.xyz', '_blank')}
          sx={{
            backgroundColor: '#212121',
            color: 'white ',
            '&:hover': {
              backgroundColor: '#141414',
              color: 'white ',
            },
          }}
        />
        <Chip
          label="Kind Robot"
          clickable
          onClick={() => window.open('/kindrobot', '_blank')}
          sx={{
            backgroundColor: '#212121',
            color: 'white ',
            '&:hover': {
              backgroundColor: '#141414',
              color: 'white ',
            },
          }}
        />
      </Stack>
    </div>
  );
}
