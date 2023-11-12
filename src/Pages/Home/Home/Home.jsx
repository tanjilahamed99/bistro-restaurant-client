import HomeBanner from "../HomeBanner/HomeBanner";
import HomeParallax from "../HomeParallax/HomeParallax";
import OrderOnline from "../OrderOnline/OrderOnline";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <HomeParallax></HomeParallax>
        </div>
    );
};

export default Home;