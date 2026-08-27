import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
	className?: string;
	variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
	size?: "xs" | "sm" | "md" | "lg" | "xl";
	children?: React.ReactNode;
}

const Button = ({
	className,
	variant = "primary",
	size = "md",
	children,
	...props
}: ButtonProps) => {
	return (
		<div
			className={clsx({
				"brightness-70 cursor-not-allowed": props.disabled === true,
			})}
		>
			<button
				{...props}
				className={clsx(
					`w-full rounded-full cursor-pointer ${className}`,
					!props.disabled && "cursor-pointer",
					{
						"bg-action-primary text-white hover:bg-action-primary-hover":
							variant === "primary",
						"bg-surface-secondary text-tertiary hover:bg-elevated":
							variant === "secondary",
						"bg-surface text-action-primary border-action-primary border":
							variant === "outline",
						"bg-surface text-white": variant === "ghost",
					},
					{
						"py-2xs text-sm": size === "sm",
						"py-xs text-md": size === "md",
						"py-sm text-lg": size === "lg",
						"py-lg text-xl": size === "xl",
					},
				)}
			>
				{children}
			</button>
		</div>
	);
};
export default Button;
