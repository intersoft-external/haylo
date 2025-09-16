import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Lock, Flag, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import thumbnail from "@/assets/thumbnail.jpg";

// Animation variants
const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
};

const floatingIcon = {
    animate: {
        y: [0, -6, 0],
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
    },
};

const LeadershipSection = () => {
    const cards = [
        {
            title: "Ensuring Integrity in My Actions",
            desc: "I stay true to my word, remain accountable, and foster an environment where ideas can be shared with confidence.",
            icon: <Lock className="h-6 w-6 text-green-700" />,
            bg: "bg-gradient-to-r from-green-50 to-green-100",
            border: "border-green-400",
            iconBg: "bg-green-200",
            textColor: "text-green-900",
            subColor: "text-gray-700",
        },
        {
            title: "Leadership Through Action & Inspiration",
            desc: "By focusing on action over words, I aim to inspire and empower others to achieve their goals.",
            icon: <Flag className="h-6 w-6 text-orange-700" />,
            bg: "bg-gradient-to-r from-orange-50 to-orange-100",
            border: "border-orange-400",
            iconBg: "bg-orange-200",
            textColor: "text-orange-900",
            subColor: "text-orange-700",
        },
        {
            title: "Promoting, Supporting & Empowering Others",
            desc: "I encourage contributions, celebrate achievements, and build motivation through recognition and collaboration.",
            icon: <Users className="h-6 w-6 text-pink-700" />,
            bg: "bg-gradient-to-r from-pink-50 to-pink-100",
            border: "border-pink-400",
            iconBg: "bg-pink-200",
            textColor: "text-pink-900",
            subColor: "text-pink-700",
        },
    ];

    return (
        <section className="relative bg-gradient-to-b from-white via-pink-50 to-orange-50 py-20 px-6 md:px-16 font-sans overflow-hidden">
            {/* Glow background effect */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>

            {/* Heading */}
            <div className="text-center mb-14 relative z-10">
                <motion.h2
                    className="text-4xl font-bold mb-2 text-gray-800"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.3 }} // animate every scroll
                >
                    My Approach to{" "}
                    <span className="relative inline-block text-orange-400">
                        Leadership
                    </span>
                </motion.h2>

                <motion.p
                    className="max-w-2xl mx-auto text-lg text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ amount: 0.3 }} // animate every scroll
                >
                    I believe in leading with integrity, empowering others, and inspiring
                    through action. These values guide how I show up, collaborate, and
                    create meaningful impact.
                </motion.p>
            </div>

            {/* Content Section */}
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ amount: 0.3 }} // animate every scroll
            >
                {/* Left: Leadership Cards */}
                <div className="flex flex-col space-y-8 w-full md:w-1/2">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }} // animate every scroll
                        >
                            <Card
                                className={`relative flex items-start p-6 ${card.bg} border-l-4 ${card.border} rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group`}
                            >
                                {/* Floating Icon */}
                                <motion.div
                                    className={`absolute -left-6 top-6 p-4 rounded-full ${card.iconBg} shadow-lg`}
                                    {...floatingIcon}
                                    whileHover={{ scale: 1.15, rotate: 12 }}
                                >
                                    {card.icon}
                                </motion.div>

                                <div className="ml-12">
                                    <CardTitle
                                        className={`text-xl font-semibold mb-2 ${card.textColor}`}
                                    >
                                        {card.title}
                                    </CardTitle>
                                    <CardContent
                                        className={`p-0 text-sm leading-relaxed ${card.subColor}`}
                                    >
                                        {card.desc}
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Leadership Image with Overlay */}
                <motion.div
                    className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ amount: 0.3 }} // animate every scroll
                    whileHover={{ scale: 1.03 }}
                >
                    <motion.img
                        src={thumbnail}
                        alt="Leadership in action"
                        className="w-full h-full object-cover rounded-2xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Overlay on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-start p-6 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    >
                        <div>
                            <h3 className="text-white text-xl font-semibold">
                                Leading with Purpose
                            </h3>
                            <p className="text-gray-200 text-sm mt-2 max-w-sm">
                                Every action I take reflects my values of integrity,
                                empowerment, and inspiration.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default LeadershipSection;
