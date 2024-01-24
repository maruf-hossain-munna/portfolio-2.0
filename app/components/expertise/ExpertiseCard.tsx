interface ExpertiseCardProps{
    cardTitle : string,
    label1 : string,
    label2? : string,
    label3? : string,
    label4? : string,
    label5? : string,
    label6? : string,
    label7? : string,
}

const ExpertiseCard : React.FC<ExpertiseCardProps> = ({
    cardTitle,
    label1,
    label2,
    label3,
    label4,
    label5,
    label6,
    label7
}) => {
    return (
        <div className="py-3 px-4 rounded-lg border-2 border-green-500 ">
            <h3 className="text-2xl font-semibold text-center">{cardTitle} </h3>
            <hr className="my-2 border-slate-400"/>

            <div className="text-md font-semibold flex flex-col gap-2 mt-2">
                <p className="">{label1} </p>
                <p className="">{label2} </p>
                <p className="">{label3} </p>
                {label4 ? <p className="">{label4} </p> : ''}
                {label5 ? <p className="">{label5} </p> : ''}
                {label6 ? <p className="">{label6} </p> : ''}
            </div>
        </div>
    );
};

export default ExpertiseCard;