import { FaTrash, FaUsers } from "react-icons/fa";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useMenusData from "../../../Hooks/Menus/MenusData";

const ManageItems = () => {

    const [, , , , , , menus] = useMenusData()

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
                                            <FaUsers className="text-xl"></FaUsers>
                                        </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
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