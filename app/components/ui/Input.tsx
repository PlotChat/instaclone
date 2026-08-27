import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
	className?: string;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Input = ({ className, size = "md", ...props }: InputProps) => {
	const { placeholder } = props;

	return (
		<input
			className={clsx(
				`${className} rounded-2xl text-tertiary border border-border-subtle`,
				{
					"py-2xs px-xs text-sm": size === "sm",
					"py-md px-md text-md": size === "md",
					"py-sm px-md text-lg": size === "lg",
					"py-lg px-lg text-xl": size === "xl",
				},
			)}
			placeholder={placeholder}
			{...props}
		></input>
	);
};
export default Input;
