import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as  yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object().shape({
    name: yup.string('enter the valid name').required('required field'),
    email: yup.string().email().required('required field'),
    phoneNo: yup.number("enter valid phone no").min(10, 'min10').required('phne no required'),
    subject: yup.string(),
    msg: yup.string()

});



function Contact() {

    useEffect(() => {
        Aos.init();

    }, []);


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    console.log(errors);
    return (
        <div className='contact pt-[20vh]' id="contact">




            <div className="head flex justify-center items-center">

                <h1 className=" text-white text-4xl pt-5 border-b border-4xl pb-4  border-slate-900">Reach Us</h1>
            </div>
            <form method="post" action="https://getform.io/f/zazkomnb" onSubmit={handleSubmit(() => {

                alert('Thank You!!!' + 'Your form was submitted successfully');

            })}>

                <div className="from  grid gap-5 md:grid-cols-2 text-white mt-5 p-10">

                    <div className='boxx ' data-aos="fade-right" data-aos-duration="400">
                        <label className='labs'>Name</label>
                        <input type="text" placeholder='Your Good Name' className='inps' {...register('name')} />
                        <h4 className='ferr'>{errors?.name?.message}</h4>

                    </div>

                    <div className='boxx' data-aos="fade-left" data-aos-duration="400">
                        <label className='labs' >Email</label>
                        <input type="text" placeholder='name@email' className='inps' {...register('email')} />
                        <h4 className='ferr'>{errors?.email?.message}</h4>

                    </div>

                    <div className='boxx' data-aos="fade-right" data-aos-duration="600">
                        <label className='labs'>Phone No</label>
                        <input type="text" placeholder='Your Phone No' className='inps' {...register('phoneNo')} />
                        <h4 className='ferr'>{errors?.phoneNo?.message}</h4>


                    </div>

                    <div className='boxx' data-aos="fade-left" data-aos-duration="600">
                        <label className='labs' >Subject</label>
                        <input type="text" placeholder='Title of Message' className='inps'{...register('subject')} />
                        <h4 className='ferr'>{errors?.subject?.message}</h4>

                    </div>

                    <div className='boxx md:col-span-2' data-aos="fade-right" data-aos-duration="700">
                        <label className='labs'>Message </label>
                        <textarea name="" id="" placeholder="Enter Your Message here" className='inps h-44'{...register('msg')} />
                        <h4 className='ferr'>{errors?.msg?.message}</h4>

                    </div>
                    <div className='boxx txtC flex items-center justify-center py-5  md:col-span-2' data-aos="fade-left" data-aos-duration="700">
                        <button className='sbtn' type='submit'> Send Message</button>

                    </div>
                </div>
            </form>




        </div >
    )
}

export default Contact;