import React from 'react';

const MenuItemCard = ({item}) => {

    const {name,image,price,recipe} = item;
    return (
        <div className='flex space-x-4'>
            <img className='w-[120px] rounded-full rounded-tl-none' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}------------</h3>
                <p>{recipe}</p>
               
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItemCard;