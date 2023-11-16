import PropTypes from 'prop-types';
import UseAxios from '../../Hooks/Axios/UseAxios';
import Swal from 'sweetalert2';
import UseCarts from '../../Hooks/UseCarts/UseCarts';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const DisplayShopItems = ({ data }) => {
    const { image, recipe, price, name, _id } = data
    const { user } = useContext(AuthContext)

    const axiosSecure = UseAxios()
    const [, refetch] = UseCarts()

    const handleAddToCart = () => {


        const cartData = {
            image, recipe, price, name, id: _id, email: user.email
        }

        axiosSecure.post('/carts', cartData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your product  has been saved in cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })

    }

    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-9 rounded-lg  top-5 bg-black text-white p-2' >${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn  flex mx-auto border-l-0 text-[#BB8506] border-[#BB8506] border-r-0 border-t-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

DisplayShopItems.propTypes = {
    data: PropTypes.object
};

export default DisplayShopItems;