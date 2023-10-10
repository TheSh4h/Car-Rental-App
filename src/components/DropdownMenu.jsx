import { useState } from "react";

const DropdownMenu = ({ Options, Type }) => {
    const [selectedCar, setSelectedCar] = useState('')

    const handleChange = (e) => {
        setSelectedCar(e.target.value);
    }

    return ( 
        <>
            <select 
            value={selectedCar} 
            onChange={handleChange}
            className="w-full pl-5 border border-black rounded-sm"
            >
                <option value="">{Type}</option>

                {Options.map((car, index) => (
                    <option key={index} value={car}>
                        {car}
                    </option>
                ))}

            </select>
        </>
     );
}
 
export default DropdownMenu;