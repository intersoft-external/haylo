import { useState } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Haylo.png";
import { Link, useNavigate } from "@tanstack/react-router";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com" },
        { Icon: Instagram, href: "https://instagram.com" },
        { Icon: Twitter, href: "https://twitter.com" },
        { Icon: Linkedin, href: "https://linkedin.com" },
    ];

    // SPA-safe navigation with optional scroll to section
    const handleScroll = (path: string, sectionId?: string) => {
        setIsOpen(false);
        if (sectionId) {
            navigate({ to: path });
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            navigate({ to: path });
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
            <nav className="mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Haylo Logo" className="h-16 w-24" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    {[
                        { label: "Home", path: "/", section: "home" },
                        { label: "About Me", path: "/", section: "about" },
                        { label: "Services", path: "/", section: "services" },
                        { label: "Leadership", path: "/", section: "leadership" },
                        { label: "Gallery", path: "/", section: "gallery" },
                        { label: "Contact", path: "/contact" },
                    ].map((item) => (
                        <li key={item.label}>
                            <button
                                onClick={() => handleScroll(item.path, item.section)}
                                className="relative group px-1 py-1 hover:text-pink-500 transition-colors duration-300"
                            >
                                {item.label}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA + Social (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild>
                        <button
                            onClick={() => handleScroll("/", "contact")} // scroll to contact section on home
                            className="relative px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Let's Talk
                        </button>
                    </Button>

                    <div className="flex space-x-3">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500 hover:scale-110"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6 text-pink-500" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur-md border-t shadow-lg">
                    <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium">
                        {[
                            { label: "Home", path: "/", section: "home" },
                            { label: "About Us", path: "/", section: "about" },
                            { label: "Services", path: "/", section: "services" },
                            { label: "Leadership", path: "/", section: "leadership" },
                            { label: "Gallery", path: "/", section: "gallery" },
                            { label: "Contact Us", path: "/contact" },
                        ].map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => handleScroll(item.path, item.section)}
                                    className="relative group px-1 py-1 hover:text-pink-500 transition-colors duration-300"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                                </button>
                            </li>
                        ))}

                        <li>
                            <Button asChild className="w-full mt-4 relative bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <button onClick={() => handleScroll("/", "contact")}>Let's Talk</button>
                            </Button>
                        </li>

                        {/* Social Icons (Mobile) */}
                        <li className="flex justify-center space-x-6 mt-4">
                            {socialLinks.map(({ Icon, href }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
