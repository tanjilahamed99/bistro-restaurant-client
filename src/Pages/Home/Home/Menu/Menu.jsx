import SectionTittle from "../../../../Components/SectionTittle/SectionTittle";
import { useEffect, useState } from "react";
import DisplayMenu from "./DisplayMenu";
import UseAxios from "../../../../Hooks/Axios/UseAxios";

const Menu = () => {

    const mkAxios = UseAxios()
    const [popular, setPopular] = useState([])
    useEffect(() => {
        mkAxios.get('/menu')
            .then(res => {
                const popularItems = res.data.filter(item => item.category === 'popular')
                setPopular(popularItems)
            })

    }, [mkAxios])

    return (
        <div className="my-20 ">
            <SectionTittle tittle={'FROM OUR MENU'} subTittle={'---Check it out---'}></SectionTittle>
            <div className="grid grid-cols-1 md:grid-cols-2  my-10 items-center justify-center gap-20 mx-auto">
                {
                    popular?.map(item => <DisplayMenu key={item._id} menu={item}></DisplayMenu>)
                }
            </div>

            <button className="btn border-0 border-[#1F2937] border-b-4 mx-auto flex">View All Menu</button>
        </div>
    );
};

export default Menu;