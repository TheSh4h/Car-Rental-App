import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center">
          <img width="60" height="60" src="https://img.icons8.com/quill/100/car-rental.png" alt="car-rental"/>
          <h1 className="font-semibold text-2xl">
            <span className="text-3xl font-extrabold">CAR</span> <br />
            Rental
          </h1>
        </div>

        <ul className="space-x-4 hidden md:flex">
          <li>
            <a href="#" className="text-black hover:underline">Home</a>
          </li>
          <li>
            <a href="about" className="text-black hover:underline">About</a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline">Cars</a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline">Testimonials</a>
          </li>
          <li>
            <a href="#" className="text-black hover:underline">Contact</a>
          </li>
        </ul>

        <div className="hidden md:block">
            <button className="mr-4">Sign In</button>
            <button 
            className="bg-black text-white w-[100px] h-[50px] rounded-lg 
            hover:bg-white hover:text-black transition delay-75 
            hover:border hover:border-black">
              Register
            </button>
        </div>

        <div className="md:hidden flex place-items-center hover:bg-slate-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isOpen && (
          <div className={`md:hidden fixed inset-0 bg-white z-10 text-center`}>
          <div className="flex justify-end m-5">
            <button onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
         <ul className="p-4 space-y-4">
           <li>
             <a href="#" className="text-black hover:underline">
               Home
             </a>
           </li>
           <li>
             <a href="#" className="text-black hover:underline">
               Cars
             </a>
           </li>
           <li>
             <a href="#" className="text-black hover:underline">
               Pricing
             </a>
           </li>
           <li>
             <a href="#" className="text-black hover:underline">
               Contact
             </a>
           </li>
         </ul>

         <div className="p-4">
           <button className="mr-4">Sign In</button>
           <button className="bg-black text-white w-[100px] h-[50px] rounded-lg hover:bg-white hover:text-black transition delay-75 hover:border hover:border-black">
             Register
           </button>
         </div>
       </div>
      )}
    </nav>
  );
};

export default Navbar;
