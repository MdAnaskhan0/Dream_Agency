import React from 'react'
import { IoIosChatboxes } from "react-icons/io"
import { IoIosCash } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


const About = () => {
    return (
        <>
            <div id='about' className='sm:pt-[100px] pt-[100px]'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center max-w-[1100px]'>
                    {/* Left-side */}
                    <div className='flex-initial md:w-[55%] w-full pr-[10%] mt-5'>
                        <img className='w-full h-auto' src="public/about-img.png" alt="About Us" />
                    </div>

                    {/* Right-side */}
                    <div className='flex-initial md:w-[45%] w-full mt-8 md:mt-0 pl-5 pr-5'>
                        <h3 className='text-4xl font-bold pb-3'>Why Choose Us?</h3>
                        <p className='text-[#717e96] py-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto animi ea cum pariatur harum neque odio architecto possimus voluptate.
                        </p>
                        <p className='text-[#717e96] py-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem vitae autem ab nihil officia eligendi tempore! Consequatur, asperiores labore! Labore iure voluptates a eos ut rem blanditiis doloribus eum.
                        </p>

                        <div className='ml-4 font-medium text-black pl-5'>
                            <ul className='list-disc text-[#415678]'>
                                <li>Lorem ipsum dolor sit</li>
                                <li>Dolore architecto officiis</li>
                                <li>Complete features</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Process Our Work */}
                <div className='sm:py-[100px] py-[100px]'>
                    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center max-w-[1100px]'>
                        <div className='text-center'>
                            <p className='text-xl tracking-widest my-4'>PROCESS</p>
                            <h3 className='text-4xl font-bold my-4'>Process Of Our Work</h3> {/* Added text styling for better visibility */}
                        </div>
                    </div>

                    {/* 4 process of work */}

                    <div className='sm:pt-[100px] pt-[100px]'>
                        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1100px]'>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl mb-[100px] text-center hover:bg-[#415678] hover:text-white'>
                                <IoIosChatboxes className='text-6xl' />
                                <p className='font-bold text-2xl my-3'>Chat</p>
                                <p className='text-[#717e96] hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
                            </div>
                            <div className='bg-[#415678] px-4 py-[100px] flex flex-col items-center text-white rounded-3xl mt-[100px] text-center'>
                                <IoIosCash className='text-6xl' />
                                <p className='font-bold text-2xl my-3'>Transaction</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl mb-[100px] text-center hover:bg-[#415678] hover:text-white'>
                                <IoSearch className='text-6xl' />
                                <p className='font-bold text-2xl my-3'>Research</p>
                                <p className='text-[#717e96] hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
                            </div>
                            <div className='bg-[#415678] px-4 py-[100px] flex flex-col items-center text-white rounded-3xl mt-[100px] text-center'>
                                <IoIosCheckmarkCircleOutline className='text-6xl' />
                                <p className='font-bold text-2xl my-3'>Deal</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </>
    )
}

export default About
