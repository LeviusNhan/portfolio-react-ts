import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  action?: string;
};

function SectionTitle({ title, action }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: 0.7,
      }}
      className="flex items-center justify-between"
    >
      <div className="flex flex-1 items-center gap-4">

        {/* Title */}

        <h2 className="flex items-center whitespace-nowrap text-[32px] font-semibold text-white">

          {/* # */}

          <motion.span
            animate={{
              scale: [1, 1.18, 1],
              opacity: [1, 0.8, 1],
              textShadow: [
                "0 0 0px #C778DD",
                "0 0 14px #C778DD",
                "0 0 0px #C778DD",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mr-1 text-[#C778DD]"
          >
            #
          </motion.span>

          {title}
        </h2>

        {/* Line */}

        <div className="relative h-[2px] w-full max-w-[500px] overflow-hidden rounded-full bg-[#3D4148]">

          {/* Purple Line */}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
                      absolute
                      inset-0
                      z-10
                      bg-gradient-to-r from-[#C778DD] via-fuchsia-400 to-cyan-300
                    "
          />

          {/* Laser Scan */}

          <motion.div
            initial={{
              left: "-30%",
            }}
            animate={{
              left: "130%",
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.8,
              ease: "linear",
            }}
            className="
                      absolute
                      top-1/2
                      z-20
                      h-[10px]
                      w-28
                      -translate-y-1/2
                      -skew-x-12

                      bg-gradient-to-r
                      from-transparent
                      via-white
                      to-[#C778DD]

                      blur-md
                      opacity-90
                      "
          />

        </div>
      </div>

      {action && (
        <motion.a
          href="#"
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="
            ml-6
            flex
            items-center
            gap-2
            whitespace-nowrap
            text-white
            transition-colors
            duration-300
            hover:text-[#C778DD]
          "
        >
          <span>{action}</span>

          <motion.span
            variants={{
              rest: {
                rotate: 0,
                x: 0,
                y: 0,
                scale: 1,
              },

              hover: {
                rotate: [0, 18, -10, 0],
                x: [0, 2, 5],
                y: [0, -2, -5],
                scale: [1, 1.12, 1.08],
              },
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </motion.a>
      )}
    </motion.div>
  );
}

export default SectionTitle;