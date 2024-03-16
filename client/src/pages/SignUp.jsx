import React, { useState } from "react";

function Signup() {
  const [signup, setSignup] = useState(true);

  const toggleSignup = () => {
    setSignup(!signup);
  };

  return (
    <div className="grid   h-screen w-screen grid-cols-2">
      <div className={`transition-transform duration-700 ${signup ? "translate-x-full" : ""}`}>
        
        {signup? <img src="src/assets/welcome.jpg" className="h-screen " alt="" />:<img src="src/assets/welcome-back.jpg" className="h-screen" alt="" /> }
      </div>

      <div className={`flex z-10 relative duration-700 ${signup ? "-translate-x-full " : " "} bg-white items-center justify-center transition-transform`}>
        
          {signup ? 
    <div className="  flex">
		
      <div class="min-h-screen m-auto bg-white  py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r  from-purple-600 to-light-purple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">
                  FlowDex
                </h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <button  class=" bg-purple-600 hover:ring-2 hover:ring-offset-4 hover:ring-purple-600 text-white rounded-md px-2 py-1 transition-all duration-300">
                      Sign Up
                    </button>
                  </div>
                  <a  className="hover:cursor-pointer text-blue-700 text-sm" onClick={toggleSignup}>have an account already?</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>: 
    <div className=" bg-white flex">
		
      <div class="min-h-screen m-auto bg-white py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r  from-purple-600 to-light-purple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">
                  FlowDex
                </h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <a href="profile">
                    <button class=" bg-purple-600 hover:ring-2 hover:ring-offset-4 hover:ring-purple-600 text-white rounded-md px-2 py-1 transition-all duration-300">
                      Login
                    </button>
                    </a>
                  </div>
                  <a  className="hover:cursor-pointer text-blue-700 text-sm" onClick={toggleSignup}>dont have an account? register here</a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
      
      </div>
    </div>
  );
}

export default Signup;
