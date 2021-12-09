import React from 'react';

export default function Spinner() {
  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-full'>
      <div className='relative  my-6 mx-auto '>
        <div className='flex justify-center items-center'>
          <div
            className='
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    '
          ></div>
        </div>
      </div>
    </div>
  );
}
