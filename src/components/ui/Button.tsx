interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ({ text, className, width = "w-full", ...rest }: IProps) => {
    return (
        <>
            <button className={`${className} ${width}`} {...rest}>
                {text}
            </button>
        </>
    );
};

export default Button;
