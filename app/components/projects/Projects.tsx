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

            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gapy-12'>
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
                    description="This is an E-commerce website build for an Italian furniture company. Design and develop with WordPress CMS."
                    // gitHubLink='https://github.com/maruf-hossain-munna/doctors-portal-client'
                    liveLink="https://dise.sviluppo.host/"
                />
                
            </div>
        </div>
    );
};

export default Projects;