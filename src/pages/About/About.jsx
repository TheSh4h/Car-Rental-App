import sus from '../../assets/sus.jpg';
import CallBanner from '../../components/CallBanner/CallBanner';
import Plan from '../../components/Plan'

const About = () => {
    return ( 
        <div className='bg-white'>
            <div className="lg:container lg:mx-auto p-20 text-center lg:flex justify-center items-center">
                <img src={sus} alt="image" className='mx-auto' />
                <div className=' lg:container md:mx-auto md:w-[500px] lg:text-start text-center'>
                    <h3 className='text-2xl font-light'>About Company</h3>
                    <h1 className='text-5xl font-bold my-4'>You start the engine and your adventure begins</h1>
                    <p className='text-slate-500 py-5'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                    
                    <div className='flex flex-col md:flex-row items-center lg:justify-between md:justify-evenly'>
                        <div>
                            <img width="96" height="96" src="https://img.icons8.com/color/96/suv.png" alt="suv"/>
                            <div className='flex items-center'>
                                <h1 className='text-5xl font-bold my-4'>20</h1>
                                <p className='text-slate-500 text-md ml-1'> Car <br /> Types</p>
                            </div>
                        </div>

                        <div>
                        <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/building.png" alt="building"/>
                            <div className='flex items-center'>
                                <h1 className='text-5xl font-bold my-4'>85</h1>
                                <p className='text-slate-500 text-md ml-1'> Rental <br /> Outlets</p>
                            </div>
                        </div>

                        <div>
                        <img width="100" height="100" src="https://img.icons8.com/stickers/100/car-service.png" alt="car-service"/>
                            <div className='flex items-center'>
                                <h1 className='text-5xl font-bold my-4'>69</h1>
                                <p className='text-slate-500 text-md ml-1'> Repair <br /> Shops</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Plan />
            <CallBanner />
        </div>
     );
}
 
export default About;