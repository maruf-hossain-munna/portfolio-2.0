import Image from 'next/image';
import React from 'react';
import GradientHeading from '../heading/GradientHeading';
import MenuHeading from '../heading/MenuHeading';

const About = () => {
    return (
        <div id='about'>
            <MenuHeading
                label='About Me'
                custom='text-center'
            />
            <div className='flex flex-col md:flex-row gap-8 items-center my-12'>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <Image
                        src='/images/maruf-pro.jpg'
                        alt='Maruf Hossain Munna'
                        width={350}
                        height={300}
                        className='rounded-lg'
                    />
                </div>

                <div className='w-full md:w-1/2'>
                    <GradientHeading
                        label="I'm Maruf Hossain Munna"
                    />
                    <h4 className='text-lg mt-2 mb-3 lg:mb-6'>From <span className='text-green-500'>Noakhali, Bangladesh </span></h4>
                    <p className='text-sm lg:text-[17px] leading-relaxed text-gray-300'>
                        I am currently working with MERN Stack Development for above 2years. I am expert in Next.js framework, which is full stack framework. Mostly I am Expert in Frontend Development using React.js and Next.js with JavaScript (ES6) or Typescript. I have little knowledge about backend development using Node.js (Express.js) , and also I have enough knowledge in MongoDB which most popular database. I can use most popular modern technology Prisma ORM for backend and database connection. I can use Firebase and Next auth system for authentication and I have enough knowledge JWT token for authorization.
                            <br /> <br />
                        My dream is become a Senior Full Stack Developer. I want to build my career through it. I am very dedicated & punctual for my work & I am also a quick learner. I can explore a new technology by reading their documentation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;