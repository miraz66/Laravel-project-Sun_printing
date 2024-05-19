import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

export default function Index({ project }) {
    return (
        <div className="">
            <Head title="Owner" />
            <Navbar project={project} />

            <div className="">Owner</div>
            {/* <HeroSection />
            <AboutHome />
            <Blog />
            <ServicesHome />
            <Award />
            <Faq />
            <TailUsProject className="mx-5 mt-40 sm:mx-10 xl:mx-0" />
            <Footer />
            <WhatsAppWidget /> */}
        </div>
    );
}
