import "./Booking.css";
import DropdownMenu from "./DropdownMenu";

const Booking = () => {

    const carOptions = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
    const locationOptions = ['Your Mum\'s house', 'Your Sister\'s basement', 'That basement where I banged yo mum', 'yo mum\'s ass'];

    return (
        <div className="container mx-auto m-10 p-10 justify-start
        bg-slate-100 shadow-2xl
        ">
            <h1 className="text-2xl font-bold mb-5">Book a Car</h1>
            <div className="flex items-center justify-between">

                <div className="w-80">
                    <div className="head-div">
                        <img width="30" height="30" src="https://img.icons8.com/badges/48/tesla-model-3.png" alt="tesla-model-3"/>
                        <h2 className="head">Select your car type</h2>
                    </div>
                    <DropdownMenu 
                    Options={carOptions}
                    Type={"Select a Car"}
                    />
                </div>

                <div className="w-80">   
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

                <div className="w-80">
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
            </div>
        </div>
    );
}
 
export default Book;