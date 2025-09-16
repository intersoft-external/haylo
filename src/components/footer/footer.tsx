"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from '@/assets/HayloWhite.png'
export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-300 font-sans">
            {/* Top Section */}
            <div className="container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand + About */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 text-orange-400 text-xl font-bold">
                        <span className="text-2xl"><img src={logo} alt="logo" className="w-10 h-10 md:w-full md:h-full text-white"/></span>
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {["About Us", "Case Studies", "Contact Us", "Privacy Policy", "Support"].map(
                            (item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="hover:text-orange-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {[
                            "Brand Awareness Campaigns",
                            "Performance Marketing",
                            "SEO & Web Optimization",
                            "Social Media Marketing",
                            "Email Campaigns",
                        ].map((service, i) => (
                            <li key={i}>
                                <a
                                    href="#"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    {service}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Connect With Me */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-lg font-semibold mb-4 text-white">Connect With Me</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        Stay updated with my latest strategies and insights. Join the
                        newsletter today!
                    </p>

                    {/* Input Field Only */}
                    <div className="flex w-full bg-gray-800 rounded-full shadow-lg mb-4">
                        <div className="flex items-center px-3">
                            <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent outline-none px-3 py-3 text-sm text-gray-200"
                        />
                    </div>

                    {/* Subscribe Button Below */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold transition-all"
                    >
                        <Send className="w-4 h-4" />
                        Subscribe
                    </motion.button>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-6">
                        {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
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
                <p>© 2024 Haylo Marketing. All rights reserved.</p>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
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
