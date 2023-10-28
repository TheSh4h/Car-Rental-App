import CarCard from "../../components/CarCard";
import cars from "../../data/car";

const Vehicles = () => {
    
    return ( 
        <div>
            <div>
                <CarCard car={cars} />
            </div>
        </div>
     );
}
 
export default Vehicles;