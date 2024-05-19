import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import ContactInformation from "./ContactFrom";

export default function Index({ project }) {
    return (
        <>
            <Head title="contact" />
            <Navbar project={project} />
            <ContactInformation />
        </>
    );
}
