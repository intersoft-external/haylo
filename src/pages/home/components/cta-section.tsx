import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            duration: 0.7,
        },
    },
};

const CtaSection = () => {
    return (
        <motion.section
            className="flex flex-col items-center justify-center py-20 px-6 md:px-16
                 bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50
                 text-gray-900 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "Sirivennela, serif" }}
                variants={itemVariants}
            >
                Ready to Grow Your Business?
            </motion.h2>

            <motion.p
                className="max-w-2xl text-base md:text-lg mb-8 text-gray-600 leading-relaxed"
                style={{ fontFamily: "Sirivennela, serif" }}
                variants={itemVariants}
            >
                If you're a business owner seeking to expand your marketing and sales,
                let's connect. My values, goals, and drive are a direct investment in
                your future success.
            </motion.p>

            <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    style={{ fontFamily: "Sirivennela, serif" }}
                    className="cursor-pointer bg-gradient-to-r from-pink-500 to-orange-500
                     hover:from-pink-600 hover:to-orange-600
                     text-white font-semibold py-4 px-10 rounded-full
                     transition-all duration-300 text-lg shadow-md"
                >
                    Schedule a Consultation
                </Button>
            </motion.div>
        </motion.section>
    );
};

export default CtaSection;
