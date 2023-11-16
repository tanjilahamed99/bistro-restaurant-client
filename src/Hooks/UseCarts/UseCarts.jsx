import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Axios/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UseCarts = () => {

    const axiosSecure = UseAxios()

    const { user } = useContext(AuthContext)

    // console.log(user)

    const { data: cart= [],refetch } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]

};

export default UseCarts;