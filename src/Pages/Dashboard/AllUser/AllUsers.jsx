import {  FaTrash, FaUsers } from "react-icons/fa";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import UseUser from "../../../Hooks/Users/UseUser";

const AllUsers = () => {

    const [data] = UseUser()

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
                                    data?.map((item,idx) => <tr key={item._id}>
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

export default AllUsers;