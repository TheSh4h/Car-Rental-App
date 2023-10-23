import { Link } from "react-router-dom";

const List = () => {
    return ( 
        <>
          <li>
            <Link to="/" className="text-black hover:underline">Home</Link>
          </li>
          <li>
            <Link to="about" className="text-black hover:underline">About</Link>
          </li>
          <li>
            <Link to="vehicles" className="text-black hover:underline">Vehicles</Link>
          </li>
          <li>
            <Link to="testimonials" className="text-black hover:underline">Testimonials</Link>
          </li>
          <li>
            <Link to="contact" className="text-black hover:underline">Contact</Link>
          </li>
        </>
     );
}
 
export default List;