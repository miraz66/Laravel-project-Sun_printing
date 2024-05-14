import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const navigation = [
    { name: "Dashboard", href: "#", id: 1 },
    { name: "Team", href: "#", id: 2 },
    { name: "Projects", href: "#", id: 3 },
    { name: "Calendar", href: "#", id: 4 },
    { name: "Contact", href: "#", id: 5 },
];

export default function Example() {
    const [active, setActive] = useState(1);

    const handleSetActive = (id) => {
        setActive(id); // Set active button id
    };

    return (
        <Disclosure as="nav" className="bg-gray-100">
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

                                    <h1>Sun Printing Press</h1>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => {
                                        if (item.id <= 4) {
                                            return (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    onClick={() =>
                                                        handleSetActive(item.id)
                                                    }
                                                    className={classNames(
                                                        item.id === active
                                                            ? "bg-primary text-gray-600"
                                                            : "text-gray-900 hover:bg-amber-200 hover:text-gray-900",
                                                        "block rounded-md px-4 py-2 text-sm tracking-wide font-medium"
                                                    )}
                                                    aria-current={
                                                        item.id === active
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            <button className="ml-10 rounded-md px-4 py-2 text-sm font-medium bg-gray-800 text-white hidden sm:ml-6 sm:block">
                                Contact
                            </button>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    onClick={() => handleSetActive(item.id)}
                                    className={classNames(
                                        item.id === active
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        item.id === active ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
