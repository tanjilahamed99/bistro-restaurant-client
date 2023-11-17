import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Axios/UseAxios";

const UseUser = () => {

    const axiosSecure = UseAxios()

    const { data,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        }
    })

    return [data,refetch]
};

export default UseUser;