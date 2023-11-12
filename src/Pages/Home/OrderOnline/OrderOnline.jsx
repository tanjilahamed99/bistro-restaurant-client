import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import sl1 from '../../../assets/home/slide1.jpg'
import sl2 from '../../../assets/home/slide2.jpg'
import sl3 from '../../../assets/home/slide3.jpg'
import sl4 from '../../../assets/home/slide4.jpg'
import sl5 from '../../../assets/home/slide5.jpg'

const OrderOnline = () => {
    return (
        <div className="my-20 mx-auto">
            <SectionTittle tittle={'ORDER ONLINE'} subTittle={'---From 11:00am to 10:00pm---'}></SectionTittle>

            <div className="mx-auto flex">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=""
                >
                    <SwiperSlide>
                        <img className="w-[400px] h-[400px]" src={sl1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  className="w-[400px] h-[400px]" src={sl2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[400px] h-[400px]" src={sl3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[400px] h-[400px]" src={sl4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-[400px] h-[400px]" src={sl5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default OrderOnline;