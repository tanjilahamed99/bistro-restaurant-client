import PropTypes from 'prop-types';

const DisplayShopItems = ({ data }) => {
    const { image, recipe, price,name } = data
    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute right-9 rounded-lg  top-5 bg-black text-white p-2' >${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn  flex mx-auto border-l-0 text-[#BB8506] border-[#BB8506] border-r-0 border-t-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

DisplayShopItems.propTypes = {
    data: PropTypes.object
};

export default DisplayShopItems;