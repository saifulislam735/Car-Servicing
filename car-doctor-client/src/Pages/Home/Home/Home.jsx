import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import OurLocation from "../OurLocation/OurLocation";
import PopularProducts from "../PopularProducts/PopularProducts";
import Service from "../Service/Service";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className=" space-y-24">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <OurLocation></OurLocation>
            <PopularProducts></PopularProducts>
            <Team></Team>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;