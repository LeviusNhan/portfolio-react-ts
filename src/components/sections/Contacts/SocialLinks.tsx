import { motion } from "motion/react";

import {
  ArrowUpRight,
  FileText,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  {
    title: "Github",
    subtitle: "View my repositories",
    icon: FaGithub,
    href: "https://github.com/LeviusNhan",
  },
  {
    title: "LinkedIn",
    subtitle: "Let's connect",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/leviusnhan-fe1203/",
  },
  {
    title: "Facebook",
    subtitle: "Personal profile",
    icon: FaFacebook,
    href: "https://www.facebook.com/elias.otis.2025",
  },
  {
    title: "Download CV",
    subtitle: "PDF Resume",
    icon: FileText,
    href: "/files/minhnhan-resume.pdf",
  },
];

function SocialLinks() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.25,
      }}
      className="
        rounded-xl
        border
        border-[#3A4048]
        bg-[#2C313A]
        p-7
      "
    >
      <h3 className="mb-6 text-xl font-semibold text-white">
        Social
      </h3>

      <div className="space-y-3">
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 6,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-[#40454F]
                px-4
                py-4
                transition-all
                duration-300
                hover:border-[#C778DD]
                hover:bg-[#C778DD]/5
              "
            >
              <div className="flex items-center gap-4">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#343941]
                    text-[#C778DD]
                  "
                >
                  <Icon size={20} />
                </motion.div>

                <div>
                  <h4 className="font-medium text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#8B919B]">
                    {item.subtitle}
                  </p>
                </div>

              </div>

              <motion.div
                whileHover={{
                  x: 5,
                  y: -5,
                  rotate: -12,
                }}
              >
                <ArrowUpRight
                  size={18}
                  className="
                    text-[#ABB2BF]
                    transition-colors
                    group-hover:text-[#C778DD]
                  "
                />
              </motion.div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SocialLinks;