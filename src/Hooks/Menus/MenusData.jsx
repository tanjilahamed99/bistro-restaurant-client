import { useEffect, useState } from "react";
import UseAxios from "../Axios/UseAxios";

const useMenusData = () => {

    const axiosSecure = UseAxios()
    const [menus, setMenus] = useState([])

    useEffect(() => {
        axiosSecure.get('/menu')
            .then(res => {
                setMenus(res.data)
            })
    }, [axiosSecure])

    const offered = menus?.filter(item => item.category === 'offered')
    const pizza = menus?.filter(item => item.category === 'pizza')
    const dessert = menus?.filter(item => item.category === 'dessert')
    const soup = menus?.filter(item => item.category === 'soup')
    const salad = menus?.filter(item => item.category === 'salad')
    const drinks = menus?.filter(item => item.category === 'drinks')
    return [offered, pizza, salad, dessert, soup,drinks,menus]
};

export default useMenusData;