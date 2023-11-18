import { FaPen, FaTrash } from "react-icons/fa";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenusData from "../../../Hooks/Menus/MenusData";
import UseAxios from "../../../Hooks/Axios/UseAxios";
import Swal from "sweetalert2";
import MenusTans from "../../../Hooks/MenusTans/MenusTans";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [, , , , , , menus] = useMenusData()
    const axiosSecure = UseAxios()
    const [, refetch] = MenusTans()

    const handleDelete = id => {
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
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <div className="my-10">
            <SectionTittle subTittle={"---Hurry Up!---"} tittle={"MANAGE ALL ITEMS"}></SectionTittle>

            <div>
                <h2 className="text-2xl font-semibold my-5">Total User : {menus?.length}</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#D1A054] text-white">
                                    <th></th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    menus?.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-20 rounded-full">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{item.name}</span>
                                        </td>
                                        <td>
                                            <h2>${item?.price}</h2>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updateMenu/${item._id}`}>
                                                <button className="btn btn-ghost btn-xs">
                                                    <FaPen className="text-xl"></FaPen>
                                                </button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
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

export default ManageItems;