'use client';

import { Text, Container, useMantineColorScheme } from '@mantine/core';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
  Clouds,
  Cloud,
  CameraControls,
  OrbitControls,
  Stars,
  Sky as SkyImpl,
  StatsGl,
} from '@react-three/drei';
import { Suspense } from 'react';
import { useControls } from 'leva';
import { m, LazyMotion, domAnimation, Variants } from 'framer-motion';
import styles from '@/styles/hero.module.scss';

function LightSky() {
  const ref = useRef<THREE.Group>(null);
  const cloud0 = useRef<THREE.Group>(null);
  const { color, x, y, z, ...config } = useControls({
    seed: { value: 1, min: 1, max: 100, step: 1 },
    segments: { value: 20, min: 1, max: 80, step: 1 },
    volume: { value: 6, min: 0, max: 100, step: 0.1 },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
    fade: { value: 10, min: 0, max: 400, step: 1 },
    growth: { value: 4, min: 0, max: 20, step: 1 },
    speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
    x: { value: 6, min: 0, max: 100, step: 1 },
    y: { value: 1, min: 0, max: 100, step: 1 },
    z: { value: 1, min: 0, max: 100, step: 1 },
    color: 'white',
  });
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    }
    if (cloud0.current) {
      cloud0.current.rotation.y -= delta;
    }
  });
  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} />
          <Cloud {...config} bounds={[x, y, z]} color="#ffe2e4" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[x, y, z]} color="#fdece3" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[x, y, z]} color="#b8d0ea" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[x, y, z]} color="#d8e7c2" seed={5} position={[0, 0, 12]} />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
}

function HeroBgLight() {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, -10, 10], fov: 75 }}>
        <OrbitControls enableZoom={false} />
        {/* <CameraControls /> */}
        <StatsGl />
        <LightSky />
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
        <spotLight
          position={[-20, 0, 10]}
          color="red"
          angle={0.15}
          decay={0}
          penumbra={-1}
          intensity={30}
        />
        <spotLight
          position={[20, -10, 10]}
          color="red"
          angle={0.2}
          decay={0}
          penumbra={-1}
          intensity={20}
        />
      </Canvas>
    </Suspense>
  );
}

function DarkSky() {
  const ref = useRef<Group>(null!);

  useFrame(() => {
    ref.current.rotation.y -= 0.0003;
  });

  return (
    <Suspense fallback={null}>
      <group ref={ref}>
        <Clouds material={THREE.MeshBasicMaterial}>
          <Cloud segments={20} bounds={[10, 2, 2]} volume={3} color="gray" />
          <Cloud segments={20} bounds={[10, 2, 2]} volume={3} color="white" />
          <Cloud segments={20} bounds={[10, 2, 2]} volume={3} color="black" />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffcdae"
            opacity={1.5}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
        <Stars radius={100} depth={70} count={7000} factor={4} saturation={0} fade speed={3} />
      </group>
    </Suspense>
  );
}
function HeroBgDark() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 1, 5],
        fov: 50,
      }}
    >
      <OrbitControls enableZoom={false} />
      {/* <CameraControls /> */}
      <DarkSky />
    </Canvas>
  );
}

function HeroText() {
  const name = 'momo'.split('');

  // parent container for staggering children
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between letters
      },
    },
  };

  // child spring animation (applies to each span)
  const child: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80, // snappier
        damping: 15, // more bounce
        mass: 2, // optional: affects weightiness
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.h1
        className="text-6xl sm:text-7xl md:text-8xl font-bold text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <m.span className="block mb-2 text-6xl font-medium" variants={child}>
          Hi, I&apos;m
        </m.span>
        <div className="flex gap-1 justify-center">
          {name.map((char, index) => (
            <m.span key={index} variants={child} className="inline-block">
              {char}
            </m.span>
          ))}
        </div>
      </m.h1>
    </LazyMotion>
  );
}

function HeroScroller() {
  return (
    <div className={styles.scroller}>
      <a href="#features">
        <div className={styles.circleContainer}>
          <m.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className={styles.circle}
          />
        </div>
      </a>
    </div>
  );
}

export default function Hero() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <div className="flex flex-col justify-center items-center dark:bg-baseOne w-screen h-screen max-w-full -mt-[100px]">
      <div id="hero_canvas" className="w-screen h-screen max-w-full absolute">
        {isDark ? <HeroBgDark /> : <HeroBgLight />}
      </div>
      <Container className={`${styles.main}`}>
        <LazyMotion features={domAnimation} strict>
          <m.div className={styles.textContainer}>
            <HeroText />
          </m.div>
          <HeroScroller />
        </LazyMotion>
        <h1
          className="flex flex-col font-gray900 leading-snug 
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                 leading-relaxed gap-4 mt-8"
        >
          A peachie&apos;s road to
          <br />
          <Text
            component="span"
            inherit
            className="font-reggae inline-block 
                 text-primaryOne bg-baseZero p-2 sm:px-3 md:px-4 
                 text-nowrap w-fit"
          >
            DEV GURU
          </Text>
        </h1>

        <Text className="text-base sm:text-lg md:text-xl lg:text-xl font-bold">
          Gain insights on web development, design, debugging and tooltips.
        </Text>
      </Container>
    </div>
  );
}
