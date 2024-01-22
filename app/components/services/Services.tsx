import React from 'react';
import GradientHeading from '../heading/GradientHeading';
import ServiceCard from './ServiceCard';
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact , FaWordpressSimple   } from "react-icons/fa";
import { BsFiletypeHtml } from "react-icons/bs";
import { MdErrorOutline } from "react-icons/md";
import { CiRedo } from "react-icons/ci";

const Services = () => {
    return (
        <div >
            <div className='text-center'>
                <GradientHeading
                    label='What I Do'
                />
            </div>

            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <ServiceCard
                    icon={TbBrandNextjs}
                    title='Develop Next.js Website'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
                <ServiceCard
                    icon={FaReact}
                    title='Develop React.js Website'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
                <ServiceCard
                    icon={FaWordpressSimple  }
                    title='Develop WordPress Website'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
                <ServiceCard
                    icon={BsFiletypeHtml}
                    title='Develop HTML Webpage'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
                <ServiceCard
                    icon={MdErrorOutline }
                    title='Error Fixing'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
                <ServiceCard
                    icon={CiRedo  }
                    title='Redesign Website'
                    description="I’m Expert in any PSD, PDF, Figma file Convert to Next app & user friendly with 100% client satisfaction."
                />
            </div>

        </div>
    );
};

export default Services;