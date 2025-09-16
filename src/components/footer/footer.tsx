import { Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-200">
            {/* Top Footer */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Brand + Contact */}
                <div>
                    <div className="flex items-center gap-2 text-orange-400 text-xl font-bold">
                        <span className="text-2xl">📈</span> Haylo
                    </div>
                    <p className="text-sm mt-4 text-gray-400 max-w-sm">
                        Helping businesses grow with tailored sales & marketing strategies.
                        We create solutions that deliver real results.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-orange-400" />
                        <div>
                            <p className="text-xs text-gray-400">Support center 24/7</p>
                            <p className="text-lg font-bold">+1 555 707-1234</p>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="#about" className="hover:text-white transition-colors">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#case-studies" className="hover:text-white transition-colors">
                                Case Studies
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white transition-colors">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition-colors">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="#services" className="hover:text-white transition-colors">
                                Brand Awareness Campaigns
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white transition-colors">
                                Performance Marketing
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white transition-colors">
                                SEO & Web Optimization
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white transition-colors">
                                Social Media Marketing
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-white transition-colors">
                                Email Campaigns
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-3 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>Copyright © 2024 Haylo Marketing</p>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms & Conditions
                    </a>
                </div>
            </div>
        </footer>
    );
}