import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div>
      <Navbar />
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

      <div className="w-full  md:w-3/5 text-center p-4 md:p-24">
          <h3 className="mb-4 font-bold">ABOUT US</h3>
          <div className="w-1/2 md:w-auto h-0.5 border-1 rotate-180 mx-auto my-10 bg-black"></div>
          <div className="text-center">
            <p>
            At the FlowDex, we believe in empowering authors and revolutionizing the publishing industry through decentralization and blockchain technology.Our mission is to provide a decentralized ecosystem where authors have full control over their content, receive fair compensation for their work, and engage with readers directly without intermediaries.
            </p>
          </div>
          <img src="src/assets/house.jpg" alt="" />

        </div>

      



      <div className="p-24">
        <h3 className="mb-4 font-bold text-center">BLOGS AND NEWS</h3>
        <div className="w-1/2 md:w-96 h-0.5 border-1 rotate-180 mx-auto my-10 bg-black"></div>

        <div className="cards justify-center space-x-24 flex">
          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black  bg-black text-white  rounded-lg px-5 ">
              READ MORE
            </button>
          </div>

          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black  bg-black text-white rounded-lg px-5 ">
              READ MORE
            </button>
          </div>
          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black bg-black text-white rounded-lg px-5 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-12 bg-black text-white h-24 flex justify-center items-center">
        © 2023 FlowDex, LLC, a WordPress maintenance & marketing company.
        Legal. Flowdex is not affiliated with anyone.
      </footer>
    </div>
  );
}

export default Landing;
