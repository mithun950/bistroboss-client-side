import SectionTitle from '../../../components/SectionTitle';
import MenuItemCard from '../../../Shared/MenuItemCard';
import useMenu from '../../../components/hooks/useMenu';

const PopularMenu = () => {
        
const [menu] = useMenu();
const popularItems = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle subHeading={"Check it out"}
              heading={"from our menu"}
            ></SectionTitle>

        <div className='grid md:grid-cols-2 gap-7 mb-16'>
            {
                popularItems.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
            }
        </div>


<div className='text-center'>
<button className="btn btn-outline border-0 border-b-4 text-black mt-2">View Full Menu</button>

</div>

        </section>
    );
};

export default PopularMenu;

