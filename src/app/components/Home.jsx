import React, { useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';
import { Chip } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';

export default function Home({ isRotating }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width:768px)'); // MUI hook for responsive design

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChipClick = () => {
    if (isClient) {
      router.push('/kindrobot');
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div style={{ width: '100%', mb: 4 }}>
        <ModelViewer
          modelUrl="/analog_future.3dm"
          isRotating={isRotating}
          initialZoom={1}
          height={isMobile ? '450px' : '550px'} // Use MUI's useMediaQuery for responsive height
        />
      </div>
      <Chip
        label="Chat with kind robot"
        clickable
        onClick={handleChipClick}
        sx={{
          mt: 2,
          backgroundColor: 'white',
          color: '#141414 ',
          marginTop: '4rem',
          '&:hover': {
            backgroundColor: '#141414',
            color: 'white ',
          },
        }}
      />
    </div>
  );
}
