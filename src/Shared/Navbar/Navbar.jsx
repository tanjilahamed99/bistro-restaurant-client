import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCarts from "../../Hooks/UseCarts/UseCarts";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const [cart] = UseCarts()

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const ulLink = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/menu"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                Our Menu
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                Our shop
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
                }
            >
                <button className="btn btn-sm">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length}</div>
                </button>
            </NavLink>
        </li>
        <li>
            {
                user ? <button onClick={handleLogOut} className="btn-outline text-white btn btn-sm">Logout</button> : <Link to={'/login'}><button>login</button></Link>
            }
        </li>
    </>

    return (
        <div className="navbar justify-between fixed z-10 container mx-auto bg-black bg-opacity-50 px-10 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm items-center text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLink
                        }
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="font-semibold text-lg">BISTRO BOSS</h2>
                    <h2 className="font-medium uppercase text-sm">Restaurant</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 font-semibold text-white">
                    {
                        ulLink
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;