import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "@/pages/wrapper";
import { Mail, User, MessageCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <Wrapper>
            <section className="relative bg-gradient-to-tr from-pink-50 via-orange-50 to-pink-50 py-16 px-4 md:px-10 flex justify-center overflow-hidden">
                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute top-10 left-10 text-pink-300 opacity-20"
                >
                    <Mail size={40} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute bottom-10 right-20 text-orange-300 opacity-20"
                >
                    <User size={50} />
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-full max-w-xl bg-gray-900/80 rounded-2xl shadow-lg p-8 flex flex-col gap-5 backdrop-blur-sm border border-pink-400/40"
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-2">Contact Me</h2>
                    <p className="text-center text-gray-200 mb-5 text-sm md:text-base">
                        Have a question? Send me a message below.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Name */}
                        <div className="relative flex items-center">
                            <User className="absolute left-3 text-pink-400 opacity-70" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="w-full pl-10 pr-3 py-2 bg-gray-800/70 rounded-lg text-white border-b-2 border-white/30 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative flex items-center">
                            <Mail className="absolute left-3 text-pink-400 opacity-70" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your Email"
                                className="w-full pl-10 pr-3 py-2 bg-gray-800/70 rounded-lg text-white border-b-2 border-white/30 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div className="relative flex items-start">
                            <MessageCircle className="absolute left-3 top-3.5 text-pink-400 opacity-70" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Your Message"
                                className="w-full pl-10 pr-3 py-2 bg-gray-800/70 rounded-lg text-white border-b-2 border-white/30 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 outline-none transition-all text-sm resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all text-sm"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </section>
        </Wrapper>
    );
}
