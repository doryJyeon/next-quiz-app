"use client";

import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const TopButton = () => {
  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      className="fixed bottom-20 right-10 
      bg-yellow-400 hover:bg-yellow-500 text-white font-bold 
      rounded-full shadow-lg w-11 h-11 p-2 hover:-translate-y-3 transition-all z-10"
      onClick={() => handleTopScroll()}
    >
      <ArrowUpIcon />
    </button>
  );
}

export default TopButton;
