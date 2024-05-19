import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ project }) {
    return (
        <div className="">
            <Head title="Owner" />
            <Navbar project={project} />
        </div>
    );
}
