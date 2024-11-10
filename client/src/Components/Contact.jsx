import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container mx-auto mt-20 p-5">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md">

                {/* Left side - Premium message with animation */}
                <div className="md:w-1/2 p-6 bg-blue-100 rounded-t-lg md:rounded-l-lg md:rounded-tr-none animate__animated animate__fadeInLeft">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Why Choose Luxelane?</h2>
                    <p className="text-lg text-gray-700 font-semibold">
                        At Luxelane, we are committed to delivering high-quality, premium audio devices that enhance your lifestyle. Our products are crafted with precision and care, combining cutting-edge technology with sleek design to ensure you have the best experience.
                    </p>
                    <p className="text-lg text-gray-700 mt-4 font-semibold">
                        Connect with us and experience the difference in quality, comfort, and innovation. We look forward to serving you!
                    </p>
                </div>

                {/* Right side - Contact form */}
                <div className="md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label htmlFor="name" className="block">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                            aria-label="Enter your name"
                        />

                        <label htmlFor="email" className="block">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                            aria-label="Enter your email"
                        />

                        <label htmlFor="message" className="block">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out"
                            aria-label="Enter your message"
                        ></textarea>

                        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
                            Send Message
                        </button>
                    </form>

                    {submitted && (
                        <p className="mt-4 text-green-600 text-center animate-pulse">Thank you! Your message has been sent.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
