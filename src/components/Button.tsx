import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "filled";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "submit",
  variant = "filled",
  disabled,
  ...props
}) => {
  const buttonClasses = classNames(
    "w-full h-11 flex items-center justify-center rounded-md transition duration-200 ease-in-out focus:outline-none",
    {
      "bg-green500 text-white border-green500 hover:bg-green300 active:bg-green500/80":
        variant === "filled" && !disabled,
      "bg-transparent text-green500 border-2 border-gray-600 hover:bg-gray700":
        variant === "outline" && !disabled,
      "bg-gray600 text-gray300 transition-colors duration-200": disabled,
    }
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
