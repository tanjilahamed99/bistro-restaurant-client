import PropTypes from 'prop-types';

const SectionBanner = ({ img, title, subTitle }) => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center ">
                <div className="bg-opacity-40 bg-black px-96 py-40 text-white rounded-lg">
                    <h2 className='text-3xl font-semibold mb-3'>{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

SectionBanner.propTypes = {

    img: PropTypes.any,
    subTitle: PropTypes.any,
    title: PropTypes.any

};

export default SectionBanner;