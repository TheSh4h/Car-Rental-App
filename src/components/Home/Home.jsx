import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../Plan";
import Banner from "./Banner";
import Testimonials from "./Testimonials";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <Booking />
            <Plan />
            <Banner />
            <Testimonials />
        </div>
     );
}
 
export default Home;