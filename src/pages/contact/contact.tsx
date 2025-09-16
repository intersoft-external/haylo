"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "@/pages/wrapper";
import {
    Mail,
    User,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
} from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    const socialLinks = [
        { Icon: Facebook, href: "https://facebook.com" },
        { Icon: Instagram, href: "https://instagram.com" },
        { Icon: Twitter, href: "https://twitter.com" },
        { Icon: Linkedin, href: "https://linkedin.com" },
    ];

    return (
        <Wrapper>
            <section className="relative bg-gradient-to-tr from-pink-50 via-yellow-50 to-orange-50 py-24 px-6 md:px-16 flex flex-col items-center min-h-screen overflow-hidden">

                {/* Info Section outside the card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-5xl mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Welcome to My Portfolio & Services
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg mb-3 leading-relaxed">
                        Explore my projects, case studies, and services offered.
                        Each work demonstrates my dedication to quality, creative design, and client satisfaction.
                    </p>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Want to collaborate or have a question? Fill out the contact form below and I’ll get back to you promptly.
                    </p>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-2xl rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col gap-6 text-center bg-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Contact Me</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-pink-400 opacity-70" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-gray-800"
                            />
                        </div>

                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-pink-400 opacity-70" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-gray-800"
                            />
                        </div>

                        <div className="relative">
                            <MessageCircle className="absolute left-3 top-3.5 text-pink-400 opacity-70" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Your Message"
                                className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border border-gray-300 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-gray-800 resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.3)" }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            Send Message
                        </motion.button>
                    </form>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mt-6">
                        {socialLinks.map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-pink-500 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300 shadow-md"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </section>

            <footer className="py-10 px-6 md:px-16 bg-gray-50 text-gray-600 text-center text-sm">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </footer>
        </Wrapper>
    );
}
