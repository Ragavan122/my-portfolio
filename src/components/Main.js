import React from 'react';
import mypic from '../pictures/myPic.png';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Main() {

  useEffect(() => {
    Aos.init();

  }, []);
  return (
    <>

      <div className="about-content pt-[11vh]" id="">

        <div className="grid md:grid-cols-2 bg-black text-white" data-aos="fade-left" data-aos-duration="500">


          <div className="my-det px-2 py-6 flex  md:justify-end  sm:justify-center items-center">

            <h4 className=' text-3xl font-bold  ps-5'>Hi,It's <span class="mainC md:text-5xl ">Vijaya Ragavan</span>
            <h3 className='text-white text-2xl md:text-3xl pt-4 '> i'm a<span className='mainC  ps-5'>Front-End Developer </span></h3>

            </h4>             
          

          </div>

          <div className="my-image flex justify-center items-center" data-aos="fade-left" data-aos-duration="400">

            <img src={mypic} alt="" />

          </div>

        </div>
      </div>




    </>
  )
}

export default Main;