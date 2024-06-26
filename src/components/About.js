import mypic2 from '../pictures/myPic.png';
import mypic1 from '../pictures/ragavan.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
    useEffect(() => {
        Aos.init();

    }, []);
    return (

        <>



            <div className="about-content pt-[20vh]" id="about">


                <div className="head flex justify-center items-center" data-aos="fade-up" data-aos-duration="400">

                    <h1 className=" text-white text-4xl pt-5 border-b border-4xl pb-4  border-slate-900">About Me</h1>
                </div>



                <div className="grid md:grid-cols-2 bg-black text-white" data-aos="fade-up" data-aos-duration="500">


                    <div className="my-img pt-4 flex  justify-center items-center">

                        <img src={mypic1} alt=""className='w-[200px] sm:w-[400px] ' />

                    </div>

                    <div className="my-det px-2 py-6 ">

                        <h4 className='text-2xl font-bold flex flex-col gap-3 ps-5'>
                            Hello , I'm <span >  <h1 className='text-bold text-5xl mainC'>  Vijaya Ragavan </h1></span>
                            <h3>Aspiring <span className='text-orange-700'> React Developer</span></h3>
                        </h4>

                        <p className='abop pt-5 ps-5'>I graduated in 2021 with a degree in Computer Science, specializing in Web Development. During my studies, I developed a keen interest in front-end technologies, particularly React.js, due to its versatility and efficiency in creating dynamic user interfaces.</p>
                            <p className='abop pt-5 ps-5'>I have a solid foundation in HTML,CSS and Javascript ,with a focus on React.js . i enjoy leveraging React's
                                component bases architecture to build responsive and intractive web application.
                            </p>
                            {/* <p className='abop pt-5 ps-5'>I am eager to apply my skiils in a professional environment where i  can contribute to  innovative projects
                            and colabrate with talented teams.I am particilarly intrest in oppurtunities allow me to further develop
                            my expertise in React developent and gain hands on Experience in building scalable application. </p> */}

                            <p className='abop pt-5 ps-5'>I am actively in seeking oppurtunities to grow as a React developer and contribute to impactful
                                projects.Feel free to reach out via Vijayaragavansr2020.I look forward to
                                exploring potential collabrations and discussing how i can contribute to  your team.

                            </p>

                    </div>

                </div>
            </div>

        </>
    )
}

export default About;