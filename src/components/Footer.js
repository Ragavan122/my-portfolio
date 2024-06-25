import { AiFillApple, AiFillInstagram, AiFillYoutube, AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillMobile, AiOutlineHeatMap, AiFillPhone } from "react-icons/ai";
import { FaMap, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";


function Footer() {

    return (

        <>

            <footer className="fbg pt-5">



                <div className="sm:grid  py-5 px-0 md:grid-cols-2  lg:grid-cols-3 ">


                    <div className="col py-5 txtS bg-gray-900 ps-5">
                        <h1 className="text-2xl text-white border-b-2 w-[40%] pb-2">Quick links</h1>
                        <ul>
                            <li className="text-2xl txtC pt-6"><a href="#">Home</a> </li>
                            <li className="text-2xl txtC pt-3" ><a href="about">About</a></li>
                            <li className="text-2xl txtC pt-3" ><a href="skills">Skills</a></li>
                            <li className="text-2xl txtC pt-3"><a href="contact">Contact</a></li>
                        </ul>
                    </div>


                    <div className="col py-5 bg-gray-900 ps-5">
                        <h1 className="text-2xl text-white border-b-2 w-[40%] pb-2">Address</h1>
                        <ol >

                            <li className="txtS pt-6 list-item">
                                <span><HiMapPin className="addad " /></span>
                                &nbsp;&nbsp; 5/16,Kalnayaakkan Street,Ezhil  Nagar,Woraiyur,Trichy-3.
                            </li>
                            <li className="txtS pt-3 list-item">
                                <span><AiFillPhone className="addp " /></span> &nbsp;&nbsp; 9500802139
                            </li>
                            <li className="txtS pt-3 list-item">
                                <span><MdEmail className="addem " /></span> &nbsp;&nbsp; Vijayaragavansr2020@gmail.com
                            </li>

                        </ol>
                    </div>
                    <div className="col  py-5 bg-gray-900 ps-5">
                        <h1 className="text-2xl txtC  border-b-2 w-[40%] pb-2">Follows us</h1>
                        <div className="flex gap-1 pt-6">
                            <a href=""><AiFillInstagram className=" soci " /></a>
                            <a href=""><AiFillFacebook className="  soci ps-2" /></a>
                            <a href=""><AiFillYoutube className="  soci ps-2" /></a>
                            <a href="https://www.linkedin.com/in/vijaya-ragavan-b6b508259/"><AiFillLinkedin className="  soci ps-2" /></a>
                            <a href="https://github.com/Ragavan122"><AiFillGithub className="soci ps-2" /></a>
                        </div>
                    </div>


                </div>
                <div>
                    <div className="row bg- flex items-center justify-center bg-gray-900 py-5 ps-5">

                        <p className=" txtS ">&copy; Copyright @2024. All Rights Reserved | Developed By <span className="mainC font-bold"> Me</span> </p>
                    </div>
                </div>



            </footer>






        </>


    )
}
export default Footer;

