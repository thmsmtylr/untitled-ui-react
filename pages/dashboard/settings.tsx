import * as React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { classNames } from "../../helpers/classNames";
import HomeIcon from "../../public/icons/home.svg";
import BarChart2Icon from "../../public/icons/bar-chart-2.svg";
import ThreeLayersIcon from "../../public/icons/3-layers.svg";
import CheckSquareIcon from "../../public/icons/check-square.svg";
import FlagIcon from "../../public/icons/flag.svg";
import UsersIcon from "../../public/icons/users.svg";
import LifeBuoyIcon from "../../public/icons/life-buoy.svg";
import SettingsIcon from "../../public/icons/settings.svg";
import UserIcon from "../../public/icons/user.svg";
import KeyIcon from "../../public/icons/key.svg";
import CreditCardIcon from "../../public/icons/credit-card.svg";
import BellIcon from "../../public/icons/bell.svg";
import ToggleRightIcon from "../../public/icons/toggle-right.svg";
import LogoOutIcon from "../../public/icons/log-out.svg";
import SearchIcon from "../../public/icons/search.svg";
import TwoLayersIcon from "../../public/icons/2-layers.svg";
import ZapIcon from "../../public/icons/zap.svg";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { toggleClassNames } from "../../helpers/toggleClassNames";

interface UserProps {
  name: string;
  email: string;
  imageUrl: string;
}

const user: UserProps = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

type NavigationProps = {
  name: string;
  href: string;
  icon: any;
  notificationCount?: number;
}[];

const navigation: NavigationProps = [
  { name: "Home", href: "#", icon: HomeIcon },
  { name: "Trending", href: "#", icon: BarChart2Icon },
  { name: "Bookmarks", href: "#", icon: ThreeLayersIcon },
  { name: "Messages", href: "#", icon: CheckSquareIcon },
  { name: "Profile", href: "#", icon: FlagIcon },
  { name: "Users", href: "#", icon: UsersIcon },
];

const navigationBottom: NavigationProps = [
  { name: "Support", href: "#", icon: LifeBuoyIcon },
  { name: "Settings", href: "#", icon: SettingsIcon },
];

const subNavigation: NavigationProps = [
  { name: "My details", href: "#", icon: FlagIcon },
  { name: "Profile", href: "#", icon: UserIcon, notificationCount: 10 },
  { name: "Password", href: "#", icon: KeyIcon },
  { name: "Team", href: "#", icon: UsersIcon },
  { name: "Billing", href: "#", icon: CreditCardIcon },
  { name: "Notifications", href: "#", icon: BellIcon },
  { name: "Integrations", href: "#", icon: ToggleRightIcon },
];

enum Plans {
  Basic = "Basic",
  Business = "Business",
  Enterprise = "Enterprise",
}

type PlanProps = {
  name: Plans;
  price: number;
  description: string;
  icon: any;
}[];

