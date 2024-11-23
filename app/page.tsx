import Hero from "./_components/Hero";
import Faq from "./_components/Faq";
import BigInfo from "./_components/BigInfo";
import Address from "./_components/Address";
import Footer from "./_components/Footer";
import TopBar from "./_components/TopBar";

export default function Home() {
    return (
        <div className="relative flex flex-col">
            <TopBar />
            <Hero />
            <Faq />
            <BigInfo />
            <Address />
            <Footer />
        </div>
    );
}
