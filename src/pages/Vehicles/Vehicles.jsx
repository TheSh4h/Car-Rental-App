import CarCard from "../../components/CarCard";
import CallBanner from "../../components/CallBanner"
import cars from "../../data/car";

const Vehicles = () => {
    
    return ( 
        <div className="">
            <div className="m-28 grid grid-cols-3 gap-8">
                {
                    cars.map((car) => {
                        return <CarCard car={car} />
                    })
                }
            </div>
            <CallBanner />
        </div>
     );
}
 
export default Vehicles;