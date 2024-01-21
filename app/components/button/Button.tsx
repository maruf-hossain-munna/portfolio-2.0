
interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string

}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom
}) => {
    return (
        <button
            disabled={disabled}
            className={`uppercase disabled:opacity-70 border-[1.5px] border-green-500 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full flex items-center justify-center gap-2
            ${outline ? ' bg-transparent hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 text-white hover:text-white' : 'bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500  text-white border-none'}
            ${small ? 'text-sm font-light py-2 px-2 border ' : 'text-sm md:text-[18px] font-medium px-4 py-3 border-2'}
            ${custom ? custom : ''}
            `}>

            {label}

        </button>
    );
};

export default Button;