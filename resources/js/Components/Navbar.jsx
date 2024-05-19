import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiChevronDown } from "react-icons/bi";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import HoverDropdown from "./HoverDropdown";

export default function Navbar({ project }) {
    const { url } = usePage();
    const [ownerLink, setOwnerLink] = useState(null);

    const navigation = [
        { name: "Home", active: "/home", href: "public.home", id: 1 },
        { name: "About", active: "/about", href: "public.about", id: 2 },
        {
            name: "Services",
            active: "/services",
            href: "public.services",
            id: 3,
        },
        {
            name: (
                <HoverDropdown
                    setBlogLink={setOwnerLink}
                    projectName={project}
                />
            ),
            active: "/owner",
            href: "public.owner",
            id: 4,
        },
    ];

    return (
        <Disclosure
            as="nav"
            className="bg-gray-100 fixed w-full z-50 bg-opacity-90"
        >
            {({ open }) => (
                <>
                    <div className="lg:mx-5 xl:mx-auto max-w-7xl px-2 sm:px-6 lg:px-0 py-1">
                        <div className="relative flex h-16 sm:h-24 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center gap-5">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />

                                    <h1 className="text-xl sm:text-3xl text-neutral-600 md:text-4xl font-serif tracking-wide font-semibold">
                                        Sun Printing Press
                                    </h1>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 relative">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={route(item.href)}
                                            className={clsx(
                                                "rounded-md px-5 py-2 text-base font-medium",
                                                item.active === url
                                                    ? "bg-primary text-gray-700"
                                                    : "text-gray-600 hover:bg-muted hover:text-black"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link
                                href={route("public.contact")}
                                className="ml-5 relative hidden md:block tracking-wide rounded-full text-white px-6 py-2 bg-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={route(item.href)}
                                    className={clsx(
                                        "block rounded-md px-3 py-2 text-base font-medium",
                                        item.open === url
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    )}
                                    aria-current={
                                        item.open === url ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                    {item.id === 4 ? (
                                        <BiChevronDown className="h-6 w-6" />
                                    ) : null}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
