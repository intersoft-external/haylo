"use client";

import { motion } from "framer-motion";
import aboutme1 from "@/assets/aboutme1.jpg";
import aboutme2 from "@/assets/aboutme2.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpg";
import img6 from "@/assets/img6.jpg";

// Images array
const images = [
    { src: aboutme1 },
    { src: aboutme2 },
    { src: img2 },
    { src: img4 },
    { src: img3 },
    { src: img6 },
];

// Card sizes (columns x rows)
const cardSizes = [
    { w: 2, h: 2 },
    { w: 1, h: 2 },
    { w: 1, h: 1 },
    { w: 2, h: 1 },
    { w: 1, h: 2 },
    { w: 2, h: 1 },
];

export default function GallerySection() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-12 xl:px-20 py-20 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="uppercase text-sm font-semibold text-orange-500">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Case Studies & Success Stories
                </h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Dynamic, asymmetrical portfolio with overlapping cards.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="relative grid gap-4
                      grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6
                      auto-rows-[180px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[220px]">
                {images.map((image, idx) => {
                    const size = cardSizes[idx % cardSizes.length];

                    return (
                        <motion.div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 w-full"
                            style={{
                                // On small screens, all images span full width
                                gridColumn: `span ${size.w > 1 ? size.w : 1}`,
                                gridRow: `span ${size.h}`,
                                zIndex: idx,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <img
                                src={image.src}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
