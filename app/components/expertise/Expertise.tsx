import React from 'react';
import GradientHeading from '../heading/GradientHeading';
import ExpertiseCard from './ExpertiseCard';

const Expertise = () => {
    return (
        <div id='expertise'>
            <div className='text-center'>
                <GradientHeading
                    label='My Expertise'
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                <ExpertiseCard 
                    cardTitle='Front-End'
                    label1='HTML'
                    label2='CSS (Tailwind, Bootstrap)'
                    label3='JavaScript, Typescript'
                    label4='React.js, Next.js'
                />
                <ExpertiseCard 
                    cardTitle='Back-End & Database'
                    label1='Node.js'
                    label2='Express js'
                    label3='Prisma ORM'
                    label4='MongoDB'
                />
                <ExpertiseCard 
                    cardTitle='Tech & Tools'
                    label1='Material ui, '
                    label2='Firebase'
                    label3='NextAuth'
                    label4='JWT Token'
                />
                <ExpertiseCard 
                    cardTitle='Professional Skills'
                    label1='Communication'
                    label2='Teamwork'
                    label3='Creativity'
                    label4='Problem Solving'
                />
            </div>
        </div>
    );
};

export default Expertise;