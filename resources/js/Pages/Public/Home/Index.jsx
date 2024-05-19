import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import HeroSection from "./HeroSection";
import AboutHome from "./AboutHome";
import Blog from "./Blog";
import ServicesHome from "./ServicesHome";
import Award from "./Award";
import Faq from "./Faq";
import TailUsProject from "./TailUsProject";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/Components/WhatsAppWidget";
// import DropdownMenu from "@/Components/DropdownMenu";

export default function Index({ project }) {
    return (
        <>
            <Head title="Home" />

            <Navbar project={project} />
            <HeroSection />
            <AboutHome />
            <Blog />
            <ServicesHome />
            <Award />
            <Faq />
            <TailUsProject className="mx-5 mt-40 sm:mx-10 xl:mx-0" />
            <Footer />
            <WhatsAppWidget />
        </>
    );
}
