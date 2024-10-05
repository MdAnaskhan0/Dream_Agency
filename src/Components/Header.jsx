import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='bg-white px-8 py-4 shadow-md sticky top-0 fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
        {/* Main container for header */}
        <div className='container mx-auto flex justify-between items-center max-w-[1100px]'>
          {/* Logo section */}
          <div className='flex items-center'>
            <a href="/"><img src="public/logo.png" alt="Logo" className='w-14' /></a>
          </div>

          {/* Menu for large screens */}
          <div className='hidden md:flex'>
            <ul className='text-black flex space-x-8 text-m font-medium '>
              <li><a className='hover:text-[#415678]' href="/">Home</a></li>
              <li><a className='hover:text-[#415678]' href="#about">About</a></li>
              <li><a className='hover:text-[#415678]' href="#portfolio">Portfolio</a></li>
              <li><a className='hover:text-[#415678]' href="#service">Service</a></li>
              <li><a className='hover:text-[#415678]' href="#news">News</a></li>
              <li><a className='hover:text-[#415678]' href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Hamburger icon for mobile menu */}
          <div className='md:hidden'>
            <button onClick={handleToggle} className='text-black'>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu section */}
        {isOpen && (
          <div className='md:hidden'>
            <ul className='text-black flex flex-col space-y-4 py-4 w-full'>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Portfolio</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
