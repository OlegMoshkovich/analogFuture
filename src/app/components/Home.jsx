import React, { useEffect, useState } from 'react';
import ModelViewer from './ModelViewer';
import { Chip } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home({ isRotating }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChipClick = () => {
    if (isClient) {
      router.push('/kindrobot');
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', mb: 4 }}>
        <ModelViewer modelUrl="/analog_future.3dm" isRotating={isRotating} initialZoom={1} />
      </div>
      <Chip
        label="Chat with Kind Robot"
        clickable
        onClick={handleChipClick}
        sx={{
          mt: 2,
          backgroundColor: '#141414',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      />
    </div>
  );
}
