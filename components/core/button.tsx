import { forwardRef, MouseEvent } from "react";
import { classNames } from "../../helpers/classNames";

export interface ButtonProps {
  variant: "primary" | "transparent";
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  name: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => unknown;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

export type ButtonRef = HTMLButtonElement;

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    name,
    onClick,
    disabled = false,
    type = "button",
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      onClick={(e) => onClick(e)}
      disabled={disabled}
      className={classNames(
        variant === "primary" ? "bg-primary-600 text-white shadow" : "",
        variant === "transparent" ? "bg-transparent text-gray-500" : "",
        size === "md" ? "h-[44px] px-4" : "",
        "font-medium text-base rounded-lg flex items-center justify-center"
      )}
    >
      {name}
    </button>
  );
});

Button.displayName = "Button";
