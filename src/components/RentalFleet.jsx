import car from "../data/car";

const RentalFleet = () => {
    return ( 
        <div className="text-center py-20">
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Vehicle Models</h3>
                <h1 className="text-4xl font-bold py-3">Our Rental Fleet</h1>
                <p className="w-[500px] text-gray-400">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>

            <div className="container mx-auto">
                {
                    car.map((car) => {
                        return (
                            <div className="py-1">
                                <button className="bg-gray-300 w-52 p-3 font-bold text-xl text-start pl-5">{car.name}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default RentalFleet;