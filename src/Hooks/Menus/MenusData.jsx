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
    return [offered, pizza, salad, dessert, soup]
};

export default useMenusData;