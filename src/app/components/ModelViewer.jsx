import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader';
import { Box3, Vector3, Group } from 'three';

function RhinoModel({ url, isRotating, initialZoom, initialPosition, verticalOffset = 0 }) {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new Rhino3dmLoader();
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/');

    loader.load(url, (object) => {
      setModel(object);

      const group = new Group();
      group.add(object);
      scene.add(group);

      const box = new Box3().setFromObject(object);
      const center = new Vector3();
      const size = new Vector3();
      box.getCenter(center);
      box.getSize(size);

      object.position.sub(center);

      // Adjust the model's vertical position with the verticalOffset
      object.position.y += size.y / 2 - verticalOffset;

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      const isMobile = window.innerWidth <= 600;
      camera.position.set(
        initialPosition.x,
        initialPosition.y,
        (isMobile ? cameraDistance * 1.5 : cameraDistance) / initialZoom
      );

      ref.current = group;
    });

    return () => {
      if (model) scene.remove(model);
    };
  }, [url, camera, scene, initialZoom, initialPosition, verticalOffset]);

  useFrame(({ clock }) => {
    if (ref.current && isRotating) {
      const time = clock.getElapsedTime();
      const rotationAngle = Math.sin(time) * (Math.PI / 10);
      ref.current.rotation.y = rotationAngle;
    }
  });

  return null;
}

export default function ModelViewer({ modelUrl, isRotating, initialZoom = 1, initialPosition = { x: 0, y: 0, z: 0 }, verticalOffset = 0 }) {
  return (
    <Canvas style={{ width: '100vw', height: '400px'}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RhinoModel url={modelUrl} isRotating={isRotating} initialZoom={initialZoom} initialPosition={initialPosition} verticalOffset={verticalOffset} />
      <OrbitControls
        enableZoom={true} // Allow zooming
        enablePan={true}  // Allow panning
        enableRotate={true} // Allow rotation
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation
        minPolarAngle={0} // Limit vertical rotation
      />
    </Canvas>
  );
}
