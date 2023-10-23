import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return ( 
        <div>
            <nav>
                <Navbar />
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
     );
}
 
export default RootLayout;