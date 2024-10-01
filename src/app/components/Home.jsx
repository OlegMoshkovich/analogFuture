import React from 'react';
import ModelViewer from './ModelViewer';

const Home = ({ isRotating }) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ModelViewer modelUrl="/analog_future.3dm" isRotating={isRotating} />
    </div>
  );
};

export default Home;
