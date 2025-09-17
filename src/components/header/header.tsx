import { useState } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Haylo.png";
import { Link, useNavigate } from "@tanstack/react-router";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", path: "/", section: "home" },
        { label: "About Me", path: "/", section: "about" },
        { label: "Services", path: "/", section: "services" },
        { label: "Leadership", path: "/", section: "leadership" },
        { label: "Gallery", path: "/", section: "gallery" },
        { label: "Contact", path: "/contact" },
    ];

    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com" },
        { Icon: Instagram, href: "https://instagram.com" },
        { Icon: Twitter, href: "https://twitter.com" },
        { Icon: Linkedin, href: "https://linkedin.com" },
    ];

    const handleScroll = (path: string, sectionId?: string) => {
        setIsOpen(false);
        navigate({ to: path });
        if (sectionId) {
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        }
    };

    const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
        <ul
            className={`${
                isMobile
                    ? "flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium"
                    : "hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium text-gray-700"
            }`}
        >
            {navItems.map(({ label, path, section }) => (
                <li key={label}>
                    <button
                        onClick={() => handleScroll(path, section)}
                        className="relative group cursor-pointer px-1 py-1 hover:text-pink-500 transition-colors duration-300"
                    >
                        {label}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                    </button>
                </li>
            ))}

            {isMobile && (
                <li>
                    <Button
                        onClick={() => handleScroll("/", "contact")}
                        className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Let's Talk
                    </Button>
                </li>
            )}
        </ul>
    );

    const SocialIcons = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={`flex ${isMobile ? "justify-center space-x-6 mt-4" : "space-x-3"}`}>
            {socialLinks.map(({ Icon, href }, idx) => (
                <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500 hover:scale-110"
                >
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>
    );

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Haylo Logo" className="h-12 w-auto sm:h-14 md:h-16" />
                </Link>

                {/* Desktop Menu */}
                <NavLinks />

                {/* CTA + Social (Desktop/Tablet) */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Button
                        onClick={() => handleScroll("/", "contact")}
                        className="px-4 cursor-pointer sm:px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        Let's Talk
                    </Button>
                    <SocialIcons />
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? (
                            <X className="w-6 h-6 cursor-pointer text-pink-500" />
                        ) : (
                            <Menu className="w-6 h-6 cursor-pointer text-pink-500" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
                    <NavLinks isMobile />
                    <SocialIcons isMobile />
                </div>
            )}
        </header>
    );
}
