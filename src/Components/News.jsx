import React from 'react'

const News = () => {
    return (
        <div id='news' className='m-10'>
            {/* Centered Section */}
            <div className='bg-[#717E96] py-8 sm:py-12 flex flex-col sm:flex-row justify-between items-center max-w-[1100px] mx-auto text-center px-6 sm:px-10 rounded-2xl'>
                <h3 className="text-white font-bold text-xl sm:text-3xl mb-4 sm:mb-0">Let's work together on your best project</h3>
                <p className="text-white text-md sm:text-lg bg-[#415678] px-4 py-2 rounded-md hover:bg-[#596A87] duration-300">
                    <a href="#contact">Contact Us</a>
                </p>
            </div>

            {/* News Section */}
            <div className='mt-16'>
                <div className='text-center mb-8'>
                    <p className='text-xl tracking-widest my-4'>NEWS</p>
                    <h3 className='text-4xl font-bold my-4'>Latest Post</h3>
                    <p className='text-[#717e96] max-w-xl mx-auto mt-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium alias dolorem tempora maiores culpa numquam delectus aut ullam voluptatum natus.
                    </p>
                </div>

                {/* News Items Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[1100px] mx-auto'>
                    <div className='bg-white rounded-lg overflow-hidden shadow-md group'>
                        <a href="/" className='block'>
                            {/* Added hover animation here */}
                            <img
                                src="public/news1.jpg"
                                alt="Graphic Design"
                                className='w-full h-48 sm:h-64 object-cover transition-transform duration-500 transform group-hover:scale-105'
                            />
                            <div className='p-4'>
                                <p className='font-bold text-lg text-gray-800'>Graphic Design</p>
                                <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis quaerat aperiam deleniti voluptas iusto molestias, molestiae nemo quo saepe.</p>
                            </div>
                        </a>
                    </div>

                    <div className='bg-white rounded-lg overflow-hidden shadow-md group'>
                        <a href="/" className='block'>
                            {/* Added hover animation here */}
                            <img
                                src="public/news2.jpg"
                                alt="10 Best Website"
                                className='w-full h-48 sm:h-64 object-cover transition-transform duration-500 transform group-hover:scale-105'
                            />
                            <div className='p-4'>
                                <p className='font-bold text-lg text-gray-800'>10 Best Website</p>
                                <p className='text-gray-600 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eaque saepe doloremque voluptatem dolor cum placeat tempora labore repudiandae necessitatibus!</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;
