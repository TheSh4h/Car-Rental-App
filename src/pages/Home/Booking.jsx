import ReactDatePicker from "react-datepicker";
import "./Booking.css";
import DropdownMenu from "./DropdownMenu";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Booking = ({ toggleMenu }) => {

    const [startDate, setStartDate] = useState('');
    const [dropDate, setDropDate] = useState('');

    const carOptions = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
    const locationOptions = ['Your Mum\'s house', 'Your Sister\'s basement', 'That basement where I banged yo mum', 'yo mum\'s ass'];

    return (
        <div className="container mx-auto m-10 p-10
        bg-white shadow-2xl
        ">
            <h1 className="text-2xl font-bold mb-5">Book a Car</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
                <div>
                    <div className="head-div">
                        <img width="30" height="30" src="https://img.icons8.com/badges/48/tesla-model-3.png" alt="tesla-model-3"/>
                        <h2 className="head">Select your car type</h2>
                    </div>
                    <DropdownMenu 
                    Options={carOptions}
                    Type={"Select a Car"}
                    />
                </div>

                <div>   
                    <div className="head-div">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <h2 className="head">Pick Up</h2>
                    </div>
                    <DropdownMenu Options={locationOptions}
                    Type={"Select pick up location"}
                    />
                </div>

                <div>
                    <div className="head-div">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <h2 className="head">Drop-off</h2>
                    </div>
                    <DropdownMenu Options={locationOptions}
                    Type={"Select drop off location"}
                    />
                </div>

                <div>
                    <div className="head-div">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <h2 className="head">Pick Up</h2>
                    </div>
                    <ReactDatePicker 
                    className="lg:w-96 md:w-64 w-80 m-1 ml-0 bg-slate-200 outline-none outline-black"
                    onChange={(date) =>{ setStartDate(date)}}
                    selected={startDate}
                    placeholderText="mm/dd/yy"
                    />
                </div>

                <div>
                    <div className="head-div">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <h2 className="head">Drop-off</h2>
                    </div>
                    <ReactDatePicker 
                    className="lg:w-96 md:w-64 w-80 m-1 ml-0 bg-slate-200 outline-none outline-black"
                    onChange={(date) =>{ setDropDate(date)}}
                    selected={dropDate}
                    placeholderText="mm/dd/yy"
                    />
                </div>

                <div className="w-full h-10 md:relative md:top-7">
                    <button 
                    className="w-full h-full bg-black text-white rounded-md
                    shadow-lg
                    hover:bg-white hover:text-black border border-black
                    transition ease-in-out
                    "
                    onClick={toggleMenu}
                    >Search</button>
                </div>
            </div>

        </div>
    );
}
 
export default Booking;