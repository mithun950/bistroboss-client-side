import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import orderCover from "../../../../public/assets/shop/banner2.jpg";
import DynamicCover from "../../../Shared/Menu/DynamicCover";
import { useState } from "react";
import useMenu from "../../../components/hooks/useMenu";
import FoodCard from "../../../components/Card/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["Salad", "Pizza", "Dessert", "Soup", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  // Render Swiper with Number Pagination
  const renderSwiper = (items) => {
    const slides = [];
    for (let i = 0; i < items.length; i += 5) {
      slides.push(items.slice(i, i + 5)); 
    }

    return (
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className}">${index + 1}</span>`,
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <DynamicCover img={orderCover} title={"Order Food"}></DynamicCover>

      <div className="mt-16 text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>{renderSwiper(salad)}</TabPanel>
          <TabPanel>{renderSwiper(pizza)}</TabPanel>
          <TabPanel>{renderSwiper(desserts)}</TabPanel>
          <TabPanel>{renderSwiper(soup)}</TabPanel>
          <TabPanel>{renderSwiper(drinks)}</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
