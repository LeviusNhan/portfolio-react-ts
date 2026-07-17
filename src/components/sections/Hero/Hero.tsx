import Avatar from "../../../assets/images/me.png";
import Shape from "../../../assets/images/Logo.svg";
import StatusCard from "../../ui/StatusCard";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

function Hero() {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.18,
          },
        },
      }}
      className="heroTheme mx-auto mt-0 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* LEFT */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -60,
            filter: "blur(12px)",
          },
          show: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
            },
          },
        }}
        className="w-full max-w-[540px]"
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }} className="text-3xl md:text-4xl font-semibold leading-[42px] text-white">
          {t("hero.title1")}
          <br />
          <span className="text-[#C778DD]">{t("hero.designer")}</span>
          <br />
          <span className="text-[#C778DD]">{t("hero.developer")}</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.55,
            duration: 0.6,
          }} className="mt-8 w-full max-w-[460px] text-base leading-7 text-[#ABB2BF]">
          {t("hero.description")}
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.45,
          }}
          whileHover={{
            y: -4,
            scale: 1.04,
            boxShadow: "0 0 20px rgba(199,120,221,.25)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            mt-8
            border
            border-[#C778DD]
            px-4
            py-2
            text-white
            transition
            hover:bg-[#C778DD]/20
            self-start
          "
        >
          {t("hero.button")}
        </motion.button>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          x: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          delay: 0.65,
          duration: 0.9,
          ease: "easeOut",
        }} className="
        relative
        mx-auto
        w-full
        max-w-[470px]
        h-[320px]
        md:h-[420px]
      ">

        {/* Shape */}
        <motion.img
          whileHover={{
            y: -8,
            scale: 1.02,
          }}

          transition={{
            duration: 0.35,
          }}
          src={Shape}
          alt=""
          className="
            absolute
            left-0
            top-16
            w-1/3
            max-w-[155px]
          "
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-12
            right-10
            h-60
            w-60
            rounded-full
            bg-[#C778DD]/20
            blur-[90px]
            -z-10
          "
        />
        <motion.img
          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={Avatar}
          alt="Levius"
          className="
            absolute
            bottom-16
            lg:bottom-14
            right-0
            w-[85%]
            max-w-[420px]
            md:w-full
          "
        />
        <div
          className="
            absolute
            bottom-10
            -translate-x-1/2
            lg:left-20
            left-20
            lg:translate-x-4
            translate-x-4
            z-20
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.6,
            }}
          >
            <StatusCard
              text="Currently working on"
              highlight="Portfolio"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;