import React from 'react'

const Hero = () => {
    return (
        <div className='min-w-[80vh] py-20'>
            <div className='container mx-auto flex justify-between items-center max-w-[1100px]'>
                {/* Left-side */}
                <div className='flex-initial w-[55%] pr-[10%]'>
                    <h1 className='font-extrabold text-5xl leading-[55px]'><span className='text-[#415678] '>Build</span> Your Agency <span className='text-[#415678]'>With Us</span></h1>
                    <p className='py-10 text-[#717e96] font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, non aliquid? Enim.</p>
                    <div className='flex flex-row space-x-6'>
                        <p ><a className='bg-[#415678] px-8 py-3 rounded-md text-white border-2 border-[#415678] hover:bg-white hover:border-2 hover:border-[#415678] hover:text-[#415678] duration-300' href="/">Get Started</a></p>
                        <p ><a className='border-2 border-[#415678] px-8 py-3 rounded-md text-[#415678] hover:bg-[#415678]  hover:text-white duration-300' href="/">Free Trial</a></p>
                    </div>
                </div>
                {/* Right-side */}
                <div className='flex-initial w-[45%]'>
                    <img src="public/header-img.png" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Hero
