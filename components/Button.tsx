interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidh?: boolean;
  large?: boolean;
  onclick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onclick,
  disabled,
  fullWidh,
  large,
  outline,
  secondary,
}) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onclick}
        className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
        ${fullWidh ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-sky-500"}
        ${secondary ? "text-black" : "text-white"}  
        ${secondary ? "border-black" : "border-sky-500"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
        `}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
