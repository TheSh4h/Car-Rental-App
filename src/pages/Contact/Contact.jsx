import CallBanner from "../../components/CallBanner";

const Contact = () => {
    return ( 
        <div className="bg-white text-center">
            <div className="container mx-auto px-10 py-28 lg:flex justify-between">
                <div className="text-start lg:w-96">
                    <h1 className="text-5xl font-bold">Need additional information?</h1>
                    <p className="py-8 text-slate-500">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                    <ul >
                        <li className="font-bold">
                            <a href="tel:123456789" className="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                <span className="pl-1 font-bold">(123)-456-789</span>
                            </a>
                        </li>
                        <li className="py-5">
                            <a href="mailto:car@rental.com" className="flex justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <span className="pl-1 font-bold">car@rental.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-start md:w-[600px]">
                    <label htmlFor="name" className="font-semibold">Full Name:</label> <br />
                    <input id="name" className="bg-slate-200 w-full p-3 my-3 shadow-lg rounded-sm" type="text" placeholder="eg. John Shamoe" />
                    <br />
                    <label htmlFor="email" className="font-semibold">Email:</label> <br />
                    <input id="email" className="bg-slate-200 w-full p-3 my-3 shadow-lg rounded-sm" type="text" placeholder="yourname@gmail.com" />
                    <br />
                    <label htmlFor="text" className="font-semibold">Tell Us About it:</label> <br />
                    <textarea id="text" cols="30" rows="10" className="bg-slate-200 w-full p-3 my-3 shadow-lg rounded-sm" placeholder="Write here..."></textarea>
                    <button className="w-full bg-black text-white flex justify-center py-5 my-3 rounded
                    shadow-lg hover:shadow-2xl transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>
                        <span className="font-bold pl-1">Send Message</span>
                    </button>
                </div>
            </div>
            <CallBanner />
        </div>
     );
}
 
export default Contact;