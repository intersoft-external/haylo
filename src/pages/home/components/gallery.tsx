"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import aboutme1 from "@/assets/aboutme1.jpg";
import aboutme2 from "@/assets/aboutme2.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpg";
import img6 from "@/assets/img6.jpg";

const images = [
    { src: aboutme1, hoverTitle: "Launch Details", hoverDesc: "Initial MVP & strategy." },
    { src: aboutme2, hoverTitle: "Collaboration Insights", hoverDesc: "Teams collaborated globally." },
    { src: img2, hoverTitle: "Strategy Breakdown", hoverDesc: "Comprehensive content roadmap." },
    { src: img3, hoverTitle: "Creative Process", hoverDesc: "Ideation & brainstorming sessions." },
    { src: img4, hoverTitle: "Analytics Deep Dive", hoverDesc: "Optimized campaign performance." },
    { src: img6, hoverTitle: "Brand Guidelines", hoverDesc: "Consistent visuals & messaging." },
];

// Card sizes (width x height) in grid units
const cardSizes = [
    { w: 2, h: 2 },
    { w: 1, h: 2 },
    { w: 1, h: 1 },
    { w: 2, h: 1 },
    { w: 1, h: 2 },
    { w: 2, h: 1 },
];

export default function GallerySection() {
    const [offsets, setOffsets] = useState<{ y: number; z: number }[]>([]);
    const scrollY = useMotionValue(0);

    useEffect(() => {
        setOffsets(
            images.map(() => ({
                y: Math.floor(Math.random() * 60 - 30), // -30px → +30px
                z: Math.floor(Math.random() * 10),
            }))
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => scrollY.set(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    return (
        <section className="relative px-6 md:px-20 py-20 overflow-hidden">
            <div className="text-center mb-16">
                <span className="uppercase text-sm font-semibold text-orange-500">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Case Studies & Success Stories
                </h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Dynamic, asymmetrical portfolio with overlapping cards.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="relative grid grid-cols-6 auto-rows-[150px] gap-4">
                {images.map((image, idx) => {
                    const yOffset = useTransform(scrollY, [0, 500], [0, offsets[idx]?.y || 0]);

                    const size = cardSizes[idx % cardSizes.length];

                    return (
                        <motion.div
                            key={idx}
                            className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                            style={{
                                gridColumn: `span ${size.w}`,
                                gridRow: `span ${size.h}`,
                                y: yOffset,
                                zIndex: offsets[idx]?.z,
                            }}
                            whileHover={{ scale: 1.05, y: -10, zIndex: 50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={image.src}
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                            />

                            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
                                <h3 className="text-white text-lg font-semibold">{image.hoverTitle}</h3>
                                <p className="text-gray-200 text-sm mt-2">{image.hoverDesc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
