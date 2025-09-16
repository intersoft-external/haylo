"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 20, duration: 0.7 },
    },
};

const CtaSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <motion.section
            className="py-20 px-6 md:px-16 bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <motion.div className="text-center md:text-left" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "Sirivennela, serif" }}>
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        If you're a business owner seeking to expand your marketing and sales,
                        let's connect. My values, goals, and drive are a direct investment in
                        your future success.
                    </p>
                </motion.div>

                {/* Right Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col gap-6"
                    variants={itemVariants}
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none text-gray-900 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none text-gray-900 transition"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full p-4 rounded-xl border border-gray-300 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none text-gray-900 transition resize-none"
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="self-center w-full md:w-auto">
                        <Button
                            type="submit"
                            style={{ fontFamily: "Sirivennela, serif" }}
                            className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-4 px-10 rounded-full shadow-md transition-all duration-300"
                        >
                            Connect With Me
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default CtaSection;
