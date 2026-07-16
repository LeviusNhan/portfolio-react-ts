import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

const facts = [
  "3+ years learning Front-end",
  "Love UI Animation",
  "Clean Code enthusiast",
  "Coffee addict ☕",
  "Always learning new technologies",
  "Open to freelance",
];

function AboutFacts() {
  return (
    <section className="mx-auto mt-36 max-w-[1120px] px-5">

      <SectionTitle title="fun-facts" />

      <div className="mt-12 flex flex-wrap gap-4 w-full max-w-[1024px] mx-auto">

        {facts.map((fact, index) => (
          <motion.div
            key={fact}
            initial={{
              opacity: 0,
              scale: .8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .08,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="
              rounded-lg
              border
              border-[#3A4048]
              bg-[#2C313A]
              px-5
              py-3
              text-[#ABB2BF]
            "
          >
            {fact}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default AboutFacts;