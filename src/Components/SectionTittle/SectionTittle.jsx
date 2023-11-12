import PropTypes from 'prop-types';


const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div>
            <p className="text-[#D99904] font-medium text-lg ">{subTittle}</p>
            <h2 className=" text-[#151515] font-medium text-3xl">{tittle}</h2>
        </div>
    );
};

SectionTittle.propTypes = {
    tittle: PropTypes.any,
    subTittle: PropTypes.any
};

export default SectionTittle;

