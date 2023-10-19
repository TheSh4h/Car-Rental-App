import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../Plan";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <Booking />
            <Plan />
            <Banner />
            <Testimonials />
            <Footer />
        </div>
     );
}
 
export default Home;