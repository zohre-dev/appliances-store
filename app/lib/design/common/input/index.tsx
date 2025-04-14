import { cn } from "@/app/lib/utils/cn";
import { propagateServerField } from "next/dist/server/lib/router-utils/setup-dev-bundler";
import { FC } from "react";

// handleChange={(value) => handleGetValue(value)}
// handleGetValue={(value) => setValue(value)}
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  errorText?: string;
  parentClasses?: string;
  labelClasse?: string;
  handleChange: (value: string) => void;
}

const Input: FC<IProps> = ({
  labelText,
  errorText,
  parentClasses,
  className,
  handleChange,
  labelClasse,
  ...props
}) => {
  console.log("hiiiiiii");
  return (
    <div className={cn("", parentClasses)}>
      {labelText && (
        <label
          htmlFor={props.id}
          className={cn(
            "block text-gray-700 text-sm font-medium mb-1",
            labelClasse
          )}
        >
          {labelText}
        </label>
      )}

      <input
        id={props.id}
        className={cn(
          `w-[400px] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
            errorText ? "border-red-500" : "border-gray-300"
          }`,
          className
        )}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
      />
      {errorText && <p className=" text-sm mt-1 text-red-500">{errorText}</p>}
    </div>
  );
};

export default Input;
