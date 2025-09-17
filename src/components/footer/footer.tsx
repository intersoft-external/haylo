import { motion } from "framer-motion";
import { Phone, Mail, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/HayloWhite.png";

const quickLinks = ["About Us", "Case Studies", "Contact Us", "Privacy Policy", "Support"];
const services = [
    "Brand Awareness Campaigns",
    "Performance Marketing",
    "SEO & Web Optimization",
    "Social Media Marketing",
    "Email Campaigns",
];
const socials = [Facebook, Instagram, Twitter, Linkedin];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true },
});

export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-300 font-sans">
            {/* Top Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand + About */}
                <motion.div {...fadeUp(0)}>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
                    </div>
                    <p className="text-sm mt-4 text-gray-400 max-w-sm">
                        Helping businesses grow with tailored sales & marketing strategies.
                        We create solutions that deliver real results.
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <Phone className="w-5 h-5 text-orange-400" />
                        <div>
                            <p className="text-xs text-gray-400">Support center 24/7</p>
                            <p className="text-lg font-bold text-white">+1 555 707-1234</p>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div {...fadeUp(0.2)}>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {quickLinks.map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-orange-400 transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div {...fadeUp(0.4)}>
                    <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {services.map((service, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-orange-400 transition-colors">
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Newsletter + Socials */}
                <motion.div {...fadeUp(0.6)}>
                    <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Stay updated with my latest strategies and insights. Join the
                        newsletter today!
                    </p>

                    {/* Input + Button (stack on mobile, inline on md+) */}
                    <div className="flex md:flex-col flex-row gap-3 mb-4">
                        {/* Input field with icon */}
                        <div className="flex flex-1 items-center bg-gray-800 rounded-full shadow-lg px-3">
                            <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent outline-none px-3 py-3 text-sm text-gray-200"
                            />
                        </div>

                        {/* Subscribe Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-all w-full sm:w-auto"
                        >
                            <Send className="w-4 h-4" />
                            Subscribe
                        </motion.button>
                    </div>

                    {/* Social Icons (center on mobile, left on md+) */}
                    <div className="flex justify-center sm:justify-start gap-4 mt-4">
                        {socials.map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                            >
                                <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t border-gray-800 py-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500"
            >
                <p className="text-center md:text-left">© 2025 Haylo Marketing. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-3 md:mt-0">
                    <a href="#" className="hover:text-orange-400 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-orange-400 transition-colors">
                        Terms & Conditions
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}
