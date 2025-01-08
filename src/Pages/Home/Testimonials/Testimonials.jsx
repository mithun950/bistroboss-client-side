import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])






    return (
        <div className='my-20'>
            <SectionTitle subHeading={"What our client say"}
             heading={"testimonials"}
            
            ></SectionTitle>


<Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                
        {
           reviews.map(review =>  <SwiperSlide key={review._id}>
                  <div className='m-16 flex flex-col items-center'>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    />

                    <p>{review.details}</p>
                    <h3 className='text-xl text-orange-300 text-center'>{review.name}</h3>
                  </div>
           </SwiperSlide> ) 
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;