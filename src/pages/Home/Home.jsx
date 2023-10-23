import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../../components/Plan";
import Banner from "./Banner";
import Testimonials from "../../components/Testimonials";
import FAQ from "./Faq";
import ScrollToTopButton from "../../components/ScrollToTop";

const Home = () => {
    return ( 
        <div>
            <Hero />
            <Booking />
            <Plan />
            <Banner />
            <Testimonials />
            <FAQ />
            <ScrollToTopButton />
        </div>
     );
}
 
export default Home;