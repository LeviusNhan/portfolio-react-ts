import { motion } from "motion/react";
import { Download } from "lucide-react";

import Avatar from "../../../assets/images/about.png";

function AboutHero() {
  return (
    <section className="mt-14 grid items-center gap-20 lg:grid-cols-2 w-full max-w-[1024px] mx-auto">

      {/* ================= LEFT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
      >

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .15,
          }}
          className="mb-4 text-[#ABB2BF]"
        >
          Who am I ?
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .25,
          }}
          className="text-6xl font-bold leading-tight"
        >
          Hello,
          <br />

          I'm{" "}
          <span className="text-[#C778DD]">
            Minh Nhan.
          </span>
        </motion.h1>

        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .4,
          }}
          className="mt-5 text-2xl text-[#ABB2BF]"
        >
          Front-End Developer
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: .55,
          }}
          className="
            mt-8
            max-w-[560px]
            leading-9
            text-[#ABB2BF]
          "
        >
          I enjoy building modern websites with
          React, TypeScript and Motion.

          My goal is creating interfaces that
          feel fast, interactive and enjoyable
          to use.
        </motion.p>

        <motion.a
          href="./files/minhnhan-resume.pdf"
          title="Download CV"
          download
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: .97,
          }}
          className="
            group
            mt-10
            inline-flex
            items-center
            gap-3
            border
            border-[#C778DD]
            px-7
            py-4
            text-white
            transition
            hover:bg-[#C778DD]/10
          "
        >
          Download CV

          <motion.div
            whileHover={{
              rotate: -20,
              y: 2,
            }}
          >
            <Download size={18} />
          </motion.div>
        </motion.a>

      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .9,
        }}
        className="relative flex justify-center"
      >

        {/* glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.4, .7, .4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            absolute
            top-1/2
            h-[330px]
            w-[330px]
            -translate-y-1/2
            rounded-full
            bg-[#C778DD]
            blur-[130px]
          "
        />

        {/* frame */}

        <motion.div
          whileHover={{
            rotateY: 8,
            rotateX: -5,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
          }}
          className="relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >

          <div
            className="
              absolute
              inset-0
              rounded-xl
              border
              border-[#C778DD]
            "
          />

          <motion.img
            src={Avatar}
            alt="about"
            whileHover={{
              scale: 1.04,
            }}
            className="
              relative
              z-20
              w-[430px]
              object-contain
            "
          />

          {/* dots */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              -right-10
              top-10
              grid
              grid-cols-5
              gap-2
            "
          >
            {Array.from({
              length: 25,
            }).map((_, i) => (
              <div
                key={i}
                className="
                  h-[3px]
                  w-[3px]
                  rounded-full
                  bg-[#ABB2BF]
                "
              />
            ))}
          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default AboutHero;