import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Works", href: "#works" },
    { label: "About-me", href: "#about-me" },
    { label: "Contacts", href: "#contacts" },
];

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
        href: "https://www.figma.com/design/SsAxGreLYpF1GcYDBwsNkK/Portfolio--Community-",
        label: "Figma",
    },
];



function Navbar() {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [openLanguage, setOpenLanguage] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-[#282C33]">
            <div className="navbarTheme mx-auto flex h-[61px] w-full max-w-[1024px] items-center justify-between px-4 lg:px-0">
                {/* Logo */}
                <a
                    href="/"
                    className="
flex
items-center
gap-2
text-base
font-bold
text-white
transition-all
duration-300
hover:scale-105
hover:text-[#C778DD]
"
                >
                    <span className="text-[#C778DD]">■</span>
                    Levius
                </a>

                {/* Desktop */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="
transition-all
duration-300
hover:tracking-wide
"
                                >
                                    <span className="text-[#C778DD]">#</span>
                                    <span className="
transition-all
duration-300
hover:tracking-wide
">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="relative">
                        <button
                            onClick={() => setOpenLanguage((prev) => !prev)}
                            className="
flex
items-center
gap-1
text-white
transition-all
duration-300
hover:text-[#C778DD]
hover:scale-105
"
                        >
                            {language}

                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${openLanguage ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openLanguage && (
                            <div
                                className={`
    absolute
    right-0
    mt-2
    w-20
    overflow-hidden
    border
    border-[#ABB2BF]
    bg-[#282C33]
    shadow-lg
    origin-top
    transition-all
    duration-300
    ${openLanguage
                                        ? "scale-y-100 opacity-100"
                                        : "pointer-events-none scale-y-95 opacity-0"
                                    }
  `}
                            >
                                {["EN", "VI"].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang);
                                            setOpenLanguage(false);
                                        }}
                                        className={`
            block
            w-full
            px-4
            py-2
            text-left
            transition-colors
            duration-300
            ${language === lang
                                                ? "bg-[#3A4048] text-white"
                                                : "text-[#ABB2BF] hover:bg-[#3A4048] hover:text-white"
                                            }
          `}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Tablet + Mobile */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
text-white
transition-all
duration-300
hover:scale-110
active:scale-95
lg:hidden
"
                    aria-label="Toggle navigation"
                >
                    <div
                        className={`
    transition-all
    duration-300
    ${open ? "rotate-180" : "rotate-0"}
  `}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </button>
            </div>

            {/* Mobile / Tablet Menu */}
            {open && (
                <nav className="border-t border-[#3A4048] bg-[#282C33] lg:hidden">
                    <ul className="flex flex-col gap-6 px-6 py-6">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="
text-lg
transition-all
duration-300
hover:translate-x-2
"
                                >
                                    <span className="text-[#C778DD]">#</span>
                                    <span className="text-[#ABB2BF] hover:text-white">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}

                        <div className="w-fit">
                            <button
                                onClick={() => setOpenLanguage((prev) => !prev)}
                                className="flex items-center gap-1 text-white transition-colors duration-200 hover:text-[#C778DD]"
                            >
                                {language}

                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${openLanguage ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <nav
                                className={`
    overflow-hidden
    bg-[#282C33]
    transition-all
    duration-300
    ease-in-out
    lg:hidden
    ${open
                                        ? "max-h-[700px] opacity-100 border-t border-[#3A4048]"
                                        : "max-h-0 opacity-0"
                                    }
  `}
                            ></nav>

                        </div>

                        {/* Chỉ hiện trên Mobile */}
                        <div className="border-t border-[#3A4048] pt-6 md:hidden">
                            <div className="flex justify-center gap-8 text-[#ABB2BF]">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
transition-all
duration-300
hover:-translate-y-1
hover:scale-110
hover:text-white
"
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;