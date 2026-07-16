import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

const philosophies = [
  {
    number: "01",
    title: "Motion has purpose.",
    background: "MOTION",
    description:
      "Animation shouldn't exist just to impress. Every movement should guide attention, communicate feedback and make interactions feel natural.",
  },
  {
    number: "02",
    title: "Performance is design.",
    background: "PERFORMANCE",
    description:
      "A beautiful interface that feels slow is still a poor experience. Speed is part of aesthetics.",
  },
  {
    number: "03",
    title: "Details build trust.",
    background: "DETAILS",
    description:
      "Spacing, typography, transitions and micro-interactions create confidence long before users read a single word.",
  },
  {
    number: "04",
    title: "Less, but better.",
    background: "SIMPLICITY",
    description:
      "Every unnecessary element increases cognitive load. Simplicity isn't less work—it's better decisions.",
  },
];

function Philosophy() {
  return (
    <section className="relative mx-auto max-w-[1120px] overflow-hidden px-5 py-40">
      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C778DD]/10 blur-[180px]" />

      <SectionTitle title="philosophy" />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mx-auto mt-24 max-w-4xl text-center"
      >
        <p className="text-lg uppercase tracking-[8px] text-[#C778DD]">
          FRONT-END MINDSET
        </p>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
          I don't build websites.
          <br />
          I build experiences.
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-[#ABB2BF]">
          Behind every interface is a philosophy. These principles shape how I
          design, animate and craft every digital experience.
        </p>
      </motion.div>

      <div className="mt-40 space-y-48">
        {philosophies.map((item, index) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      key={item.number}
      initial={{
        opacity: 0,
        x: isLeft ? -120 : 120,
        filter: "blur(14px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.9,
      }}
      className={`relative flex ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Background Word */}

      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 0.035,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
          text-[90px]
          font-black
          tracking-[16px]
          text-white
          lg:text-[170px]
        "
      >
        {item.background}
      </motion.h2>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{
          duration: .35,
        }}
        className="
          group
          relative
          z-10
          w-full
          max-w-[560px]
          overflow-hidden
          rounded-[28px]
          border
          border-[#3A4048]
          bg-[#2C313A]/80
          p-10
          backdrop-blur-md
          transition-all
          duration-500
          hover:border-[#C778DD]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100

            bg-gradient-to-br

            from-[#C778DD]/10

            via-transparent

            to-cyan-400/10
          "
        />

        {/* Number */}

        <motion.span
          whileHover={{
            scale: 1.08,
            textShadow: "0 0 18px #C778DD",
          }}
          className="
            relative
            text-[15px]
            font-semibold
            tracking-[8px]
            text-[#C778DD]
          "
        >
          {item.number}
        </motion.span>

        {/* Title */}

        <motion.h3
          whileHover={{
            x: 8,
          }}
          transition={{
            duration: .25,
          }}
          className="
            relative
            mt-6
            text-3xl
            font-bold
            leading-tight
            text-white
            lg:text-5xl
          "
        >
          {item.title}
        </motion.h3>

        {/* Description */}

        <p
          className="
            relative
            mt-8
            leading-9
            text-[#ABB2BF]
          "
        >
          {item.description}
        </p>

        {/* Laser Line */}

        <div className="relative mt-10 h-px overflow-hidden bg-[#3A4048]">
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .8,
            }}
            style={{
              transformOrigin: "left",
            }}
            className="
              absolute
              inset-0

              bg-gradient-to-r

              from-[#C778DD]

              via-fuchsia-400

              to-cyan-300
            "
          />

          <motion.div
            animate={{
              left: ["-30%", "130%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "linear",
            }}
            className="
              absolute
              top-1/2
              h-4
              w-24
              -translate-y-1/2
              -skew-x-12

              bg-gradient-to-r

              from-transparent

              via-white

              to-[#C778DD]

              blur-md
            "
          />
        </div>
      </motion.div>
    </motion.div>
  );
})}
     

      {/* Ending Quote */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          filter: "blur(12px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
        className="
          relative
          mt-52
          overflow-hidden
          rounded-[36px]
          border
          border-[#3A4048]
          bg-[#2C313A]/70
          px-10
          py-24
          backdrop-blur-md
          lg:px-24
        "
      >
        {/* Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C778DD]/10
            blur-[140px]
          "
        />

        {/* Background Word */}

        <span
          className="
            pointer-events-none
            absolute
            right-0
            top-1/2
            -translate-y-1/2

            text-[120px]
            font-black
            tracking-[20px]

            text-white/5

            lg:text-[220px]
          "
        >
          THINK
        </span>

        <motion.p
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 90,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="
            h-[2px]

            bg-gradient-to-r

            from-[#C778DD]

            to-cyan-300
          "
        />

        <h2
          className="
            relative
            mt-12

            max-w-4xl

            text-4xl
            font-bold
            leading-tight

            text-white

            lg:text-6xl
          "
        >
          Great interfaces
          <br />

          are invisible.
        </h2>

        <p
          className="
            relative
            mt-10

            max-w-2xl

            text-xl
            leading-10

            text-[#ABB2BF]
          "
        >
          People don't remember the pixels.

          <br />

          They remember how your product made them feel.

          <br />

          That's the experience I try to create.
        </p>

        {/* Continue */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            mt-20

            flex

            items-center

            gap-5

            text-[#C778DD]
          "
        >
          <span className="tracking-[6px] uppercase">
            Continue
          </span>

          <div className="h-px w-28 bg-[#C778DD]" />

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </motion.div>
      </div>
          </section>
  );
}

export default Philosophy;