import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const menu = [
    "Sun sporting club",
    "Young sun sporting club",
    "Sun Football Academy",
    "Md.Mozzamel huque sritisoggo",
];

export default function HoverDropdown({ setBlogLink, projectName }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="">
            <div onMouseLeave={() => setOpen(false)} className="relative">
                <button
                    onMouseOver={() => setOpen(true)}
                    className="flex items-center rounded-md"
                >
                    <span className="mr-2">Owner</span>
                    <ChevronDownIcon className="w-4 h-4" />
                </button>
                <div
                    className={clsx(
                        "absolute -right-5 w-60 py-5 bg-white rounded md:rounded-lg shadow-xl",
                        open ? "block" : "hidden"
                    )}
                >
                    {projectName.data.map((item, index) => (
                        <Link
                            key={index}
                            // href={route("public.blog")}
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
