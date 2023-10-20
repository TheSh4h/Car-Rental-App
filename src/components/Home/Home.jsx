import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../Plan";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import FAQ from "./Faq";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <Booking />
            <Plan />
            <Banner />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
     );
}
 
export default Home;