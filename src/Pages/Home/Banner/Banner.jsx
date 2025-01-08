import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img01 from '../../../../public/assets/home/01.jpg';
import img02 from '../../../../public/assets/home/02.jpg';
import img03 from '../../../../public/assets/home/03.png';
import img04 from '../../../../public/assets/home/04.jpg';
import img05 from '../../../../public/assets/home/05.png';
import img06 from '../../../../public/assets/home/06.png';

const Banner = () => {
    return (
        <div className='mb-8'>
        <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            interval={3000} // প্রতি স্লাইডের জন্য সময় (মিলিসেকেন্ডে)
            showStatus={false} // স্লাইড স্ট্যাটাস লুকানোর জন্য
        >
            <div>
                <img src={img01} alt="Banner 1" />
            </div>
            <div>
                <img src={img02} alt="Banner 2" />
            </div>
            <div>
                <img src={img03} alt="Banner 3" />
            </div>
            <div>
                <img src={img04} alt="Banner 4" />
            </div>
            <div>
                <img src={img05} alt="Banner 5" />
            </div>
            <div>
                <img src={img06} alt="Banner 6" />
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;
