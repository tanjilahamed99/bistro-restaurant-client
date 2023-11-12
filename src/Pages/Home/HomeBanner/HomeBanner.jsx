import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import bn1 from '../../../assets/home/01.jpg'
import bn2 from '../../../assets/home/02.jpg'
import bn3 from '../../../assets/home/03.png'
import bn4 from '../../../assets/home/04.jpg'
import bn5 from '../../../assets/home/05.png'

const HomeBanner = () => {
    return (
        <Carousel>
            <div>
                <img src={bn1} />
            </div>
            <div>
                <img src={bn2} />
            </div>
            <div>
                <img src={bn3} />
            </div>
            <div>
                <img src={bn4} />
            </div>
            <div>
                <img src={bn5} />
            </div>
        </Carousel>
    )
};

export default HomeBanner;