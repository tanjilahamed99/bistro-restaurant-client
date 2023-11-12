import PropTypes from 'prop-types';


const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className='text-center'>
            <p className="text-[#D99904] font-medium text-lg ">{subTittle}</p>
            <h2 className=" text-[#151515] font-medium text-3xl px-3 border-y-4 w-fit mx-auto py-4 my-4">{tittle}</h2>
        </div>
    );
};

SectionTittle.propTypes = {
    tittle: PropTypes.any,
    subTittle: PropTypes.any
};

export default SectionTittle;

