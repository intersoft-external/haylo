import {easeInOut, motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import aboutMe1 from "@/assets/aboutme1.jpg";
import aboutMe2 from "@/assets/aboutme2.jpg";

// Variants
const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.2}
    },
};

const itemVariants = {
    hidden: {opacity: 0, y: 40},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.8, type: "spring" as const},
    },
};

// Floating effect for overlay image
const floating = {
    animate: {
        y: [0, -12, 0],
        rotate: [0, 2, -2, 0],
        transition: {duration: 4, repeat: Infinity, ease: easeInOut},
    },
};

const AboutMe = () => {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-20
        bg-gradient-to-br from-pink-50 via-purple-50 to-green-50 rounded-2xl shadow-xl"
        >
            {/* Left Images */}
            <motion.div
                className="relative flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                variants={containerVariants}
            >
                {/* Main Image */}
                <motion.img
                    src={aboutMe1}
                    alt="aboutMe1"
                    className="rounded-xl shadow-2xl w-full md:w-[75%] object-cover"
                    variants={itemVariants}
                />

                {/* Small Overlay Image with floating effect */}
                <motion.div
                    className="absolute bottom-[-30px] right-[-30px] group"
                    variants={itemVariants}
                    {...floating}
                >
                    <motion.img
                        src={aboutMe2}
                        alt="aboutMe2"
                        className="w-36 md:w-48 rounded-lg shadow-2xl border-4 border-white
              transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                    />
                    {/* Hover details */}
                    <div
                        className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0
              group-hover:opacity-100 transition bg-black/70 text-white text-xs
              px-3 py-1 rounded-md shadow-lg"
                    >
                        My Daily Workspace
                    </div>
                </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.3}}
                variants={containerVariants}
            >
                {/* Small Heading */}
                <motion.div className="inline-block" variants={itemVariants}>
          <span className="uppercase tracking-wide text-xl font-medium text-green-600">
            Who Am I
          </span>
                    <motion.div
                        className="mt-1 h-[2px] w-10 bg-green-600 rounded"
                        initial={{scaleX: 0}}
                        animate={{scaleX: 1}}
                        transition={{duration: 0.6, delay: 0.2}}
                    />
                </motion.div>

                {/* Name */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-brown-700"
                    variants={itemVariants}
                >
                    Hayley Sproston
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    className="text-sm md:text-base text-gray-700 leading-relaxed"
                    variants={itemVariants}
                >
                    If you have a passion for business, marketing, and sales then our
                    passions align. If you equally value the importance of clearly defined
                    goals, then we thrive in similar environments. I am committed to
                    developing my abilities and knowledge because it ensures I bring
                    genuine value to key relationships.
                    <br/>
                    <br/>
                    I built the{" "}
                    <span className="font-semibold text-brown-700">Haylo</span> brand to
                    bring clarity to my business focus. Identifying myself as my primary
                    brand ensures I am continuously engaged in the importance of every
                    aspect of my actions.
                </motion.p>

                {/* Button */}
                <motion.div variants={itemVariants}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
                        <Button
                            className="bg-gradient-to-r from-pink-400 to-purple-400
                hover:from-pink-500 hover:to-purple-500
                text-white font-semibold px-6 py-3 rounded-lg
                shadow-lg text-sm md:text-base transition"
                        >
                            More About Me
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
