import CarCard from "../../components/CarCard";
import cars from "../../data/car";

const Vehicles = () => {
    
    return ( 
        <div className="flex justify-center items-center text-center">
            <div className="container mx-28 py-20 grid grid-cols-3 gap-1">
                {
                    cars.map((car) => {
                        return <CarCard car={car} />
                    })
                }
            </div>
        </div>
     );
}
 
export default Vehicles;