import { useQuery } from "@tanstack/react-query";
import UsePublicAxios from "../PublicAxios/UsePublicAxios";

const MenusTans = () => {

    const axiosPublic = UsePublicAxios()

    const { data: menu = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosPublic('/menu')
            return res.data
        }
    })



    return [menu, refetch]
};

export default MenusTans;