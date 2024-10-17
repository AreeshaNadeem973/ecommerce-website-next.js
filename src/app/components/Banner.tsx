

import React from 'react';

export default function Banner() {
  return (
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-4 sm:px-6 md:px-8 py-12 mb-7 rounded-lg'>
      <div className='absolute inset-0 opacity-30'>
        <img
          src="https://i.pinimg.com/474x/1f/fa/9e/1ffa9e340472b056a93010a9475fc9c3.jpg"
          alt="Delicious Pizza banner"
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-center px-4'>
        <h2 className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
          Discover Our Menu
        </h2>
        <p className='text-white text-base sm:text-lg md:text-xl mb-6 max-w-lg'>
          Shop Now For Exclusive Pizza Discounts!
        </p>

        <button
          type='button'
          className='bg-blue-500 text-white text-sm sm:text-base font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300'>
          Exciting Deals Launch at 12PM!
        </button>
      </div>
    </div>
  );
}














