import React from 'react';
import Navbar from '../components/Navbar';

function Uploading() {
  return (
    <div>
        <Navbar />
    <div className='h-screen w-screen flex bg-gradient-to-r from-purple-600 via-purple-400 to-purple-200 '>
      
      <div className='flex justify-center w-1/2 items-center p-8 rounded-md'>
            <h1 className=' text-3xl font-bold text-black font-[Roboto] '>
            Transfer your files safely and get the review process done soon.
            </h1>
        </div>
      <div className="flex justify-center w-1/2 items-center p-8 rounded-md">
        
        <form className="w-1/2 border-dashed border-black border-2 p-10" action="/upload" method="post" encType="multipart/form-data">
          <label className="block text-lg font-bold text-gray-700 mb-4" htmlFor="document">Select a file to upload:</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            type="file"
            id="document"
            name="document"
          />
          <input className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md cursor-pointer" type="submit" value="Upload" />
        </form>
      </div>
    </div>
    </div>
  );
}

export default Uploading;
