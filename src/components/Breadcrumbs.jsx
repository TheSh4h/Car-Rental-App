import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;

            return (
                <div className="container mx-auto py-5">
                    <p>
                        <Link to='/' className="font-bold" >Home / </Link>
                        <Link to={currentLink} className="font-bold" >{crumb} /</Link>
                    </p>
                </div>
            )
        })
    return ( 
        <div>
            {crumbs}
        </div>
     );
}
 
export default Breadcrumbs;