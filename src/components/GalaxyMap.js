import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { TextureLoader } from 'three';

import Gaseous3Tex from '../textures/Gaseous3.png';
import Gaseous4Tex from '../textures/Gaseous4.png';
import IcyTex from '../textures/Icy.png';
import MartianTex from '../textures/Martian.png';
import MoonTex from '../textures/Moon.jpg'
import SavannahTex from '../textures/Savannah.png'
import TerrestrialTex from '../textures/Terrestrial.png'
import VenusianTex from '../textures/Venusian.png'
import VolcanicTex from '../textures/Volcanic.png';


function Planet(props) {
  return (
    <mesh
      position={props.position}
      onClick={() => {
        document.querySelector('.planetDescription').innerHTML = `${props.description}`;
        }}
    >
      <sphereGeometry args={props.args}/>
      <meshStandardMaterial
        map={props.map}
        metalness={0.4}
        roughness={0.7}
      />
    </mesh>
  )
}

function GalaxyMap() {
  const [terrestrial, venusian, savannah, moon, volcanic, martian, gaseous3, gaseous4, icy] =
    useLoader(TextureLoader, [TerrestrialTex, VenusianTex, SavannahTex, MoonTex, VolcanicTex, MartianTex, Gaseous3Tex, Gaseous4Tex, IcyTex]);
  return (
    <>
    <Canvas className='galaxy-map'>
      <OrbitControls enablePan={true}/>
      <Stars />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Planet
          position={[0, 0, 0]}
          description='Earth 2.0 (habitable)'
          args={[1, 32, 32]}
          map={terrestrial}
        />
        <Planet
          position={[-15, -10, 3]}
          description='Venusia (uninhabitable)'
          args={[1, 32, 32]}
          map={venusian}
        />
        <Planet
          position={[-10, 0, 0]}
          description='Saharia (habitable)'
          args={[1, 32, 32]}
          map={savannah}
        />
        <Planet
          position={[-1, -1, 3]}
          description='Luna (somewhat habitable)'
          args={[0.3, 32, 32]}
          map={moon}
        />
        <Planet
          position={[5, 5, -5]}
          description='Volcax (totally uninhabitable)'
          args={[1, 32, 32]}
          map={volcanic}
        />
        <Planet
          position={[-10, 0, 60]}
          description='Volcax (totally uninhabitable)'
          args={[2, 32, 32]}
          map={martian}
        />
        <Planet
          position={[20, -20, 30]}
          description='Jupitious (uninhabitable)'
          args={[5, 32, 32]}
          map={gaseous3}
        />
        <Planet
          position={[10, 40, -20]}
          description='Gasidious (uninhabitable)'
          args={[7, 32, 32]}
          map={gaseous4}
        />
        <Planet
          position={[30, 0, 30]}
          description='Iceferin (somewhat habitable)'
          args={[1, 32, 32]}
          map={icy}
        />
        </Physics>
    </Canvas>
    </>
  )
}

export default GalaxyMap;