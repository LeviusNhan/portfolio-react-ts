import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";

import { useRef } from "react";

import SectionTitle from "../../common/SectionTitle";

const timeline = [
    {
        year: "2022",
        title: "The Beginning",
        subtitle: "Learning Programming",
        description:
            "Started with C and fundamental programming concepts. Every bug fixed became another lesson.",
        background: "BEGIN",
    },
    {
        year: "2023",
        title: "Discovering The Web",
        subtitle: "HTML • CSS • JavaScript",
        description:
            "Responsive layouts, CSS animations and the excitement of bringing ideas to life.",
        background: "WEB",
    },
    {
        year: "2024",
        title: "Modern Front-end",
        subtitle: "React • TypeScript",
        description:
            "Reusable components, scalable architecture and a growing obsession with clean UI.",
        background: "REACT",
    },
    {
        year: "2025",
        title: "Creative Development",
        subtitle: "Motion • UX • Performance",
        description:
            "Turning interfaces into experiences through motion, storytelling and interaction.",
        background: "MOTION",
    },
];

function JourneyTimeline() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 15%", "end end"],
    });

    const lineScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1]),
        {
            stiffness: 120,
            damping: 25,
        }
    );

    return (
        <section
            ref={sectionRef}
            className="
        relative
        mx-auto
        max-w-[1120px]
        overflow-hidden
        px-5
        py-40
      "
        >
            {/* Background Glow */}

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
                className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#C778DD]/10
          blur-[170px]
        "
            />

            {/* Floating Square */}

            <motion.div
                animate={{
                    y: [-30, 40, -30],
                    rotate: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
                className="
          absolute
          right-12
          top-32
          h-10
          w-10
          border
          border-[#C778DD]/20
        "
            />

            <motion.div
                animate={{
                    y: [30, -30, 30],
                    rotate: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
                className="
          absolute
          bottom-20
          left-10
          h-7
          w-7
          border
          border-cyan-400/20
        "
            />

            <SectionTitle title="journey" />

            <div className="relative mt-32">

                {/* Base Line */}

                <div
                    className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            -translate-x-1/2
            bg-[#343941]
          "
                />

                {/* Animated Line */}

                <motion.div
                    style={{
                        scaleY: lineScale,
                        transformOrigin: "top",
                    }}
                    className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-px
            -translate-x-1/2

            bg-gradient-to-b
            from-[#C778DD]
            via-fuchsia-400
            to-cyan-300

            shadow-[0_0_20px_#C778DD]
          "
                />

                {/* Laser */}

                <motion.div
                    style={{
                        top: useTransform(
                            scrollYProgress,
                            [0, 1],
                            ["0%", "100%"]
                        ),
                    }}
                    className="
            absolute
            left-1/2
            z-20
            h-24
            w-1
            -translate-x-1/2

            bg-gradient-to-b
            from-transparent
            via-white
            to-transparent

            blur-sm
          "
                />

                <div className="space-y-52">
                    {timeline.map((item, index) => {
                        const isLeft = index % 2 === 0;

                        const mouseX = useMotionValue(0);
                        const mouseY = useMotionValue(0);

                        const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
                        const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

                        const handleMove = (
                            e: React.MouseEvent<HTMLDivElement>
                        ) => {
                            const rect = e.currentTarget.getBoundingClientRect();

                            mouseX.set(
                                (e.clientX - rect.left) / rect.width - 0.5
                            );

                            mouseY.set(
                                (e.clientY - rect.top) / rect.height - 0.5
                            );
                        };

                        const reset = () => {
                            mouseX.set(0);
                            mouseY.set(0);
                        };

                        return (
                            <motion.div
                                key={item.year}
                                initial={{
                                    opacity: 0,
                                    x: isLeft ? -180 : 180,
                                    filter: "blur(18px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                transition={{
                                    duration: 0.9,
                                    ease: "easeOut",
                                }}
                                className={`
        relative
        flex
        items-center

        ${isLeft ? "justify-start" : "justify-end"}
      `}
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.35, 1],
                                        boxShadow: [
                                            "0 0 0px #C778DD",
                                            "0 0 25px #C778DD",
                                            "0 0 0px #C778DD",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                    className="
          absolute
          left-1/2
          z-20
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          bg-[#C778DD]
        "
                                />
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 0.03,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    className="
          pointer-events-none
          absolute
          left-1/2
          -translate-x-1/2

          text-[180px]

          font-black

          tracking-[20px]

          text-white

          select-none
        "
                                >
                                    {item.background}
                                </motion.h2>
                                <motion.div
                                    onMouseMove={handleMove}
                                    onMouseLeave={reset}
                                    style={{
                                        rotateX,
                                        rotateY,
                                        transformStyle: "preserve-3d",
                                    }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02,
                                    }}
                                    transition={{
                                        duration: .35,
                                    }}
                                    className="
          group
          relative
          w-[470px]
          overflow-hidden
          rounded-3xl
          border
          border-[#3A4048]
          bg-[#2C313A]
          p-10
          transition-all
          duration-500
          hover:border-[#C778DD]
        "
                                >
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        whileHover={{
                                            opacity: 1,
                                        }}
                                        className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-tr

            from-[#C778DD]/10

            via-transparent

            to-cyan-400/10
          "
                                    />
                                    <p
                                        className="
            tracking-[8px]
            text-[#C778DD]
          "
                                    >
                                        {item.year}
                                    </p>
                                    <motion.h3
                                        whileHover={{
                                            x: 6,
                                        }}
                                        className="
            mt-5
            text-5xl
            font-bold
            text-white
          "
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <p
                                        className="
            mt-4
            text-lg
            text-[#C778DD]
          "
                                    >
                                        {item.subtitle}
                                    </p>
                                    <p
                                        className="
            mt-8
            leading-9
            text-[#ABB2BF]
          "
                                    >
                                        {item.description}
                                    </p>
                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        whileInView={{
                                            width: "100%",
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: .3,
                                            duration: .8,
                                        }}
                                        className="
                                        mt-10
                                        h-px

                                        bg-gradient-to-r

                                        from-[#C778DD]

                                        via-fuchsia-400

                                        to-transparent
                                    "
                                    />
                                </motion.div></motion.div>

                        );
                    })}

                </div>

            </div>

        </section>
    );

}

export default JourneyTimeline;