import React, { ChangeEvent } from "react";

export interface CheckboxProps {
  id: string;
  checked: boolean;
  ariaLabel?: string;
  handleClick?: (e: ChangeEvent<HTMLInputElement>) => unknown;
}

export const Checkbox = ({ id, handleClick, checked }: CheckboxProps) => {
  return (
    <input
      id={id}
      type="checkbox"
      onChange={handleClick}
      checked={checked}
      className="
        w-5
        h-5
        overflow-hidden
        flex
        items-center
        justify-center
        flex-shrink-0
        rounded-md
        border-0
        transition-colors
        duration-300
        cursor-pointer
        text-primary-50
        ring-1
        checked:ring-1
        checked:ring-primary-600
        checked:bg-primary-50
        focus:bg-primary-50
        focus:ring-4
        focus:ring-offset-0
        focus:ring-primary-300
        active:bg-primary-50
        ring-gray-300
      "
    />
  );
};

Checkbox.displayName = "Checkbox";
