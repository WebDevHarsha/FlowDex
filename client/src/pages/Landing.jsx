import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div>
      <Navbar  />
      <div className='flex h-screen w-screen overflow-hidden'>
        <div className='w-3/5 flex flex-col justify-center p-8'>
          <h1 className='text-4xl font-bold mb-4'>Research your way without any disturbance</h1>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime.</p>
        </div>
        <div className='flex justify-center overflow-hidden items-center h-[750px] w-full '>
          <div className=''>
          <Spline scene="https://prod.spline.design/dTp9citRjQK4mLQd/scene.splinecode" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Landing;
