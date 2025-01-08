import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        
            <div className='text-center'>
        <p className='text-yellow-500'>---{subHeading}---</p>
        <hr className='w-52 mx-auto h-1 text-gray-300'/>
        <h2 className='uppercase text-xl font-semibold '>{heading}</h2>
        <hr className='w-52 mx-auto mb-10 h-1 font-bold text-gray-300' />
        </div>
       
    );
};

export default SectionTitle;