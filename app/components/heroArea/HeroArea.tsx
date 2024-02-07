
import Image from 'next/image';
import Button from '../button/Button';
import GradientHeading from '../heading/GradientHeading';
import Link from 'next/link';
import MenuHeading from '../heading/MenuHeading';
import { FaBootstrap, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from 'react-icons/io5';
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const HeroArea = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center gap-12 md:gap-20 '>

            <div className='w-full lg:w-2/3'>
                <div>
                    <div className='flex items-center gap-3 text-3xl md:text-4xl font-semibold'>
                        <h2>I am</h2>
                        <GradientHeading
                            label='Maruf Hossain Munna'
                        />
                    </div>

                    <div>
                        <h4 className='text-xl md:text-2xl font-semibold mt-2 mb-4'>Frontend Web Developer</h4>
                        <p className='text-gray-300'>
                            An Experienced professional Frontend Web Developer with a demonstrated history of most complex projects. And also I am a Wordpress Expert. My expertise in Javascript | Typescript | React Js | Next Js | TailwindCSS, Bootstrap5 | Wordpress | Node Js | Express Js | MongoDb. Also my code is Clean and ensure the best User Experience. I have strong communication & problem solving skills. Client satisfaction & providing professional service are my top priorities. I am confident that I can fulfill your expectations. If you are looking for a skilled web developer, please do not hesitate to contact me for free consultation.
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-7 md:gap-12 w-full md:w-[500px] mt-8'>
                    <Button
                        label='Download Resume'
                    />
                    <Link href='https://www.fiverr.com/maruf_hossain21' target='_blank' className='w-full'>
                        <Button
                            label='Order on fiverr'
                            outline
                        />
                    </Link>
                </div>

                <div className='mt-8'>
                    <MenuHeading
                        label='Tech Stack'
                        custom=''
                    />

                    <div className='mt-3'>
                        <div className='flex justify-between md:justify-normal md:gap-8 items-center'>
                            <RiJavascriptFill  size={50}  />
                            <BiLogoTypescript  size={50}  />
                            <FaReact  size={43}  />
                            <SiNextdotjs  size={43}  />
                            <SiTailwindcss size={50} />
                        </div>
                    </div>
                </div>

            </div>

            <div className='w-full lg:w-1/3 flex justify-center'>
                <div className='p-2 flex justify-center items-center w-full md:w-[520px] lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500'>
                    <div className=' '>
                        <Image
                            src='/images/munna.jpg'
                            alt='Maruf Hossain Munna'
                            width={300}
                            height={200}
                            className='rounded-full self-center w-full md:w-[500px]  lg:w-[300px] h-full md:h-[500px] lg:h-[300px] '
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;