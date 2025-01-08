import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import featuring from "../../../../public/assets/home/featured.jpg";

const Featured = () => {
    return (
        <div className="relative featured-image bg-fixed p-10 mt-10 mb-10 text-white ">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
            
            <SectionTitle 
                subHeading={"Check it out"} 
                heading={"Featured item"} 
            ></SectionTitle>

            <div className="relative z-10 md:flex justify-center items-center py-8 px-16 gap-8 text-white bg-slate-700 bg-opacity-60">
                <div>
                    <img src={featuring} alt="" className="w-full" />
                </div>
                <div>
                    <p className='mb-3'>Aug 20, 2029</p>
                    <p className="uppercase my-2">Where can I get some?</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda fugit mollitia sequi praesentium, eaque deserunt quod pariatur rem maiores facilis. Tempore eveniet consectetur nemo ex officia, magni assumenda commodi itaque fugiat architecto! Dolorem officiis voluptatum dolorum ducimus error aspernatur blanditiis nesciunt numquam iste odit excepturi, praesentium architecto maxime nemo!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
