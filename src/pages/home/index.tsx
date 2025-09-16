import { Header } from "@/components/header/header.tsx";
import HeroSection from "@/pages/home/components/hero.tsx";
import AboutMe from "@/pages/home/components/about-me.tsx";
import Footer from "@/components/footer/footer.tsx";
import ServicesSection from "@/pages/home/components/service.tsx";
import LeadershipSection from "@/pages/home/components/leadership.tsx";
import CtaSection from "@/pages/home/components/cta-section.tsx";
import GallerySection from "@/pages/home/components/gallery.tsx";

const Home = () => {
    return (

        <div className="font-sans text-gray-900">
            <Header />

            <section id="home" className="section-anchor">
                <HeroSection />
            </section>

            <section id="about" className="section-anchor">
                <AboutMe />
            </section>

            <section id="services" className="section-anchor">
                <ServicesSection />
            </section>
            <section id="gallery" className="section-anchor">
                <GallerySection/>
            </section>
            <section id="leadership" className="section-anchor">
                <LeadershipSection />
            </section>

            <section id="contact" className="section-anchor">
                <CtaSection />
            </section>

            <Footer />
        </div>
    );
};

export default Home;