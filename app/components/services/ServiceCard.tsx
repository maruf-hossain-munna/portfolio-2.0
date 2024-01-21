import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ServiceCardProps {
    icon: IconType,
    title: string,
    description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div>
            <div className='px-6 py-7 shadow-lg shadow-slate-700 border-x-2 hover:border-y-2 hover:border-white rounded-xl service'>
                {<Icon size={44} className="mb-4" />}

                <h2 className="lg:text-2xl text-xl font-semibold"> {title} </h2>
                <p className='mt-3 text-sm text-gray-300'>{description} </p>
            </div>
        </div>
    );
};

export default ServiceCard;