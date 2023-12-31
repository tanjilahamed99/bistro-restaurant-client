import Contact from "../Contact/Contact";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeParallax from "../HomeParallax/HomeParallax";
import OrderOnline from "../OrderOnline/OrderOnline";
import Menu from "./Menu/Menu";

const Home = () => {

    return (
        <div>
            <HomeBanner></HomeBanner>
            <OrderOnline></OrderOnline>
            <HomeParallax></HomeParallax>
            <Menu></Menu>
            <Contact></Contact>
        </div>
    );
};

export default Home;