import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

interface ProjectsCardProps {
    image: string,
    title: string,
    category: string,
    description: string,
    technology?: string,
    liveLink?: string,
    clientSideLink?: string,
    serverSideLink?: string,
    gitHubLink?: string,
    icon?: IconType
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
    image,
    title,
    category,
    description,
    technology,
    liveLink,
    clientSideLink,
    serverSideLink,
    gitHubLink,
    icon: Icon
}) => {
    return (
        <div className="shadow-md shadow-gray-400 rounded-2xl pb-7">
            <div className={`portfolio-box rounded-2xl hover:cursor-pointer`}
                style={{ backgroundImage: `url(${image})` }}>

            </div>
            <div className="px-5 mt-4">
                <p className="text-sm text-green-500 uppercase"> {category} </p>
                <div className="flex justify-between items-center gap-5 mt-1">
                    <h2 className="text-xl font-semibold"> {title} </h2>
                    <div>
                        {
                            gitHubLink ? <div className="flex items-center gap-4">
                                <Link href={`${gitHubLink}`} target="_blank" className="hover:text-green-500">
                                    < FaGithub size={24} />
                                </Link>
                                <Link href={`${liveLink}`} target="_blank" className="hover:text-green-500">
                                    <LuExternalLink size={24} />
                                </Link>

                            </div> :
                            <div>
                                <Link href={`${liveLink}`} target="_blank" className="hover:text-green-500">
                                    <LuExternalLink size={24} />
                                </Link>
                            </div>
                        }
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 ">{description}</p>
            </div>
        </div>
    );
};

export default ProjectsCard;