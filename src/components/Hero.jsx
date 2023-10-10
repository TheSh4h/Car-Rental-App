import audi from "../assets/rs3.png";

const Hero = () => {
    return ( 
        <div className="container md:flex md:justify-center md:mt-20 mt-9">

        <div className="text-xl text-center md:text-left">

            <h3 className="text-2xl mb-4">Plan your trip now</h3>
            <h1 className="text-5xl font-bold mb-4">Save big with our car rental</h1>
            <p className="text-slate-500 text-lg mb-4">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible <br /> pick-up options and much more.
            </p>

            <div className="flex items-center justify-center md:block">
            <button className="relative bg-black text-white rounded-md 
            h-14 w-44 flex items-center justify-center border border-black
            hover:bg-white hover:text-black transition delay-150
            shadow-lg shadow-slate-500 hover:shadow-none
            ">
                <span className="mr-1">Book Ride</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>                   
            </button>
            </div>

        </div>

        <img src={audi} className="md:translate-x-20 translate-x-5"></img>

    </div>
     );
}
 
export default Hero;