const Footer = () => {
    return ( 
        <div className="bg-white py-20 mt-20 text-start flex justify-evenly">
            <ul>
                <li className="text-2xl"> 
                    <span className="font-bold">CAR</span> Rental
                </li>
                <li className="text-[#706f7b] w-72">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
                <li>
                    <a href="tel:123456789" className="flex justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="pl-1">(123)-456-789</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:car@rental.com" className="flex justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="pl-1">car@rental.com</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li className="font-bold text-2xl">COMPANY</li>
                <li>
                    <a href="#" className="font-semibold"> Careers </a>
                </li>
                <li>
                    <a href="#" className="font-semibold"> Mobile </a>
                </li>
                <li>
                    <a href="#" className="font-semibold"> Blog </a>
                </li>
                <li>
                    <a href="#" className="font-semibold"> How We Work </a>
                </li>
            </ul>

            <ul>
                <li className="font-bold text-2xl"> WORKING HOURS </li>
                <li className="font-semibold"> Mon - Fri: 9:00AM - 9:00PM</li>
                <li className="font-semibold">Sat: 9:00AM - 19:00PM</li>
                <li className="font-semibold">Sun: Closed</li>
            </ul>

            <ul>
                <li className="font-bold text-2xl"> SUBSCRIPTION </li>
                <li className="font-semibold w-56">Subscribe to out email list for latest news and updates</li>
                <li>
                    <input type="text" className="bg-gray-200 h-10 w-60 outline-none text-center mt-2"
                        placeholder="Enter Email Address"
                    />
                </li>
                <li>
                    <button 
                     className="bg-black text-white font-semibold h-10 w-60 outline-none 
                     text-center hover:shadow-2xl mt-2"
                    >
                        Submit
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default Footer;