import { motion } from "motion/react";
function Quote() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: .45
      }}
      className="quoteTheme py-24"
    >
      <div className="mx-auto w-full max-w-[720px] px-4">

        {/* Quote Box */}
        <motion.div
          initial={{
            scale: 1.18
          }}
          whileInView={{
            scale: 1
          }}
          transition={{
            duration: .7,
            ease: "easeOut"
          }}
          className="relative border border-[#ABB2BF] px-10 py-8 overflow-hidden"
        >

          {/* Top Quote */}
          <motion.span

            initial={{
              opacity: 0,
              scale: .5
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: .45
            }} className="absolute -top-5 left-4 bg-[#282C33] px-2 text-5xl leading-none text-[#ABB2BF]">
            "
          </motion.span>

          <p className="text-2xl font-medium text-white overflow-hidden">

            <motion.span

              initial={{
                x: -220,
                opacity: 0
              }}

              whileInView={{
                x: 0,
                opacity: 1
              }}

              transition={{
                duration: .75
              }}

              className="inline-block"
            >

              With great power comes

            </motion.span>

            {" "}

            <motion.span

              initial={{
                x: 220,
                opacity: 0
              }}

              whileInView={{
                x: 0,
                opacity: 1
              }}

              transition={{
                duration: .75
              }}

              className="inline-block"
            >

              great electricity bill

            </motion.span>

          </p>

          {/* Bottom Quote */}
          <motion.span

            initial={{
              opacity: 0,
              scale: .5
            }}

            whileInView={{
              opacity: 1,
              scale: 1
            }}

            transition={{
              duration: .45
            }} className="absolute -bottom-5 right-4 bg-[#282C33] px-2 text-5xl leading-none text-[#ABB2BF]">
            "
          </motion.span>
        </motion.div>

        {/* Author */}
        <div className="flex justify-end pr-8">
          <motion.div

            initial={{
              opacity: 0,
              y: 25
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              delay: .65,
              duration: .45
            }}

            className="ml-auto border border-t-0 border-[#ABB2BF] px-6 py-3">
            <p className="text-lg text-white md:text-2xl">
              — Dr. Who
            </p>
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
}

export default Quote;