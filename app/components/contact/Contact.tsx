import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import MenuHeading from '../heading/MenuHeading';


const Contact = () => {

    return (
        <div>
            <div id='contact' className=''>
                <MenuHeading
                    label='Contact With Me'
                    custom='text-center'
                />
                <div className='lg:flex flex-row items-center my-12'>

                    <div className='px-3 md:px-6 py-8 bg-gray-300 text-black rounded-xl lg:mt-0 mt-10'>
                        <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

                        <div className='flex items-center gap-4'>
                            <div className=''>
                                <IoLocationSharp size={35} />
                            </div>
                            <div>
                                <h4 className="lg:text-2xl text-xl font-bold">Location</h4>
                                <p className='lg:text-xl text-lg font-semibold'> Noakhali, Bangladesh</p>
                            </div>
                        </div>

                        <div className='flex items-center my-6 gap-4'>
                            <div className=''>
                                <MdEmail size={35} />
                            </div>
                            <div>
                                <h4 className="lg:text-2xl text-xl font-bold">Email</h4>
                                <p className='lg:text-xl text-[16px] font-semibold'> marufhossainmunna21@gmail.com </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-6'>
                            <div className=''>
                                <FaPhoneAlt size={27} />
                            </div>
                            <div>
                                <h4 className="lg:text-2xl text-xl font-bold">Phone Number</h4>
                                <p className='lg:text-xl text-lg font-semibold'>+8801810315067</p>
                            </div>
                        </div>

                        <h4 className="text-2xl font-bold mt-10">Follow More</h4>
                        <hr className='border-slate-400 mt-2' />
                        <div className='flex items-center justify-between md:justify-normal gap-6 mt-3'>
                            <Link href="https://web.facebook.com/maruf.hossain.munna01/" target='_blank'>
                                <FaFacebook size={29} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/maruf-hossain-munna/" target='_blank'>
                                <FaLinkedin size={29} />
                            </Link>
                            <Link href="https://github.com/maruf-hossain-munna" target='_blank'>
                                <FaGithub size={29} />
                            </Link>
                            <Link href="https://twitter.com/Maruf_Munnaa" target='_blank'>
                                <FaTwitter size={29} />
                            </Link>
                            <Link href="https://www.instagram.com/maruf__hossain__munna/" target='_blank'>
                                <FaInstagram size={29} />
                            </Link>
                        </div>
                    </div>


                    <div className='w-full lg:w-2/3 lg:ml-12 mt-12 lg:mt-0'>
                        <h2 className='lg:text-4xl text-3xl font-bold mb-6'>Send A Message</h2>
                        {/* <p className="text-xl mb-8">Hi, thanks for contacting us. We have received your message and appreciate you reaching out.</p> */}

                        <div>
                            <form >
                                <div className='grid lg:grid-cols-2 gap-6 grid-cols-1 text-black'>
                                    <input name='name' type="text" placeholder="Your Name" className="h-12 rounded-lg px-3 w-full border border-gray-500" />
                                    <input name='email' type="email" placeholder="Your Email Address" className="h-12 rounded-lg px-3 w-full border border-gray-500" />
                                    <input name='phone' type="number" placeholder="Your Phone Number" className="h-12 rounded-lg px-3 w-full border border-gray-500" />
                                    <input name='subject' type="text" placeholder="Subject" className="h-12 rounded-lg px-3 w-full border border-gray-500" />
                                </div>
                                <textarea name='message' className="text-black h-20 rounded-lg px-3 w-full border border-gray-500 my-6" placeholder="Message"></textarea>
                                <input type="submit"
                                    className='text-lg py-3 rounded-xl bg-white hover:bg-transparent text-black hover:text-white border-2 uppercase font-semibold hover:border-white w-full'
                                    value="Submit" />
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;