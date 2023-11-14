import DisplayMenusItems from "../../../Components/DisplayMenusItems/DisplayMenusItems";
import SectionBanner from "../../../Components/SectionBanner/SectionBanner";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenusData from "../../../Hooks/Menus/MenusData";
import menuBanner from '../../../assets/menu/banner3.jpg'
import desert from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {

    const [offered, pizza, salad, dessert, soup] = useMenusData()

    return (
        <div>
            <SectionBanner
                subTitle={'Would you like to try a dish?'}
                title={'OUR MENU'}
                img={menuBanner}
            ></SectionBanner>
            {/* offered */}
            <div className="my-20">
                <SectionTittle subTittle={"---Don't miss---"} tittle={"TODAY'S OFFER"}></SectionTittle>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        offered.map(item => <DisplayMenusItems key={item._id} data={item}></DisplayMenusItems>)
                    }
                </div>
                <button className="btn p-2 flex mx-auto border-l-0 border-r-0 border-t-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            <div className="my-20">
                {/* DESSERTS */}
                <SectionBanner title={'DESSERTS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={desert}></SectionBanner>

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        dessert.map(item => <DisplayMenusItems key={item._id} data={item}></DisplayMenusItems>)
                    }
                </div>
                <button className="btn p-2 flex mx-auto border-l-0 border-r-0 border-t-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>

            </div>
            <div className="my-20">
                {/* DESSERTS */}
                <SectionBanner title={'PIZZA'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={desert}></SectionBanner>

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        pizza.map(item => <DisplayMenusItems key={item._id} data={item}></DisplayMenusItems>)
                    }
                </div>
                <button className="btn p-2 flex mx-auto border-l-0 border-r-0 border-t-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>

            </div>
            <div className="my-20">
                {/* DESSERTS */}
                <SectionBanner title={'SALADS'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={desert}></SectionBanner>

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        salad.map(item => <DisplayMenusItems key={item._id} data={item}></DisplayMenusItems>)
                    }
                </div>
                <button className="btn p-2 flex mx-auto border-l-0 border-r-0 border-t-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>

            </div>
            <div className="my-20">
                {/* DESSERTS */}
                <SectionBanner title={'Soap'} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={desert}></SectionBanner>

                <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        soup.map(item => <DisplayMenusItems key={item._id} data={item}></DisplayMenusItems>)
                    }
                </div>
                <button className="btn p-2 flex mx-auto border-l-0 border-r-0 border-t-0 border-b-4 border-black">ORDER YOUR FAVOURITE FOOD</button>

            </div>

        </div>
    );
};

export default Menu;