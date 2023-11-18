import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAxios from "../Axios/UseAxios";

const UseAdmin = () => {
    const axiosSecure = UseAxios()
    const { user} = useContext(AuthContext)
    const { data:isAdmin,refetch } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure(`dashboard/admin/${user?.email}`)
            return res.data.isAdmin
        }
    })


return [isAdmin,refetch] 

}

export default UseAdmin;