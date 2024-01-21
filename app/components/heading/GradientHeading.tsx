interface GradientHeadingProps {
    label: string,
    custom?: string,
    small?: boolean,
}

const GradientHeading : React.FC<GradientHeadingProps> = ({label, small, custom}) => {
    return (
        <div>
            <h2 className={`text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-indigo-600 to-purple-600
                       ${small ? 'text-xl font-[500]' : ' md:text-4xl text-3xl font-semibold md:font-bold '} 
                    `}>
                {label}
            </h2>
        </div>
    );
};

export default GradientHeading;