import { motion } from "motion/react";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import SectionTitle from "../../components/common/SectionTitle";
import JourneyTimeline from "../../components/sections/Works/JourneyTimeline";
import Philosophy from "../../components/sections/Works/Philosophy";
import CaseStudy from "../../components/sections/Works/CaseStudy";
function WorksHero() {
    return (
        <main className="min-h-screen text-white mx-auto w-full max-w-[1140px] px-6">
         <Navbar />
            <section className="relative mx-auto max-w-[1120px] overflow-hidden px-5 pt-40 pb-32">

                {/* Background Glow */}

                <div
                    className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-[#C778DD]/10
          blur-[150px]
        "
                />

                {/* Floating Squares */}

                <motion.div
                    animate={{
                        y: [-15, 15, -15],
                        rotate: [0, 12, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                    }}
                    className="
          absolute
          right-24
          top-28
          h-6
          w-6
          border
          border-[#C778DD]/40
        "
                />

                <motion.div
                    animate={{
                        y: [20, -20, 20],
                        rotate: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                    }}
                    className="
          absolute
          bottom-20
          left-20
          h-10
          w-10
          border
          border-cyan-400/30
        "
                />

                <SectionTitle title="works" />

                <div className="mt-24">

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 uppercase tracking-[8px] text-[#C778DD]"
                    >
                        FRONTEND JOURNEY
                    </motion.p>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 60,
                            filter: "blur(12px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="
            max-w-5xl
            text-6xl
            font-bold
            leading-tight
            text-white
            lg:text-7xl
          "
                    >
                        Every interface
                        <br />
                        tells a story.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.25,
                            duration: 0.7,
                        }}
                        className="
            mt-10
            max-w-3xl
            text-xl
            leading-9
            text-[#ABB2BF]
          "
                    >
                        I don't just build websites.
                        <br />
                        I craft digital experiences where every animation,
                        every interaction and every pixel has a purpose.
                    </motion.p>

                </div>

            </section>

            {/* ===== Other Sections ===== */}

            <JourneyTimeline />

            <Philosophy />

            <CaseStudy />
            <Footer />
        </main>
    );
}

export default WorksHero;