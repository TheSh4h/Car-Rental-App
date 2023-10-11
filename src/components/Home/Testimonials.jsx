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
            <div className="w-96 p-5 flex justify-center bg-slate-300">
                <p className="w-60 font-semibold text-lg">
                    "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                </p>
            </div>
        </div>
     );
}
 
export default Testimonials;