import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

const timeline = [
  {
    year: "2021",
    title: "Started Programming",
    description:
      "Started learning C and basic programming concepts before moving to web development.",
  },
  {
    year: "2022",
    title: "Frontend Journey",
    description:
      "Learned HTML, CSS, JavaScript and built my first responsive websites.",
  },
  {
    year: "2023 - 2025",
    title: "React & TypeScript",
    description:
      "Focused on React, TypeScript, TailwindCSS and modern UI/UX development.",
  },
  {
    year: "2026 - Present",
    title: "Portfolio & Freelance",
    description:
      "Building premium interfaces, improving animations and taking freelance projects.",
  },
];

function AboutTimeline() {
  return (
    <section className="mx-auto mt-36 max-w-[1120px] px-5">
      <SectionTitle title="timeline" />
      <div className="relative mt-16">
        {/* Main Line */}
        <div
          className="
            absolute
            left-[24px]
            top-0
            bottom-0
            w-[2px]
            bg-[#3B4048]
          "
        />

        {/* Glow */}
        <motion.div
          initial={{
            height: 0,
          }}
          whileInView={{
            height: "100%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
          }}
          className="
            absolute
            left-[24px]
            top-0
            w-[2px]
            bg-[#C778DD]
            shadow-[0_0_18px_#C778DD]
          "
        />

        <div className="space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.18,
                duration: .6,
              }}
              className="relative flex gap-10"
            >
              {/* Dot */}
              <motion.div
                whileHover={{
                  scale: 1.3,
                }}
                className="
                  relative
                  z-20
                  mt-2
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border-4
                  border-[#282C33]
                  bg-[#C778DD]
                  shadow-[0_0_20px_#C778DD]
                "
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: .25,
                }}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-[#3B4048]
                  bg-[#2C313A]
                  p-7
                  transition-colors
                  duration-300
                  hover:border-[#C778DD]
                "
              >
                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-widest
                    text-[#C778DD]
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-semibold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-8
                    text-[#ABB2BF]
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AboutTimeline;