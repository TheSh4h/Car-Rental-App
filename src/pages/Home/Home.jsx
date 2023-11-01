import Hero from "./Hero";
import Booking from "./Booking";
import Plan from "../../components/Plan";
import Banner from "./Banner";
import Testimonials from "../../components/Testimonials";
import FaqForm from "./FaqForm";
import ScrollToTopButton from "../../components/ScrollToTop";
import { useState } from "react";
import PopUp from "../../components/PopUp/PopUp";
import "../../App.css";
import RentalFleet from "../../components/RentalFleet";

const Home = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
        if(!menu) {
            document.body.classList.add('disable-scroll', menu);
        } 
        else {
            document.body.classList.remove('disable-scroll', menu);
        }
    }
    return ( 
        <div>
            <Hero />
            <Booking toggleMenu={toggleMenu} />
            {menu && (
                <PopUp toggleMenu={toggleMenu} />
            )}
            <Plan />
            <RentalFleet />
            <Banner />
            <Testimonials />
            <FaqForm />
            <ScrollToTopButton />
        </div>
     );
}
 
export default Home;