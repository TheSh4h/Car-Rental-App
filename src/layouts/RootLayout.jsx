import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
    return ( 
        <div>
            <nav>
                <Navbar />
            </nav>

            <Breadcrumbs />

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