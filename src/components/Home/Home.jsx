import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../Plan";

const Home = () => {
    return ( 
        <div className="container mx-auto">
            <Hero />
            <Booking />
            <Plan />
        </div>
     );
}
 
export default Home;