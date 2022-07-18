import React, { useState } from "react";
import CheckIcon from "../../public/icons/check-14.svg";
import { classNames } from "../../helpers/classNames";

interface CheckboxProps {
  label: string;
  defaultChecked?: boolean;
  onClick?: () => unknown;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, onClick, defaultChecked = false } = props;
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <span
      onClick={() => {
        setChecked(!checked), onClick;
      }}
      className={classNames(
        checked ? "ring-1 ring-primary-600 bg-primary-50 text-primary-600" : "",
        "w-5 h-5 overflow-hidden flex items-center justify-center bg-white flex-shrink-0 rounded-md ring-1 ring-gray-300 border-0 focus:ring-0 transition-colors duration-300 cursor-pointer"
      )}
    >
      {checked && <CheckIcon />}
      <input
        type="checkbox"
        className="sr-only"
        aria-label={label}
        defaultChecked={checked}
      />
    </span>
  );
};
