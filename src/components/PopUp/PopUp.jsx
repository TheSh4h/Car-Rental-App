import "./PopUp.css"

const PopUp = ({ toggleMenu }) => {
    return ( 
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="rounded-lg shadow-lg bg-white w-[900px] overflow-hidden">
                <div className="bg-black p-4 text-white flex justify-between items-center">
                    <h2 className="text-xl font-bold">COMPLETE RESERVATION</h2>
                    <button onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <form>
                        <div className="mb-4 flex justify-between">
                            <div>
                                <label className="label">First Name:</label> <br />
                                <input type="text" className="input" placeholder="Enter your first name" />
                            </div>
                            <div>
                                <label className="label">Last Name:</label> <br />
                                <input type="text" className="input" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="mb-4 flex justify-between">
                            <div>
                                <label className="label">Phone Number:</label> <br />
                                <input type="text" className="input" placeholder="Enter your phone number" />
                            </div>
                            <div>
                                <label className="label">Age:</label> <br />
                                <input type="number" className="input" placeholder="18" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="label">Email:</label> <br />
                            <input type="text" className="longInput" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="label">Address:</label> <br />
                            <input type="text" className="longInput" placeholder="Enter your street address" />
                        </div>

                        <div className="mb-4 flex justify-between">
                            <div>
                                <label className="label">City:</label> <br />
                                <input type="text" className="input" placeholder="Enter your city" />
                            </div>
                            <div>
                                <label className="label">Zip Code:</label> <br />
                                <input type="text" className="input" placeholder="Enter your zip code" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" className="label ml-2">Please send me latest news and updates</label>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-black text-white font-semibold p-2 rounded">Reserve Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
