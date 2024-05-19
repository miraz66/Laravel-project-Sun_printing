import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import HeroAbout from "./HeroAbout";
import Employee from "./Employee";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/Components/WhatsAppWidget";

export default function Index({ project }) {
    return (
        <>
            <Head title="About" />

            <Navbar project={project} />
            <HeroAbout />
            <Employee />
            <Footer />
            <WhatsAppWidget />
        </>
    );
}
