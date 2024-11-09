import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type = "text", icon, ...props }, ref) => {
    return (
      <div className="relative text-gray600 w-[350px]">
        <input
          {...props}
          type={type}
          name={name}
          ref={ref}
          className="px-4 py-2 w-full rounded-xl pr-10"
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
