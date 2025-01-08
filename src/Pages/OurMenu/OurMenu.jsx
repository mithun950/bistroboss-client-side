import React from 'react';
import { Helmet } from 'react-helmet-async';
import DynamicCover from '../../Shared/Menu/DynamicCover';
import menuImage from '../../../public/assets/menu/banner3.jpg'
import useMenu from '../../components/hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from '../../Shared/Menu/MenuCategory/MenuCategory';
import dessertImg from '../../../public/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../public/assets/menu/pizza-bg.jpg'
import saladImg from '../../../public/assets/menu/salad-bg.jpg'
import soupImg from '../../../public/assets/menu/soup-bg.jpg'


const OurMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <DynamicCover img={menuImage} title={"our menu"}></DynamicCover>

            <SectionTitle 
            subHeading={"Don't Miss"}
            heading={"Today's offer"}
            ></SectionTitle>

            {/* offered items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory 
            items={desserts}
            title={"Dessert"}
            coverImg={dessertImg}
            ></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory items={pizza} 
               
              title={"Pizzas"}
            coverImg={pizzaImg}     
            ></MenuCategory>

            {/* salad menu item */}
            <MenuCategory items={salad} 
               
              title={"Salads"}
            coverImg={saladImg}     
            ></MenuCategory>
           
            {/* soup menu item */}
            <MenuCategory items={soup} 
               
              title={"Soup"}
            coverImg={soupImg}     
            ></MenuCategory>


        </div>
    );
};

export default OurMenu;

