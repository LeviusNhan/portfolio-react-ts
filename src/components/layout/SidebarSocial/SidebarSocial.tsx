import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

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
      <aside className="fixed left-6 top-0 z-40 hidden h-screen w-8 flex-col items-center lg:flex">
        <div className="h-48 w-px bg-[#ABB2BF]" />

        <div className="mt-6 flex flex-col gap-5 text-[#ABB2BF]">
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
      </aside>

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