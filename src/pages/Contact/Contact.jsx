const Contact = () => {
    return ( 
        <div className="bg-white text-center">
            <div className=" container mx-auto flex justify-center">
                <div className="container mx-auto text-start w-56">
                    <h1 className="text-4xl font-bold">Need Additional information?</h1>
                    <p className="py-8 text-slate-500">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <ul >
                        <li className="font-bold">
                            <a href="tel:123456789" className="flex justify-center md:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span className="pl-1 font-bold">(123)-456-789</span>
                            </a>
                        </li>
                        <li className="py-5">
                            <a href="mailto:car@rental.com" className="flex justify-center md:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="pl-1 font-bold">car@rental.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="container mx-auto">
                    <input className="bg-slate-200" type="text" placeholder="eg. John Shamoe" />
                </div>
            </div>
        </div>
     );
}
 
export default Contact;