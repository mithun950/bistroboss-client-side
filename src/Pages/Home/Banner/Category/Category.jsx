import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img01 from '../../../../../public/assets/home/slide1.jpg';
import img02 from '../../../../../public/assets/home/slide2.jpg';
import img03 from '../../../../../public/assets/home/slide3.jpg';
import img04 from '../../../../../public/assets/home/slide4.jpg';
import img05 from '../../../../../public/assets/home/slide5.jpg';
import SectionTitle from '../../../../components/SectionTitle';

const Category = () => {
    return (
       <section className='mb-24 mt-16'>
        
        <SectionTitle 
         subHeading={"From 11.00am to 10.00pm"}
        heading={"order Now"}
        
        >
       
        </SectionTitle>

       
        
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img01} alt="" />
            <h2 className='text-xl  uppercase text-center -mt-20 text-white '>salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img02} alt="" />
            <h2 className='text-xl  uppercase text-center -mt-20 text-white '>Pizzas</h2>
       </SwiperSlide>
        <SwiperSlide>
            <img src={img03} alt="" />
            <h2 className='text-xl  uppercase text-center -mt-20 text-white '>soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img04} alt="" />
            <h2 className='text-xl  uppercase text-center -mt-20 text-white '>deserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img05} alt="" />
            <h2 className='text-xl  uppercase text-center -mt-20 text-white '>salads</h2>
            
       </SwiperSlide>
        
       
      </Swiper>
       </section> 
    );
};

export default Category;
