import { forwardRef, type InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = "text", icon, ...props }, ref) => {
    return (
      <div className="relative text-gray600 w-[350px]">
        <input
          {...props}
          type={type}
          name={name}
          ref={ref}
          className="px-4 py-2 w-full rounded-xl pr-10" // Ajuste de padding para o espaço do ícone
        />
        {icon && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray400">
            {icon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
