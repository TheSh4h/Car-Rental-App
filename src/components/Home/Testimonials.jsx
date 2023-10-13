import johnny from "../../assets/johnny.jpg"
const Testimonials = () => {
    return ( 
        <div className="text-center flex flex-col items-center">
            <div className="flex flex-col items-center p-10">
                <h2 className="text-2xl">Reviewed by People</h2>
                <h1 className="text-5xl font-bold">Client's Testimonials</h1>
                <div className="md:w-[40rem]">
                    <p className="text-slate-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>
            </div>
            <div className="md:grid grid-cols-2 gap-4">
                <div className="w-96 md:w-[20] lg:w-[30rem] py-10 flex flex-col items-center bg-white shadow-2xl">
                    <p className="w-2/3 font-semibold text-lg">
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                    </p>
                    <div className="flex items-center mt-5">
                        <div className="w-20 rounded-full overflow-hidden" >
                            <img src={johnny} />
                        </div>
                        <div className="flex flex-col mx-5 items-start">
                            <h2 className="font-bold text-lg">Johnny Sins</h2>
                            <p className="">Jack of all Trades</p>
                        </div>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/quote-right.png" alt="quote-right"/>
                    </div>
                </div>
                <div className="w-96 md:w-[20] lg:w-[30rem] py-10 flex flex-col items-center bg-white shadow-2xl">
                    <p className="w-2/3 font-semibold text-lg">
                    "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
                    </p>
                    <div className="flex items-center mt-5">
                        <div className="w-20 rounded-full overflow-hidden" >
                            <img src={johnny} />
                        </div>
                        <div className="flex flex-col mx-5 items-start">
                            <h2 className="font-bold text-lg">Johnny Sins</h2>
                            <p className="">Jack of all Trades</p>
                        </div>
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/quote-right.png" alt="quote-right"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;