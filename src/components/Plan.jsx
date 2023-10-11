import { NoCrash } from '@mui/icons-material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Plan = () => {
    return ( 
        <div className="container mx-auto text-center m-20">
            <div>
                <h3 className="text-2xl">Plan your trip now</h3>
                <h1 className="text-5xl font-bold">Quick & easy car rental</h1>
            </div>

            <div className='md:grid grid-cols-3 gap-10 my-20'>
                <div className="text-center">
                    <NoCrash fontSize='large'/>
                    <h2 className='font-bold text-2xl'>Select Cars</h2>
                    <p className='text-gray-600'>We offers a big range of vehicles for all<br />your driving needs. We have the perfect car to meet your needs</p>
                </div>

                <div className="text-center">
                    <SupportAgentIcon fontSize='large'/>
                    <h2 className='font-bold text-2xl'>Contact Operator</h2>
                    <p className='text-gray-600'>Our knowledgeable and friendly<br />operators are always ready to help with any questions or concerns</p>
                </div>

                <div className="text-center">
                    <div className='flex justify-center'>
                        <img width="40" height="40" src="https://img.icons8.com/ios/100/sedan.png" alt="sedan"/>
                    </div>
                    <h2 className='font-bold text-2xl'>Let's Drive</h2>
                    <p className='text-gray-600'>Whether you're hitting the open road,<br />we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
     );
}
 
export default Plan;