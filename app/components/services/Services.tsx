import React from 'react';
import ServiceCard from './ServiceCard';
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaWordpressSimple } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import { CiRedo } from "react-icons/ci";
import MenuHeading from '../heading/MenuHeading';

const Services = () => {
    return (
        <div id='services'>
            <MenuHeading
                label='My Services'
                custom='text-center'
            />

            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <ServiceCard
                    icon={TbBrandNextjs}
                    title='Develop Next.js Website'
                    description="I’m experienced in converting your design or requirements to Next app with Typescript and TailwindCSS."
                />
                <ServiceCard
                    icon={FaReact}
                    title='Develop React.js Website'
                    description="I’m experienced in converting your design or requirements to React app with Typescript or JavaScript and TailwindCSS."
                />
                <ServiceCard
                    icon={FaWordpressSimple}
                    title='Develop WordPress Website'
                    description="I’m experienced in converting your design or requirements to WordPress Website with custom coding for your desired design."
                />
                <ServiceCard
                    icon={BsFiletypeHtml}
                    title='Develop HTML Webpage'
                    description="I’m experienced in converting your design or requirements to HTMl Website using CSS (your chooseable framework) and Javascript"
                />
                <ServiceCard
                    icon={MdErrorOutline}
                    title='Error Fixing'
                    description="I’m Expert in find errors and solve errors in your any kind of website which based in Javascript or any CMS website."
                />
                <ServiceCard
                    icon={CiRedo}
                    title='Redesign Website'
                    description="I will do redesign or added some features in your website. So that your website in very eye catching."
                />
            </div>

        </div>
    );
};

export default Services;