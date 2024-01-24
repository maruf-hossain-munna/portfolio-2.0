interface MenuHeadingProps {
    label: string,
    custom?: string
}

const MenuHeading: React.FC<MenuHeadingProps> = ({ label, custom }) => {
    return (
        <div>
            <h3 className={`md:text-4xl sm:text-3xl text-2xl font-semibold text-green-500 ${ custom ? custom : ''}`}>
                { label}
            </h3>
        </div>
    );
};

export default MenuHeading;