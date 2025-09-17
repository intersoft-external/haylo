import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    Megaphone,
    Users,
    Globe,
    LineChart,
    Lightbulb,
} from "lucide-react";

const services = [
    {
        icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
        title: "Sales Strategy",
        desc: "Develop tailored sales roadmaps that maximize conversions, strengthen pipelines, and drive long-term growth.",
    },
    {
        icon: <Megaphone className="w-6 h-6 text-orange-600" />,
        title: "Digital Marketing",
        desc: "Boost your online visibility with data-driven campaigns across social media, search, and paid ads.",
    },
    {
        icon: <Users className="w-6 h-6 text-orange-600" />,
        title: "Customer Engagement",
        desc: "Build lasting relationships through CRM optimization, loyalty programs, and community-focused strategies.",
    },
    {
        icon: <Globe className="w-6 h-6 text-orange-600" />,
        title: "Brand Management",
        desc: "Create, position, and grow your brand identity to stand out in competitive markets globally.",
    },
    {
        icon: <LineChart className="w-6 h-6 text-orange-600" />,
        title: "Market Research",
        desc: "Gain deep insights into your audience and competitors to make informed, data-driven decisions.",
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
        title: "Creative Campaigns",
        desc: "Design bold, innovative campaigns that capture attention, spark conversations, and deliver results.",
    },
];

// Container animation for staggered entrance
const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

// Card animation
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, type: "spring", stiffness: 120 },
    },
};

const ServicesSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20 bg-white relative">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="uppercase text-sm font-semibold text-orange-500">
                    Our Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    Driving Growth with Sales & Marketing Excellence
                </h2>
                <p className="text-gray-600 mt-4 text-base">
                    From building impactful brands to executing conversion-focused
                    strategies, we provide end-to-end sales and marketing solutions
                    designed to scale your business.
                </p>
            </div>

            {/* Cards */}
            <motion.div
                className="relative flex items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white rounded-xl rounded-br-[4rem] shadow-md p-6 border overflow-hidden group cursor-pointer transition-all"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                            }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="bg-orange-100 p-3 rounded-lg inline-block mb-4"
                                whileHover={{ scale: 1.15, rotate: 8 }}
                            >
                                {service.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 text-sm">{service.desc}</p>

                            {/* Button */}
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md shadow-md transition">
                                    Learn More
                                </Button>
                            </motion.div>

                            {/* Bottom curve */}
                            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-orange-300 rounded-b-full" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesSection;
