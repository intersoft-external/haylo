"use client";

import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
import aboutme1 from "@/assets/aboutme1.jpg";
import aboutme2 from "@/assets/aboutme2.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpeg";
import img4 from "@/assets/img4.jpg";
import img6 from "@/assets/img6.jpg";

const images = [
    { src: aboutme1 },
    { src: aboutme2 },
    { src: img2 },
    { src: img4 },
    { src: img3 },
    { src: img6 },
];

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
            <div className="text-center mb-16">
                <span className="uppercase text-sm font-semibold text-orange-500">Our Work</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Case Studies & Success Stories
                </h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Dynamic, asymmetrical portfolio with overlapping cards.
                </p>
            </div>

            <div className="relative grid grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
                {images.map((image, idx) => {
                    const size = cardSizes[idx % cardSizes.length];
                    const yOffset = Math.floor(Math.random() * 40 - 20);

                    return (
                        <motion.div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                            style={{
                                gridColumn: `span ${size.w}`,
                                gridRow: `span ${size.h}`,
                                y: yOffset,
                                zIndex: idx,
                            }}
                        >
                            <img
                                src={image.src}
                                alt=""
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
