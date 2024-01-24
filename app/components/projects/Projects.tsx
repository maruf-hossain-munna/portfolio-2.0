import React from 'react';
import GradientHeading from '../heading/GradientHeading';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <div id='projects'>
            <div className='text-center'>
                <GradientHeading
                    label='Projects'
                />
            </div>

            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12'>
                <ProjectsCard 
                    title="Doctor's Portal"
                    image='/images/web/doctors-portal.png'
                    category='React website'
                    description="This is Doctor's Portal website. it has dynamic appointment booking system. Develop with React.js, JS(ES6), TailwindCSS, Node.js(Express.js), Firebase"
                    gitHubLink='https://github.com/maruf-hossain-munna/doctors-portal-client'
                    liveLink="https://doctor-portal-8402d.web.app/"
                />
                <ProjectsCard 
                    title="Frequency Investment"
                    image='/images/web/frequency-invest.png'
                    category='Next website'
                    description="This is a landing page. Converted from Figma design to Next.js website. Develop with Next.js(13), Typescript, TailwindCSS"
                    gitHubLink='https://github.com/maruf-hossain-munna/doctors-portal-client'
                    liveLink="https://frequency-invest.vercel.app/"
                />
                <ProjectsCard 
                    title="Disegnarecasa"
                    image='/images/web/disegnarecasa.png'
                    category='Wordpress website'
                    description="This is an E-commerce website build for an Italian furniture company. Design and develop with Elementor pro in WordPress CMS."
                    liveLink="https://dise.sviluppo.host/"
                />
                <ProjectsCard 
                    title="Learn Confidently"
                    image='/images/web/learn-confidently.png'
                    category='React website'
                    description="This is an educational website (LMS). It's just designed frontend. Not use payment processing system. Develop with React.js, tailwind, daisy ui"
                    gitHubLink='https://github.com/maruf-hossain-munna/learn-confidently'
                    liveLink="https://learn-confidently.netlify.app/"
                />
                <ProjectsCard 
                    title="TLC Roofing"
                    image='/images/web/tlc-roofing.png'
                    category='Wordpress website'
                    description="This is an agency portfolio website. Design and develop with Elementor pro in WordPress CMS."
                    liveLink="https://dev-tlc-roofing-and-guttering.pantheonsite.io/"
                />
                <ProjectsCard 
                    title="Bachelor Bunny"
                    image='/images/web/bachelor-bunny.png'
                    category='Wordpress website'
                    description="This is a social media services agency portfolio website. It has 4 pages. Design and develop with Elementor pro in WordPress CMS."
                    liveLink="https://dise.sviluppo.host/"
                />
                
            </div>
        </div>
    );
};

export default Projects;