import CarCard from "../../components/CarCard";
import CallBanner from "../../components/CallBanner/CallBanner"
import cars from "../../data/car";

const Vehicles = () => {
    
    return ( 
        <div> 
            <div className="flex flex-col justify-center items-center my-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        cars.map((car) => {
                            return <CarCard car={car} />
                        })
                    }
                </div>
            </div>
            <CallBanner />
        </div>
     );
}
 
export default Vehicles;