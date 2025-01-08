
import { Link } from 'react-router';
import MenuItemCard from '../../MenuItemCard';
import DynamicCover from '../DynamicCover';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>

             {  title &&
                
                <DynamicCover img={coverImg} title={title}></DynamicCover>
                
            }




         <div className='grid md:grid-cols-2 gap-7 my-16'>
            {
                items.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
            }
        </div>
            
            <div className='text-center'>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-black mt-2 my-8">Order Your Favorite Food</button>
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
