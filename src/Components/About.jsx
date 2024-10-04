import React from 'react'

const About = () => {
    return (
        <div className='min-w-[80vh] py-20'>
            <div className='container mx-auto flex justify-between items-center max-w-[1100px]'>
                {/* Left-side */}
                <div className='flex-initial w-[55%] pr-[10%]'>
                    <img className='mt-10' src="public/about-img.png" alt="/" />
                </div>

                {/* Right-side */}
                <div className='flex-initial w-[45%] pr-5'>
                    <h3 className='text-4xl font-bold pb-3'>Why Chose Us?</h3>
                    <p className='text-[#717e96] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iusto animi ea cum pariatur harum neque odio architecto possimus voluptate.</p>
                    <p className='text-[#717e96] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem vitae autem ab nihil officia eligendi tempore! Consequatur, asperiores labore! Labore iure voluptates a eos ut rem blanditiis doloribus eum.</p>

                    <div className='ml-4 font-medium text-black'>
                        <ul className='list-disc text-[#415678]'>
                            <li>Lorem ipsum dolor sit</li>
                            <li>dolore architecto officiis</li>
                            <li>Complete features</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
