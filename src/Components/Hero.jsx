import React from 'react'

const Hero = () => {
    return (
        <div className='sm:py-[100px] py-[50px] duration-300'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center max-w-[1100px]'>
                {/* Left-side */}
                <div className='flex-initial md:w-[55%] w-full md:pr-[10%] text-center md:text-left'>
                    <h1 className='font-extrabold text-4xl md:text-5xl leading-[40px] md:leading-[55px]'>
                        <span className='text-[#415678] '>Build</span> Your Agency <span className='text-[#415678]'>With Us</span>
                    </h1>
                    <p className='py-8 text-[#717e96] font-normal text-sm md:text-base'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, non aliquid? Enim.
                    </p>
                    <div className='flex flex-col sm:flex-row sm:space-x-6 space-y-8 sm:space-y-0 items-center md:items-start justify-center md:justify-start'>
                        <p><a className='bg-[#415678] px-8 py-3 rounded-md text-white border-2 border-[#415678] hover:bg-white hover:border-2 hover:border-[#415678] hover:text-[#415678] duration-300' href="/">Get Started</a></p>
                        <p><a className='border-2 border-[#415678] px-10 py-3 rounded-md text-[#415678] hover:bg-[#415678] hover:text-white duration-300' href="/">Free Trial</a></p>
                    </div>
                </div>

                {/* Right-side */}
                <div className='flex-initial md:w-[45%] w-full mt-[100px] md:mt-0 '>
                    <img className='w-full h-auto' src="public/header-img.png" alt="Agency Header" />
                </div>
            </div>
        </div>
    )
}

export default Hero
