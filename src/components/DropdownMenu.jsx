import { useState } from "react";

const DropdownMenu = ({ Options, Type }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return ( 
        <>
            <select 
            value={selectedOption} 
            onChange={handleChange}
            className="w-full pl-5 h-10 m-1 ml-0 border border-black rounded-sm"
            >
                <option value="">{Type}</option>

                {Options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}

            </select>
        </>
     );
}
 
export default DropdownMenu;