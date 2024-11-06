import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "filled";
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "submit",
  variant = "filled",
  ...props
}) => {
  const baseStyles =
    "w-full h-11 border-[1px] flex items-center justify-center rounded-md transition duration-200 ease-in-out focus:outline-none";
  const variantStyles = {
    filled:
      "bg-green500 text-white border-green500 hover:bg-green300 active:bg-green500/80",
    outline:
      "bg-transparent text-green500 border-green500 hover:bg-green500 hover:text-white active:bg-green500/80",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
