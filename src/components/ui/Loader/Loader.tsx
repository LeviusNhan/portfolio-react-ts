import { motion } from "motion/react";

interface LoaderProps {
  progress: number;
}

const TITLE = "MINH NHAN DEVELOPER";

function Loader({ progress }: LoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        flex
        items-center
        justify-center
        bg-[#0E1014]
      "
    >
      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#343D4B_0%,#20242A_40%,#14171B_75%,#0E1014_100%)]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          hidden
          lg:block

          absolute
          -left-52
          top-1/4

          h-[500px]
          w-[500px]

          rounded-full

          bg-[#C778DD]/15

          blur-[180px]
        "
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          hidden
          lg:block

          absolute
          -right-52
          bottom-1/4

          h-[450px]
          w-[450px]

          rounded-full

          bg-cyan-400/10

          blur-[180px]
        "
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
              {/* Scan Line */}
      <motion.div
        animate={{
          x: ["-180%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          h-[140%]
          w-32
          -translate-y-1/2
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-[#C778DD]/40
          to-transparent
          blur-xl
        "
      />

      {/* Title */}
      <div className="relative flex whitespace-nowrap">
        {TITLE.split("").map((letter, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -6, 0],
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.06,
            }}
            className={`
              ${
                letter === " "
                  ? "w-3 md:w-4"
                  : ""
              }

              whitespace-pre

              font-extrabold

              tracking-[0.08em]

              text-white

              text-[24px]

              sm:text-[30px]

              md:text-[40px]

              lg:text-[54px]
            `}
            style={{
              textShadow:
                "0 0 10px rgba(199,120,221,.25),0 0 25px rgba(199,120,221,.15)",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Bottom Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          absolute
          -bottom-32

          right-0

          flex
          flex-col
          items-end

          select-none
        "
      >
        <span
          className="
            text-4xl

            font-bold

            tracking-[0.18em]

            text-white
          "
        >
          {progress.toString().padStart(3, "0")}%
        </span>

        <span
          className="
            mt-2

            text-xs

            uppercase

            tracking-[0.4em]

            text-[#ABB2BF]
          "
        >
          INITIALIZING
        </span>
      </motion.div>
            {/* Bottom Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          -bottom-44

          text-xs

          uppercase

          tracking-[0.45em]

          text-[#6C7480]
        "
      >
        FRONT-END DEVELOPER
      </motion.div>

      {/* Breathing Ring */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -z-10

          h-[260px]
          w-[260px]

          rounded-full

          border

          border-[#C778DD]/20

          blur-sm
        "
      />

    </div>

    {/* Vignette */}
    <div
      className="
        pointer-events-none

        absolute

        inset-0

        bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,.55)_100%)]
      "
    />

  </motion.div>
  );
}

export default Loader;