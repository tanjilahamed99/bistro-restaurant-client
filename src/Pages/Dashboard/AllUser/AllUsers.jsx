import { FaTrash, FaUsers } from "react-icons/fa";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import UseUser from "../../../Hooks/Users/UseUser";
import Swal from "sweetalert2";
import UseAxios from "../../../Hooks/Axios/UseAxios";

const AllUsers = () => {
    const [data, refetch] = UseUser()
    const axiosSecure = UseAxios()

    const handleDeleteUser = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    const handleAdmin = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.put(`/user/${id}`)
                    .then(res => {
                        // if (res.data.deletedCount > 0) {
                        //     refetch()
                        //     Swal.fire({
                        //         title: "Deleted!",
                        //         text: "User has been deleted.",
                        //         icon: "success"
                        //     });
                        // }
                        console.log(res.data)
                    })
            }
        });

    }

    return (
        <div className="mt-10">
            <SectionTittle subTittle={'---How many??---'} tittle={'MANAGE ALL USERS'}></SectionTittle>

            <div>
                <h2 className="text-2xl font-semibold my-5">Total User : {data?.length}</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    data?.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <h2>{item.name}</h2>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{item.email}</span>
                                        </td>
                                        <td>
                                            <FaUsers onClick={() => handleAdmin(item._id)} className="text-xl"></FaUsers>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteUser(item._id)} className="btn btn-ghost btn-xs">
                                                <FaTrash className="text-xl"></FaTrash>
                                            </button>
                                        </th>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;