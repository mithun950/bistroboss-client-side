import React from 'react';
import service from "../../../../../../public/assets/home/chef-service.jpg";

const ChefService = () => {
    return (
        <div className="relative mb-16">
            {/* Background Image */}
            <img src={service} alt="Chef Service" className="w-full h-auto" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex justify-center items-center ">
                <h2 className="text-black text-sm text-center p-4 sm:p-10 w-8/12 bg-white text-opacity-60"> <h2 className='text-xl font-bold text-opacity-100'>Bistro Boss</h2>
                <p>Bistro Boss is not just a restaurant; it’s an experience where culinary art meets passion. Every dish is crafted with fresh ingredients and presented with care, offering a perfect blend of taste and elegance.</p>
                </h2>
            </div>
        </div>
    );
};

export default ChefService;
