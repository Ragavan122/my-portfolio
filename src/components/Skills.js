import React, { useEffect } from 'react';
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { RiJavaFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { IoLogoWordpress } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { SiCoreldraw } from "react-icons/si";
import Aos from 'aos';
import 'aos/dist/aos.css';



function Skills() {

  useEffect(()=>{
    Aos.init();

  },[]);
  return (
    <div className='skills realbg w-[100%] flex justify-center items-center flex-col pt-[20vh]'id="skills">


    

      <h1 className='pt-5 text-4xl txtC border-b border-4xl pb-4 border-slate-900' data-aos="fade-up" data-aos-duration="200">
        Technical Skills</h1>

    

      <div className="container mt-5 grid gap-5  md:grid-cols-5 sm:grid-cols-2 px-3 py-4 ">


        <div className="box "data-aos="fade-right" data-aos-duration="600">
 
          <IoLogoHtml5 className='icons' />

          <h4 className='iconh'>HTML</h4>

    
        </div>

        <div className="box "data-aos="fade-right" data-aos-duration="700">

          <IoLogoCss3 className='icons' />

          <h4 className='iconh'>CSS</h4>

  


        </div>
        <div className="box"data-aos="fade-right" data-aos-duration="800">

          <TbBrandJavascript className='icons' />

          <h4 className='iconh'>Javascript</h4>



        </div>
        <div className="box"data-aos="fade-right" data-aos-duration="900">

          <RiBootstrapFill className='icons' />

          <h4 className='iconh'>Bootstrap</h4>

 


        </div>
        <div className="box"data-aos="fade-right" data-aos-duration="1000">

          <BiLogoTailwindCss  className='icons' />

          <h4 className='iconh'>Tailwind</h4>



        </div>
        <div className="box"data-aos="fade-left" data-aos-duration="1100">

          <IoLogoReact className='icons' />

          <h4 className='iconh'>React</h4>

          


        </div>
        <div className="box"data-aos="fade-left" data-aos-duration="1200">

          <SiPhp className='icons' />

          <h4 className='iconh'>PHP</h4>

        </div>

        <div className="box "data-aos="fade-left" data-aos-duration="1400">

          <SiMysql className='icons' />

          <h4 className='iconh'>MySQL</h4>

          


        </div>
        <div className="box "data-aos="fade-left" data-aos-duration="1500">

          <IoLogoWordpress className='icons' />

          <h4 className='iconh'>WordPress</h4>

        </div>

        <div className="box "data-aos="fade-left" data-aos-duration="1700">

          <IoLogoGithub className='icons' />

          <h4 className='iconh'>Git</h4>


        </div>





      </div>



    </div>
  )
}

export default Skills;