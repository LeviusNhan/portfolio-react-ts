import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import { motion } from "motion/react";

const socialLinks = [
  {
    icon: <FaGithub size={22} />,
    href: "https://github.com/LeviusNhan",
    label: "Github",
  },
  {
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/leviusnhan-fe1203/",
    label: "LinkedIn",
  },
  {
    icon: <FaFigma size={22} />,
    href: "https://www.figma.com/design/SsAxGreLYpF1GcYDBwsNkK/Portfolio--Community-?node-id=0-1&p=f&t=eQI3HoAyhmdBGRfK-0",
    label: "Figma",
  },
];

function SidebarSocial() {
  return (
    <>
      {/* ================= Desktop ================= */}
      <motion.aside
    initial={{
        opacity:0,
        x:-30
    }}
    animate={{
        opacity:1,
        x:0
    }}
    transition={{
        delay:1,
        duration:.6
    }}
    className="fixed left-6 top-0 hidden xl:flex flex-col items-center"
>
        <motion.div
    initial={{
        height:0
    }}
    animate={{
        height:190
    }}
    transition={{
        delay:1.1,
        duration:.5
    }}
    className="w-px bg-[#ABB2BF]"
/>

        <div className="mt-6 flex flex-col gap-5 text-[#ABB2BF]">
          {socialLinks.map((item,index)=>(
<motion.a
    key={item.label}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"

    initial={{
        opacity:0,
        y:-12
    }}

    animate={{
        opacity:1,
        y:0
    }}

    transition={{
        delay:1.45+index*.12,
        duration:.35
    }}

    whileHover={{
        y:-4,
        scale:1.18,
        color:"#C778DD"
    }}

    whileTap={{
        scale:.92
    }}

    className="text-[#ABB2BF] transition-colors duration-300"
>
    {item.icon}
</motion.a>
))}
        </div>
      </motion.aside>

      {/* ================= Tablet ================= */}
      <div className="mx-auto hidden w-full max-w-[1024px] px-4 md:block lg:hidden">
        <div className="flex items-center justify-center gap-8 border-y border-[#3A4048] py-5 text-[#ABB2BF]">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default SidebarSocial;