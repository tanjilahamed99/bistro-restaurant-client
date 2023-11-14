import DisplayShopItems from "../../Components/DisplayShopItems/DisplayShopItems";
import SectionBanner from "../../Components/SectionBanner/SectionBanner";
import useMenusData from "../../Hooks/Menus/MenusData";
import img from '../../assets/menu/banner3.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurShop = () => {

    const [, pizza, salad, dessert, soup,drinks] = useMenusData()

    return (
        <div>
            <SectionBanner
                img={img}
                title={'OUR SHOP'}
                subTitle={'Would you like to try a dish?'}
            ></SectionBanner>

            <div className="my-20">
                <Tabs>
                    <TabList className={'text-center'}>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>soap</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto justify-center md:grid-cols-3 items-center my-10 gap-10">
                            {
                                salad.map(items =><DisplayShopItems key={items._id} data={items}></DisplayShopItems>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto justify-center md:grid-cols-3 items-center my-10 gap-10">
                            {
                                pizza.map(items =><DisplayShopItems key={items._id} data={items}></DisplayShopItems>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto justify-center md:grid-cols-3 items-center my-10 gap-10">
                            {
                                soup.map(items =><DisplayShopItems key={items._id} data={items}></DisplayShopItems>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto justify-center md:grid-cols-3 items-center my-10 gap-10">
                            {
                                dessert.map(items =><DisplayShopItems key={items._id} data={items}></DisplayShopItems>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 mx-auto justify-center md:grid-cols-3 items-center my-10 gap-10">
                            {
                                drinks.map(items =><DisplayShopItems key={items._id} data={items}></DisplayShopItems>)
                            }
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>

        </div>
    );
};

export default OurShop;