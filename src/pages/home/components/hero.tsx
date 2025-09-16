
import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";
import { ChevronRight } from "lucide-react";
import img1 from "@/assets/thumbnail.jpg";
import { Star, Briefcase, BarChart3 } from "lucide-react";
// Animations
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// Type-safe hover transition
const buttonHover: TargetAndTransition = {
    scale: 1.05,
    transition: {
        type: "spring",
        stiffness: 300,
    },
};

const HeroSection = () => {
    const backgroundImage = img1;

    return (
        <section
            className="relative min-h-screen flex flex-col justify-between bg-black text-white py-20"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Content */}
            <div className="flex-grow flex items-center justify-start relative z-10">
                <motion.div
                    className="px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    {/* Left content */}
                    <div className="w-full space-y-6 text-center lg:text-left">
                        <motion.h1
                            className="text-4xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
                            variants={itemVariants}
                        >
                            Hi I'm{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Hayley Sproston{" "}
              </span>
                            <span className="bg-clip-text text-white">
                Grow Your Business Smarter
              </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0"
                            variants={itemVariants}
                        >
                            Marketing & sales strategies tailored to help brands achieve faster,
                            smarter growth — with measurable impact.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
                                whileHover={buttonHover}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Portfolio
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </motion.button>

                            <motion.button
                                className="border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
                                whileHover={buttonHover}
                                whileTap={{ scale: 0.95 }}
                            >
                               Connect With Me
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Empty space for right half */}
                    <div className="hidden lg:block lg:w-1/2"></div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <div className="relative ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    {[
                        { number: "5+", label: "Years Experience", icon: <Briefcase className="w-12 h-12 text-orange-500" /> },
                        { number: "200%", label: "ROI Increase", icon: <BarChart3 className="w-12 h-12 text-orange-500" /> },
                        { number: "50+", label: "Projects Completed", icon: <Star className="w-12 h-12 text-orange-500" /> },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ amount: 0.3 }}
                        >
                            {/* Floating Icon */}
                            <motion.div
                                className="mb-4"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Number */}
                            <div className="text-4xl font-extrabold text-orange-500">
                                {stat.number}
                            </div>

                            {/* Label */}
                            <div className="mt-2 text-gray-200 text-lg">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
