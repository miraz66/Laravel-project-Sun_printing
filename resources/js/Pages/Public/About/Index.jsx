import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import HeroAbout from "./HeroAbout";
import Employee from "./Employee";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/Components/WhatsAppWidget";

export default function Index(options) {
    return (
        <div className="">
            <Head title="About" />

            <Navbar />
            <HeroAbout />
            <Employee />
            <Footer />
            <WhatsAppWidget />
        </div>
    );
}
