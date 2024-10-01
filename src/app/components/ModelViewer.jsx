import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader';
import { Box3, Vector3, Group } from 'three';

function RhinoModel({ url }) {
  const ref = useRef();
  const { camera, scene } = useThree();
  const [model, setModel] = useState(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    // Initialize the Rhino3dmLoader and load the model
    const loader = new Rhino3dmLoader();
    loader.setLibraryPath('https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/');

    loader.load(url, (object) => {
      // Once loaded, add the model to the scene and set state
      setModel(object);

      // Create a group to hold the model and center it
      const group = new Group();
      group.add(object);
      scene.add(group);

      // Calculate the bounding box to center the model
      const box = new Box3().setFromObject(object);
      const center = new Vector3();
      const size = new Vector3();
      box.getCenter(center);
      box.getSize(size);

      // Center the model by adjusting its position
      object.position.sub(center);

      // Adjust camera distance based on model size
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180); // Convert vertical fov to radians
      const cameraDistance = Math.abs(maxDim / 2 / Math.tan(fov / 2));

      // Adjust camera distance for mobile devices
      const isMobile = window.innerWidth <= 600;
      camera.position.z = isMobile ? cameraDistance * 1.5 : cameraDistance;

      // Render the scene with the new model
      ref.current = group;
    });

    return () => {
      // Cleanup: remove the model from the scene when the component is unmounted
      if (model) scene.remove(model);
    };
  }, [url, camera, scene]);

  // Add back and forth rotation to the model
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      const rotationAngle = Math.sin(time) * (Math.PI / 90); // 2 degrees in radians
      ref.current.rotation.y = rotationAngle;
    }
  });

  return null; // We don't return JSX since we're directly adding the model to the scene
}

export default function ModelViewer({ modelUrl }) {
  return (
    <Canvas style={{ width: '100vw', height: '400px'}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RhinoModel url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
}
