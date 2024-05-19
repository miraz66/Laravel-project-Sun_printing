import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";

import HeroServices from "./HeroServices";
import TopServices from "./TopServices";
import RecentProject from "./RecentProject";
import TailUsProject from "../Home/TailUsProject";
import Sponsors from "../Home/Sponsors";
import Footer from "@/Components/Footer";
import WhatsAppWidget from "@/Components/WhatsAppWidget";

export default function Index({ project }) {
    return (
        <div className="">
            <Head title="Services" />

            <Navbar project={project} />
            <HeroServices />
            <TopServices />
            <RecentProject />
            <Sponsors className="bg-gray-100 py-40" />
            <TailUsProject className="bg-white pt-40" />
            <Footer />
            <WhatsAppWidget />
        </div>
    );
}
