import React, { forwardRef } from "react";
import ChevronDown from "../../public/icons/chevron-down.svg";
import { Button } from "../core/button";
import { classNames } from "../../helpers/classNames";

export interface HeaderProps {
  divider?: boolean;
}

export type HeaderRef = HTMLElement;

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", icon: <ChevronDown /> },
  { name: "Resources", href: "/resources", icon: <ChevronDown /> },
  { name: "Pricing", href: "/pricing" },
];

export const Header = forwardRef<HeaderRef, HeaderProps>((props, ref) => {
  const { divider } = props;

  return (
    <header
      ref={ref}
      className={classNames(divider ? "border-b border-gray-100 w-full" : "")}
    >
      <div
        className={classNames(
          divider ? "h-[calc(80px-1px)]" : "h-20",
          "bg-white flex items-center container mx-auto"
        )}
      >
        <img src="./untitled-ui-logo.svg" alt="Untitled UI React" />
        <nav>
          <ul className="flex gap-x-8 ml-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    "flex items-center gap-x-2",
                    "text-gray-500 hover:text-gray-600 focus:outline-none font-medium text-lg transition-colors duration-200 ease-in-out"
                  )}
                >
                  {item.name} {item.icon && item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto gap-x-2 flex">
          <Button
            name="Log in"
            variant="transparent"
            size="md"
            onClick={() => {}}
          />
          <Button
            name="Sign up"
            variant="primary"
            size="md"
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";
