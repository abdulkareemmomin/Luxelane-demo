import React from 'react';

const Home = () => {
    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center mt-16">
            {/* Main Container */}
            <div className="w-full h-full mx-auto p-4 lg:p-16 shadow-lg rounded-none flex flex-col lg:flex-row gap-4 bg-red-500">
                {/* Left Container */}
                <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-white w-full p-8 lg:p-20">
                    <h1 className="text-5xl lg:text-7xl font-bold text-center lg:text-left">
                        LUXELANE
                    </h1>
                    <p className="text-center lg:text-left mt-6 text-lg lg:text-xl px-4 lg:px-0">
                        Experience audio perfection at Luxelane. Explore a curated selection of high-quality audio products, from headphones to speakers and smart accessories.
                    </p>
                    <div className="flex mt-8 space-x-4 flex-col sm:flex-row">
                        <button type="button" className="btn rounded-none bg-transparent hover:bg-transparent text-white px-6 mb-4 sm:mb-0">
                            Read More
                        </button>
                        <button type="button" className="btn rounded-none bg-white hover:bg-red-100 text-black px-6">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Right Container */}
                <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
                    <img
                        src="/assets/headphone.png"
                        alt="Headphone"
                        className="w-full h-full object-contain max-w-md lg:max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
