import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '@/assets/Haylo.png'
export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-md shadow-md">
            <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center space-x-3"
                    onClick={handleLinkClick}
                >
                    <img
                        src={logo}
                        alt="Haylo Logo"
                        className="h-16 w-24"
                    />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#leadership"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            Leadership
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:block">
                    <Button asChild>
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-transform hover:scale-105"
                        >
                            Let's Talk
                        </a>
                    </Button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-pink-500" />
                        ) : (
                            <Menu className="w-6 h-6 text-pink-500" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/80 backdrop-blur-md border-t shadow-lg">
                    <ul className="flex flex-col space-y-4 px-6 py-6 text-gray-700 font-medium">
                        <li>
                            <a
                                href="#home"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#leadership"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Leadership
                            </a>
                        </li>
                        <li>
                            <a
                                href="#gallery"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={handleLinkClick}
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <Button
                                asChild
                                className="w-full mt-4 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white font-semibold py-2 rounded-full shadow-lg transition-transform hover:scale-105"
                            >
                                <a href="#contact" onClick={handleLinkClick}>
                                    Let's Talk
                                </a>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
