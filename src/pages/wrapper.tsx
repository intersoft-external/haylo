// pages/wrapper.tsx
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";

interface Props {
    children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
    const location = useLocation();

    // Scroll to top whenever route changes
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <div className="font-sans text-gray-900">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
