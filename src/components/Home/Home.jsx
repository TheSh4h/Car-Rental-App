import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../Plan";
import Testimonials from "./Testimonials";

const Home = () => {
    return ( 
        <div className="container mx-auto">
            <Hero />
            <Booking />
            <Plan />
            <Testimonials />
        </div>
     );
}
 
export default Home;