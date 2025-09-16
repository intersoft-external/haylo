import HeroSection from "@/pages/home/components/hero";
import AboutMe from "@/pages/home/components/about-me";
import ServicesSection from "@/pages/home/components/service";
import LeadershipSection from "@/pages/home/components/leadership";
import CtaSection from "@/pages/home/components/cta-section";
import GallerySection from "@/pages/home/components/gallery";
import Wrapper from "@/pages/wrapper.tsx";

const Home = () => {
    return (
        <Wrapper>
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
                <GallerySection />
            </section>

            <section id="leadership" className="section-anchor">
                <LeadershipSection />
            </section>

            <section id="contact" className="section-anchor">
                <CtaSection />
            </section>
        </Wrapper>
    );
};

export default Home;
