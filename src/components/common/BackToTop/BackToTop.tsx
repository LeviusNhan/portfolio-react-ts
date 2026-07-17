import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 40,
      }}
      animate={
        show
          ? {
              opacity: 1,
              scale: 1,
              y: 0,
            }
          : {
              opacity: 0,
              scale: 0.5,
              y: 40,
            }
      }
      whileHover={{
        scale: 1.12,
        y: -6,
      }}
      whileTap={{
        scale: 0.92,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        fixed
        bottom-10
        right-10
        z-[999]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        border
        border-[#C778DD]/40

        bg-[#2C313A]/80

        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          inset-0
          rounded-full

          bg-[#C778DD]/30

          blur-xl
        "
      />

      <FaArrowUp className="relative z-10 text-white" />
    </motion.button>
  );
}

export default BackToTop;