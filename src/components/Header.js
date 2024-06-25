import React from 'react'
import { SiJirasoftware } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Header() {

    const [nav, setNav] = useState(false);

    function changeNav() {
        setNav(!nav);
    }

    return (
        <>

            <div className="header box ">

                <div className='nav flex justify-between  items-center py-3 w-[100%] head h-[20vh] txtC fixed top-0 left-0 '>

                    <div className="secColor flex justify-center items-center">
                        <SiJirasoftware className='text-7xl ps-4 mainC' />
                        <span className='ps-2 text-4xl'>Porfolio</span>
                    </div>



                    <ul className=' hidden md:inline-flex text-3xl gap-10 px-4 py-4  cursor-pointer'>
                        <li> <a href="#">Home </a></li>
                        <li> <a href="#about">About</a> </li>
                        <li> <a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>


                    <div onClick={changeNav} className='md:hidden sm:inline'>

                        {nav ?
                            <FaWindowClose onClick={changeNav} className=' text-7xl pe-5 mainC' /> :
                            <GiHamburgerMenu className=' text-7xl pe-5 mainC' />}


                    </div>


                    <div className={nav ? 'fixed right-0 w-full top-[20vh]  bg-black txtC ease-in-out duration-700' : 'fixed right-[-100%]'}>

                        <nav className="">

                            <ul className='cursor-pointer flex flex-col text-3xl gap-5 px-7 py-4 md:hidden'onClick={changeNav}>
                                <li> <a href="#">Home </a></li>
                                <li> <a href="#about">About</a> </li>
                                <li> <a href="#skills">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>





                    </div>




                </div>

            </div>
        </>

    );
}

export default Header;