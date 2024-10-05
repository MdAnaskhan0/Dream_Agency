import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";



const Services = () => {
    return (
        <>
            <div id='service' className='sm:pt-[100px]'>
                <div className='sm:py-[100px] py-[100px]'>
                    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center max-w-[1100px]'>
                        <div className='text-center'>
                            <p className='text-xl tracking-widest my-4'>PROCESS</p>
                            <h3 className='text-4xl font-bold my-4'>Process Of Our Work</h3> {/* Added text styling for better visibility */}
                        </div>
                    </div>

                    <div className='sm:pt-[100px] pt-[100px]'>
                        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1100px]'>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <FaHtml5 className='text-4xl' />
                                <p className='font-bold text-xl my-3'>HTML 5</p>
                                <p className='text-[#717e96] hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, reiciendis?</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <CiMobile2 className='text-4xl' />
                                <p className='font-bold text-xl my-3'>Mobile Apps</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <CiMonitor className='text-4xl' />
                                <p className='font-bold text-xl my-3'>Web Development</p>
                                <p className='text-[#717e96] hover:text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt Deserunt, reiciendis?</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <LuBrainCircuit className='text-4xl' />
                                <p className='font-bold text-xl my-3'>Brand Strategy</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <FaRegNewspaper className='text-4xl' />
                                <p className='font-bold text-xl my-3'>Branding</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                            </div>
                            <div className='bg-[#f8f8fc] px-4 py-[100px] flex flex-col items-center rounded-3xl text-center hover:bg-[#415678] hover:text-white'>
                                <FaWordpress className='text-4xl' />
                                <p className='font-bold text-xl my-3'>Wordpress</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit deserunt</p>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
