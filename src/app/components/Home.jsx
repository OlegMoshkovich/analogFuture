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
        style={{ width:'97%', height:'40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', cursor: 'pointer' }}
      >
        <a href="/kindrobot">
          <img src="/images/logo.png" alt="Logo" width="50" height="50" style={{ cursor: 'pointer' }} />
        </a>
      </div>

      <div style={{ width: '100%', height: '100%', mb: 4 }}>
        <ModelViewer
          modelUrl="/analog_future.3dm"
          isRotating={isRotating}
          initialZoom={.8}
          height={isMobile ? '450px' : '550px'} // Use MUI's useMediaQuery for responsive height
        />
      </div>
      <Stack spacing={1} sx={{ marginTop: '-324px' }}>
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
