import React, { useEffect } from 'react';
import calpic from '../pictures/projects/calculator.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Project() {

    useEffect(()=>{
        Aos.init();
    })
    return (

        <div className='project bg-black w-[100%] flex justify-center items-center flex-col   pt-[20vh]' id="project">

            <h1 className='pt-5 text-4xl txtC border-b border-4xl pb-4 border-slate-900'> Project</h1>

            <div className=" text-white pt-5">



                <div className="p-item " data-aos="fade-right" data-aos-duration="500">


                    <img src={calpic} alt="" className='' height="" width="210px" />
                    <h2 className='text-2xl mainC font-bold '>Calculator</h2>
                    <button className='bg-slate-800 m-3 p-3 text-xl  rounded-xl '> <a href="https://github.com/Ragavan122/Javascript/tree/main/Calculator">Read more...</a></button>

                </div>

                {/* <div className="p-item bg-zinc-900  rounded-xl flex flex-col items-center justify-center">


                        <img src={calpic} alt="" className=''height="20px"width="300px" />
                        <h2 className='text-2xl font-bold '>Calculator</h2>
                        <button className='bg-black m-3 p-3 rounded-2xl'>Read more...</button>

                    </div>

                    <div className="p-item  bg-zinc-900 rounded-xl flex flex-col items-center justify-center">


                        <img src={calpic} alt="" className=''height="20px"width="300px" />
                        <h2 className='text-2xl font-bold '>Calculator</h2>
                        <button className='bg-black m-3 p-3 rounded-2xl'>Read more...</button>

                    </div> */}


            </div>





        </div>

        
    )
}

export default Project;
