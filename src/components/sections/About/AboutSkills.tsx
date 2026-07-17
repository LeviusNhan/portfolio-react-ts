import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
      "Bootstrap",
      "TypeScript",
      "React",
      "Vite",
    ],
  },
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Github",
      "VSCode",
      "Figma",
      "Postman",
    ],
  },
];

function AboutSkills() {
  return (
    <section className="mx-auto mt-36 max-w-[1120px] px-5">
      <SectionTitle title="skills" />
      <div className="mt-12 grid gap-6 md:grid-cols-3 w-full max-w-[1024px] mx-auto">
        {skills.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * .15,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              rounded-xl
              border
              border-[#3A4048]
              bg-[#2C313A]
              p-6
            "
          >
            <h3 className="mb-5 text-xl font-semibold text-white">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-md
                    border
                    border-[#434852]
                    px-3
                    py-1
                    text-sm
                    text-[#ABB2BF]
                  "
                >
                  {item}
                </span>
              ))}

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default AboutSkills;