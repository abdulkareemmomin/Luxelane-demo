import React from 'react';

const About = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-8 mt-10 mb-10">
                <h1 className="text-4xl font-bold mb-6 text-center">About Luxelane</h1>

                <div className="flex flex-col md:flex-row items-stretch">
                    {/* Left container (Text/About) */}
                    <div className="w-full md:w-1/2 p-4 flex flex-col justify-between font-medium">
                        <p className="text-lg text-gray-700 mt-2">
                            Luxelane is your ultimate destination for premium audio devices and smart accessories. We curate a collection of the finest headphones, earbuds, speakers, and smartwatches to enhance your lifestyle.
                        </p>
                        <p className="text-lg text-gray-700 mb-10 md:mb-40">
                            Our mission is to provide our customers with top-notch quality products that deliver an exceptional audio experience and cutting-edge technology. Luxelane brings together style, comfort, and functionality in every product we offer.
                        </p>
                    </div>

                    {/* Right container (Image) */}
                    <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
                        <img
                            src="https://freerangestock.com/sample/148758/woman-in-white-earphones-listening-to-music-on-pink-background.jpg"
                            alt="About Luxelane"
                            className="w-full h-auto rounded-lg hover:shadow-md duration-200 max-w-xs md:max-w-full"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
                    <p className="font-medium">
                        Luxelane specializes in a variety of high-quality products, including:
                    </p>
                    <ul className="list-disc ml-6 mt-4 space-y-2 font-semibold">
                        <li>Headphones for immersive audio experiences</li>
                        <li>Earbuds for on-the-go convenience</li>
                        <li>Premium speakers for crystal-clear sound</li>
                        <li>Smartwatches with cutting-edge technology</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About;
