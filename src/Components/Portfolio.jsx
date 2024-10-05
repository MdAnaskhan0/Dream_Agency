// src/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import portfolioData from './data.json'; // Ensure this path is correct

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false); // New state for animation

    useEffect(() => {
        setPortfolioItems(portfolioData);
    }, []);

    const handleFilterChange = (newFilter) => {
        setIsAnimating(true); // Start animation
        setTimeout(() => {
            setFilter(newFilter);
            setIsAnimating(false); // End animation
        }, 300); // Match this duration with your animation duration
    };

    const filteredItems = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div id='portfolio' className="container mx-auto pt-10">
            <p className='text-xl tracking-widest my-4 text-center'>WORK</p>
            <h1 className="text-3xl font-bold text-center">Our Work Portfolio</h1>

            <div className="flex justify-center space-x-4 mt-5">
                <button
                    className="filter-button text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => handleFilterChange('all')}
                >
                    All
                </button>
                <button
                    className="filter-button text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => handleFilterChange('web-design')}
                >
                    Web Design
                </button>
                <button
                    className="filter-button text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => handleFilterChange('marketing')}
                >
                    Marketing
                </button>
                <button
                    className="filter-button text-black px-4 py-2 rounded hover:bg-gray-200"
                    onClick={() => handleFilterChange('branding')}
                >
                    Branding
                </button>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 max-w-[1100px] mx-auto transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                {filteredItems.map(item => (
                    <div
                        key={item.id}
                        className="relative portfolio-item bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                        <img src={item.image} alt={item.title} className="w-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-white font-bold text-lg">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
