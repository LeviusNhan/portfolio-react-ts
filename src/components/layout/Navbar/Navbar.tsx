import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n/i18n";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
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
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [openLanguage, setOpenLanguage] = useState(false);
    const navItems = [
        { label: t("navbar.home"), href: "/" },
        { label: t("navbar.works"), href: "/works" },
        { label: t("navbar.about"), href: "/about" },
        { label: t("navbar.contacts"), href: "/contact" },
    ]
    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -30,
                filter: "blur(10px)",
            }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="sticky top-0 z-50 bg-[#282C33]"
        >
            <div className="navbarTheme mx-auto flex h-[61px] w-full max-w-[100%] items-center justify-between px-4 lg:px-0">
                {/* Logo */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: .25,
                        duration: .5,
                    }}
                >
                    <Link
                        to="/"
                        className=" group flex items-center gap-2 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:text-[#C778DD]"
                    >
                        <motion.span
                            whileHover={{
                                rotate: 180,
                                scale: 1.15,
                            }}
                            transition={{
                                duration: .4,
                            }}
                            className="text-[#C778DD]"
                        >
                            ■
                        </motion.span>

                        Levius
                    </Link>
                </motion.div>

                {/* Desktop */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <motion.ul
                        className="flex items-center gap-8"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.45,
                                },
                            },
                        }}
                    >
                        {navItems.map((item) => (
                            <motion.li
                                key={item.label}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -12,
                                        filter: "blur(6px)",
                                    },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    },
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        y: -2,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                >
                                    <Link
                                        to={item.href}
                                        className="group transition-all duration-300 hover:tracking-wide"
                                    >
                                        <span className="text-[#C778DD]">#</span>

                                        <span className="transition-all duration-300 hover:tracking-wide">
                                            {item.label}
                                        </span>
                                    </Link>
                                </motion.div>
                            </motion.li>
                        ))}
                    </motion.ul>
                    {/* Dropdown EN/VI */}
                    <motion.div
                        className="relative"
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.9,
                            duration: 0.45,
                        }}
                    >
                        <button
                            onClick={() => setOpenLanguage((prev) => !prev)}
                            className="flex items-center gap-1 text-white transition-all duration-300 hover:text-[#C778DD] hover:scale-105"
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
                                className={`absolute right-0 mt-2 w-20 overflow-hidden border border-[#ABB2BF] bg-[#282C33] shadow-lg origin-top transition-all duration-300
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
                                            i18n.changeLanguage(lang.toLowerCase());
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
                                            }`}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
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
                                <Link
                                    to={item.href}
                                    onClick={() => setOpen(false)}
                                    className="
                                    text-lg
                                    transition-all
                                    duration-300
                                    hover:translate-x-2
                                    "
                                >
                                    <span className="text-[#C778DD]">#</span>
                                    <span className="relative text-[#ABB2BF] transition-colors duration-300 hover:text-white group">{item.label}<span
                                        className="
                                    absolute
                                    left-0
                                    -bottom-1
                                    h-[2px]
                                    w-0
                                    bg-[#C778DD]
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                    "
                                    />
                                    </span>
                                </Link>
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
                                className={`transition-transform duration-300 ${
                                    openLanguage ? "rotate-180" : ""
                                }`}
                                />
                            </button>

                            {/* Mobile dropdown */}

                            <nav
                                className={`
                                overflow-hidden
                                bg-[#282C33]
                                transition-all
                                duration-300
                                ease-in-out

                                ${
                                    openLanguage
                                    ? "max-h-[120px] opacity-100 mt-2 border-t border-[#3A4048]"
                                    : "max-h-0 opacity-0"
                                }
                                `}
                            >
                                {["EN", "VI"].map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => {
                                    i18n.changeLanguage(lang.toLowerCase());
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

                                    ${
                                        language === lang
                                        ? "bg-[#3A4048] text-white"
                                        : "text-[#ABB2BF] hover:bg-[#3A4048] hover:text-white"
                                    }
                                    `}
                                >
                                    {lang}
                                </button>
                                ))}
                            </nav>
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
        </motion.header>
    );
}

export default Navbar;