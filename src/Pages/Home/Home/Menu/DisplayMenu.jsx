import PropTypes from 'prop-types';

const DisplayMenu = ({ menu }) => {

    const { name, recipe, image, price } = menu

    return (
        <div className=" flex justify-center ">
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='' src={image}
                    alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="text-[#151515] text-lg text-semibold">{name}</h2>
                <p className='text-[#737373] '>{recipe}</p>
            </div>
            <div>
                <h2 className='text-lg text-[#BB8506]'>${price}</h2>
            </div>
        </div>
    );
};

DisplayMenu.propTypes = {
    menu: PropTypes.object
};

export default DisplayMenu;