"use client";

import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";
import aboutme1 from "@/assets/aboutme1.jpg";
import aboutme2 from "@/assets/aboutme2.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpg";
import img6 from "@/assets/img6.jpg";
import bgImage from "@/assets/Haylo-Big.png";

const images = [
    {
        src: aboutme1,
        title: "Project Launch",
        desc: "Laying foundations for growth.",
        hoverTitle: "Launch Details",
        hoverDesc: "This project involved building the initial MVP and strategy.",
    },
    {
        src: aboutme2,
        title: "Team Collaboration",
        desc: "Global teamwork in action.",
        hoverTitle: "Collaboration Insights",
        hoverDesc: "Teams across continents collaborated using agile methodology.",
    },
    {
        src: img2,
        title: "Content Strategy",
        desc: "Mapping out strong messaging.",
        hoverTitle: "Strategy Breakdown",
        hoverDesc: "Developed a comprehensive content roadmap for the client.",
    },
    {
        src: img3,
        title: "Creative Insights",
        desc: "Brainstorming impactful ideas.",
        hoverTitle: "Creative Process",
        hoverDesc: "Facilitated ideation sessions to generate innovative solutions.",
    },
    {
        src: img4,
        title: "Performance Review",
        desc: "Measuring ROI with precision.",
        hoverTitle: "Analytics Deep Dive",
        hoverDesc: "Analyzed KPIs to optimize campaign performance and ROI.",
    },
    {
        src: img6,
        title: "Brand Identity",
        desc: "Defining unique visual style.",
        hoverTitle: "Brand Guidelines",
        hoverDesc: "Created consistent visuals and messaging for brand recognition.",
    },
];

// Animation Variants
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // ✅ Correct type for ease
    },
};

// Hover animation typed
const hoverTransition: TargetAndTransition = {
    scale: 1.05,
    y: -3,
    transition: { type: "spring", stiffness: 200 },
};

const GallerySection = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img
                    src={bgImage}
                    alt="Gallery Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
          <span className="uppercase text-sm font-semibold text-orange-500">
            Our Work
          </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Case Studies & Success Stories
                    </h2>
                    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                        Explore our portfolio of successful projects and see how we’ve helped clients achieve their goals.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {images.map((image, idx) => (
                        <motion.div
                            key={idx}
                            className="relative rounded-xl shadow-xl overflow-hidden group bg-white border border-gray-100 cursor-pointer will-change-transform"
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ delay: idx * 0.15 }}
                            whileHover={hoverTransition}
                        >
                            {/* Card Image */}
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                                <h3 className="text-white text-lg font-semibold">{image.hoverTitle}</h3>
                                <p className="text-gray-200 text-sm mt-2">{image.hoverDesc}</p>
                            </div>

                            {/* Card Details */}
                            <div className="absolute bottom-0 left-0 w-full bg-white p-4 transition-all duration-300 group-hover:opacity-0">
                                <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">{image.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
