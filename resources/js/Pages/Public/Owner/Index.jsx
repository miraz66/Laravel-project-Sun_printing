import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ project }) {
    return (
        <div>
            <Head title="Owner" />
            <Navbar project={project} />
        </div>
    );
}
