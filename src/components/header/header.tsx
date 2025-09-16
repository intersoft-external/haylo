import { useState } from "react";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '@/assets/Haylo.png'

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com" },
        { Icon: Instagram, href: "https://instagram.com" },
        { Icon: Twitter, href: "https://twitter.com" },
        { Icon: Linkedin, href: "https://linkedin.com" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
            <nav className="mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center space-x-3" onClick={handleLinkClick}>
                    <img src={logo} alt="Haylo Logo" className="h-16 w-24" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    {["Home", "About Me", "Services", "Leadership", "Gallery", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                className="relative group px-1 py-1 hover:text-pink-500 transition-colors duration-300"
                            >
                                {item}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA + Social (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild>
                        <a
                            href="#contact"
                            className="relative px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg
                                transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            Let's Talk
                        </a>
                    </Button>
                    <div className="flex space-x-3">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700
                                transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500 hover:scale-110"
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
                        {["Home", "About Us", "Services", "Leadership", "Gallery", "Contact Us"].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "")}`}
                                    onClick={handleLinkClick}
                                    className="relative group px-1 py-1 hover:text-pink-500 transition-colors duration-300"
                                >
                                    {item}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button asChild className="w-full mt-4 relative bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <a href="#contact" onClick={handleLinkClick}>Let's Talk</a>
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
                                    className="relative w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-700
                                    transition-all duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500 hover:scale-110"
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
