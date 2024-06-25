import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        Aos.init();

    }, []);
    return (
        <div className='contact pt-[20vh]' id="contact">


            <div className="s">

                <div className="head flex justify-center items-center">

                    <h1 className=" text-white text-4xl pt-5 border-b border-4xl pb-4  border-slate-900">Reach Us</h1>
                </div>

                <div className="from  grid gap-5 md:grid-cols-2 text-white mt-5 p-10">

                    <div className='boxx ' data-aos="fade-right" data-aos-duration="400">
                        <label className='labs'>Name</label>
                        <input type="text" placeholder='Your Good Name' className='inps' />
                        <h4 className='ferr'> </h4>
                    </div>

                    <div className='boxx' data-aos="fade-left" data-aos-duration="400">
                        <label className='labs' >Email</label>
                        <input type="text" placeholder='name@email' className='inps' />
                        <h4 className='ferr'> </h4>
                    </div>

                    <div className='boxx' data-aos="fade-right" data-aos-duration="600">
                        <label className='labs'>Phone No</label>
                        <input type="text" placeholder='Your Phone No' className='inps' />
                        <h4 className='ferr'> </h4>

                    </div>

                    <div className='boxx' data-aos="fade-left" data-aos-duration="600">
                        <label className='labs' >Subject</label>
                        <input type="text" placeholder='Title of Message' className='inps' />

                    </div>

                    <div className='boxx md:col-span-2' data-aos="fade-right" data-aos-duration="700">
                        <label className='labs'>Message </label>
                        <textarea name="" id="" placeholder="Enter Your Message here" className='inps h-44' />

                    </div>
                    <div className='boxx txtC flex items-center justify-center py-5  md:col-span-2'data-aos="fade-left" data-aos-duration="700">
                    <button className='sbtn'> Send Message</button>
                </div>

                </div>
                
 






            </div>


        </div>
    )
}

export default Contact;