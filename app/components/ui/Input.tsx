import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
interface InputProps extends ComponentPropsWithoutRef<"input"> {
	className?: string;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	coolPlaceholder?: true | false;
}

const Input = ({
	className,
	coolPlaceholder = false,
	size = "md",
	...props
}: InputProps) => {
	const { placeholder } = props;

	if (!coolPlaceholder) {
		return (
			<input
				className={clsx(
					"block w-full appearance-none rounded-2xl border border-border-subtle bg-transparent text-tertiary focus:outline-none focus:ring-0",
					className,
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
	} else {
		return (
			<div className="relative w-full">
				<input
					{...props}
					placeholder=" "
					className={clsx(
						"peer block w-full appearance-none rounded-2xl border border-border-subtle bg-transparent text-tertiary focus:outline-none focus:border-border-secondary hover:border-secondary focus:ring-0",
						className,
						{
							"px-3 pb-1 pt-4 text-sm": size === "sm",
							"px-4 pb-2 pt-5 text-md": size === "md",
							"px-4 pb-2 pt-6 text-lg": size === "lg",
							"px-5 pb-3 pt-7 text-xl": size === "xl",
						},
					)}
				/>
				<label
					className={clsx(
						"pointer-events-none absolute top-4 z-10 origin-left scale-75 transform text-secondary duration-200",
						"peer-placeholder-shown:-translate-y-1.5 peer-placeholder-shown:scale-100",
						"peer-focus:-translate-y-3.5 peer-focus:scale-75",
						{
							"left-3": size === "sm",
							"left-4": size === "md" || size === "lg",
							"left-5": size === "xl",
						},
					)}
				>
					{props.placeholder}
				</label>
			</div>
		);
	}
};
export default Input;
