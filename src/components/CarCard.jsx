
const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-64 border-slate-500 border-[1px]">
      <img src={"/image/rs3.png"} alt={car.name} className="w-full h-64 object-fill object-center" />
      <div className="px-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">{car.name}</h2>
          <p className="text-lg text-gray-600">${car.pricePerDay} per day</p>
        </div>
      </div>
        <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 focus:outline-none">
          Book Now
        </button>
    </div>
  );
};

export default CarCard;
