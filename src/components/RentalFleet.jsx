import car from "../data/car";
import { useState } from "react";

const RentalFleet = () => {

    const [selectedCar, setSelectedCar] = useState(car[0]);
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (value, index) => {
        setSelectedCar(value)
        setActiveIndex(index)
    }

    return ( 
        <div className="text-center py-20">
            <div className="flex flex-col items-center">
                <h3 className="text-2xl">Vehicle Models</h3>
                <h1 className="text-4xl font-bold py-3">Our Rental Fleet</h1>
                <p className="md:w-[500px] text-gray-400">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>

            <div className="container mx-auto flex lg:flex-row flex-col 
            lg:justify-between justify-center lg:items-start items-center">
                <div>
                    {
                        car.map((carItem, index) => {
                            return (
                                <div className={`my-1 ${activeIndex == index ? 'bg-black text-white' : 'bg-gray-200'}`}>
                                    <button 
                                    className={`w-52 p-3 font-bold text-xl text-start pl-5
                                    `}
                                    onClick={() => handleClick(carItem, index)}
                                    >
                                        {carItem.name}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className="md:h-96 h-70 flex justify-center overflow-hidden">                 
                    <img src={`/image/nobg/${selectedCar.image}-nobg.png`} />
                </div>

                <div>
                    <div className="bg-black text-white text-2xl px-5 py-3">
                        <span className="font-bold">$45</span> / rent per day
                    </div>
                    <div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Model</span>
                            <span>{selectedCar.name}</span>
                        </div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Mark</span>
                            <span>{selectedCar.brand}</span>
                        </div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Year</span>
                            <span>RS3</span>
                        </div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Door</span>
                            <span>RS3</span>
                        </div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Transmission</span>
                            <span>{selectedCar.transmission}</span>
                        </div>
                        <div className="grid grid-cols-2 py-2 border-2 border-t-0 border-gray-400">
                            <span className="border-r-2 border-r-gray-500">Fuel</span>
                            <span>{selectedCar.fuel}</span>
                        </div>
                    </div>
                    <button 
                    className="bg-black text-white font-bold text-xl 
                    px-12 py-3 mt-3 hover:opacity-80 transition drop-shadow-2xl">
                        RESERVE NOW
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default RentalFleet;