const plans: PlanProps = [
  {
    name: Plans.Basic,
    price: 10,
    description:
      "Includes up to 10 users, 20GB indiviual data and access to all features.",
    icon: TwoLayersIcon,
  },
  {
    name: Plans.Business,
    price: 20,
    description:
      "Includes up to 20 users, 40GB indiviual data and access to all features.",
    icon: ThreeLayersIcon,
  },
  {
    name: Plans.Enterprise,
    price: 40,
    description:
      "Unlimited users, unlimited individual data and access to all features.",
    icon: ZapIcon,
  },
];

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Settings() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const [isSettingsMenuItem, setIsSettingsMenuItem] = useState<boolean>(false);
  const [selected, setSelected] = useState(plans[0]);

  return (
    <>
      <div className="h-full flex">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="pt-5 pb-4">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt="Workflow"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                    <a href="#" className="flex-shrink-0 group block">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            Account Settings
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-20">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto bg-primary-700">
              <div className="flex-1">
                <div className="bg-primary-700 pt-8 pb-6 flex items-center justify-center">
                  <img
                    className="h-8 w-auto"
                    src="/logomark.png"
                    alt="Workflow"
                  />
                </div>
                <nav
                  aria-label="Sidebar"
                  className="flex flex-col items-center space-y-2"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-primary-600 hover:text-white text-primary-300 active:ring-4 active:ring-primary-500 transition-colors"
                    >
                      <item.icon aria-hidden="true" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
              <nav
                aria-label="Sidebar"
                className="flex flex-col items-center space-y-2"
              >
                {navigationBottom.map((item) => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      const target = e.currentTarget;
                      target.id === "Settings" && setSubMenuOpen(!subMenuOpen);
                      toggleClassNames(!subMenuOpen, target, [
                        "ring-4",
                        "ring-primary-500",
                        "text-white",
                      ]);
                    }}
                    id={item.name}
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-primary-600 hover:text-white text-primary-300 transition-colors"
                  >
                    <item.icon aria-hidden="true" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                ))}
              </nav>
              <div className="border-b border-b-primary-600 w-[49px] mx-auto my-6" />
              <div className="flex-shrink-0 flex pb-6">
                <a href="#" className="flex-shrink-0 w-full">
                  <img
                    className="block mx-auto h-12 w-12 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                  <div className="sr-only">
                    <p>{user.name}</p>
                    <p>Account settings</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="bg-indigo-600 py-2 px-4 flex items-center justify-between sm:px-6 lg:px-8">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <main className="flex overflow-hidden bg-gray-50">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className={classNames(
                subMenuOpen ? "ml-0" : "-ml-72",
                "min-w-0 flex-col overflow-y-auto lg:order-last transition-all w-full"
              )}
            >
              <div className="mx-8 my-8 grid grid-cols-12 grid-flow-col gap-8 items-center">
                <h1
                  className="text-display-sm font-medium text-gray-900 col-span-6"
                  id="primary-heading"
                >
                  Billing
                </h1>
                <div className="col-start-10 col-end-13">
                  <div className="relative">
                    <input
                      className="h-11 w-full bg-white flex items-center rounded-lg pl-[28px] pr-[10px] py-[14px] gap-2 border border-gray-300 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-colors drop-shadow-sm text-base placeholder:text-gray-500"
                      placeholder="Search"
                      aria-label="Search billing"
                    />
                    <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none text-gray-500">
                      <SearchIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-8 mb-8">
                <h2 className="text-gray-900 text-lg font-medium mb-1">
                  Account plans
                </h2>
                <p className="text-sm text-gray-500">
                  Pick an account plan that fits your workflow.
                </p>
              </div>
              <div className="mx-8 mb-6 border-b border-b-gray-200" />
              <div className="mx-8 grid grid-cols-12 grid-flow-col gap-8">
                <div className="col-start-1 col-end-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Current plan
                  </h3>
                  <p className="text-sm text-gray-500">
                    We&apos;ll credit your account if you need to downgrade
                    during the billing cycle.
                  </p>
                </div>
                <div className="col-start-4 col-end-13">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">
                      Current plan
                    </RadioGroup.Label>
                    <div className="space-y-2">
                      {plans.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ active, checked }) =>
                            `${classNames(
                              active
                                ? "ring-1 ring-primary-300 text-primary-800 bg-primary-50"
                                : "",
                              checked
                                ? "ring-1 ring-primary-300 text-primary-800 bg-primary-50"
                                : "",
                              "rounded-lg p-4 relative flex cursor-pointer focus:outline-none bg-white"
                            )}`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={classNames(
                                        checked
                                          ? "text-primary-800"
                                          : "text-gray-700",
                                        "font-medium"
                                      )}
                                    >
                                      <TwoLayersIcon />
                                      {plan.name}{" "}
                                      <span
                                        className={classNames(
                                          checked ? "text-purple-600" : "",
                                          "font-normal"
                                        )}
                                      >
                                        {new Intl.NumberFormat(`en-US`, {
                                          currency: `USD`,
                                          style: "currency",
                                          maximumSignificantDigits: 1,
                                        }).format(plan.price)}
                                      </span>
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="div"
                                      className={`inline ${
                                        checked
                                          ? "text-sky-100"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      <span
                                        className={classNames(
                                          checked ? "text-purple-600" : ""
                                        )}
                                      >
                                        {plan.description}
                                      </span>
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <aside
              className={classNames(
                subMenuOpen ? "translate-x-0" : "-translate-x-full",
                "hidden h-screen lg:flex-shrink-0 lg:block lg:order-first transition-all"
              )}
            >
              <div className="h-full relative flex flex-col w-72 bg-primary-800 border-r border-gray-200 overflow-y-auto pt-9 px-4">
                <div className="text-white text-base font-medium mb-4">
                  Settings
                </div>
                <nav
                  aria-label="Sidebar"
                  className="flex flex-col items-center gap-y-1 h-full justify-between"
                >
                  <div className="w-full">
                    {subNavigation.map((item) => (
                      <a
                        className={classNames(
                          item.name === "Billing" ? "bg-primary-700" : "",
                          "text-left w-full text-base text-primary-100 hover:text-white active:text-white active:bg-primary-700 hover:bg-primary-600 transition-colors rounded-md px-3 py-2 font-medium flex items-center"
                        )}
                        key={item.name}
                        href={item.href}
                      >
                        {item.icon && (
                          <item.icon
                            className="mr-3 text-primary-300"
                            aria-hidden="true"
                          />
                        )}{" "}
                        {item.name}
                        {item.notificationCount && (
                          <span className="ml-auto py-[2px] px-[10px] text-sm font-medium bg-primary-50 rounded-2xl text-primary-700">
                            {item.notificationCount}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                  <div className="w-full mb-6 px-3">
                    <a href="#">
                      <p className="text-sm font-medium text-white flex">
                        Olivia Rhye
                        <LogoOutIcon className="ml-auto text-primary-300" />
                      </p>
                      <p className="text-sm text-primary-200">
                        olivia@untitledui.com
                      </p>
                    </a>
                  </div>
                </nav>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </>
  );
}
