import ExpertiseCard from './ExpertiseCard';
import MenuHeading from '../heading/MenuHeading';

const Expertise = () => {
    return (
        <div id='expertise'>
            <MenuHeading
                label='My Expertise'
                custom='text-center'
            />

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
                    label1='Figma'
                    label2='Material ui'
                    label3='Firebase'
                    label4='NextAuth'
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