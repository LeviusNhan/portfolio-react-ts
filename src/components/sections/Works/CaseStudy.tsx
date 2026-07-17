import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

const screens = [
  {
    step: "01",
    title: "Observe",
    tab: "research.md",
  },
  {
    step: "02",
    title: "Think",
    tab: "architecture.ts",
  },
  {
    step: "03",
    title: "Build",
    tab: "hero.tsx",
  },
  // {
  //   step: "04",
  //   title: "Refine",
  //   tab: "performance.json",
  // },
  // {
  //   step: "05",
  //   title: "Deploy",
  //   tab: "vercel.app",
  // },
];

function CaseStudy() {
  return (
    <section
      className="
        relative
        mx-auto
        max-w-[1120px]
        overflow-hidden
        px-5
        py-40
      "
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.15, .3, .15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[180px]
        "
      />

      <SectionTitle title="case-study" />

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="
          mx-auto
          mt-24
          max-w-4xl
          text-center
        "
      >
        <p
          className="
            uppercase
            tracking-[8px]
            text-[#C778DD]
          "
        >
          INSIDE MY WORKFLOW
        </p>

        <h2
          className="
            mt-8
            text-5xl
            font-bold
            leading-tight
            text-white
            lg:text-7xl
          "
        >
          From idea
          <br />
          to interaction.
        </h2>

        <p
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-xl
            leading-9
            text-[#ABB2BF]
          "
        >
          Every project starts as a rough thought.
          Through research, architecture and countless
          iterations, it slowly becomes an experience.
        </p>
      </motion.div>

      <div className="mt-32 space-y-40">
        {screens.map((screen) => (
  <motion.div
    key={screen.step}
    initial={{
      opacity: 0,
      y: 100,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{
      once: true,
      amount: 0.35,
    }}
    transition={{
      duration: 0.8,
    }}
    className="relative"
  >
    {/* Step */}

    <div
      className="
        mb-6
        flex
        items-center
        gap-5
      "
    >
      <span
        className="
          text-5xl
          font-black
          text-[#C778DD]
        "
      >
        {screen.step}
      </span>

      <div className="h-px flex-1 bg-[#3A4048]" />

      <span
        className="
          tracking-[6px]
          uppercase
          text-[#ABB2BF]
        "
      >
        {screen.title}
      </span>
    </div>

    {/* Browser */}

    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .35,
      }}
      className="
        overflow-hidden
        rounded-[24px]
        border
        border-[#3A4048]
        bg-[#242830]
        shadow-[0_30px_80px_rgba(0,0,0,.35)]
      "
    >

      {/* Browser Top */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[#3A4048]
          bg-[#2B3038]
          px-6
          py-4
        "
      >
        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-red-400" />

          <span className="h-3 w-3 rounded-full bg-yellow-400" />

          <span className="h-3 w-3 rounded-full bg-green-400" />

        </div>

        <div
          className="
            rounded-full
            border
            border-[#40454F]
            px-5
            py-2
            text-sm
            text-[#ABB2BF]
          "
        >
          localhost/{screen.tab}
        </div>

        <div className="w-16" />
      </div>

      {/* Browser Body */}

      <div
        className="
          relative
          overflow-hidden
          p-10
          lg:p-14
        "
      >

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[.04]

            [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]

            [background-size:40px_40px]
          "
        />

        {/* Background Word */}

        <h2
          className="
            pointer-events-none

            absolute

            right-10
            top-1/2

            -translate-y-1/2

            text-[120px]

            font-black

            tracking-[10px]

            text-white/5

            lg:text-[180px]
          "
        >
          {screen.title.toUpperCase()}
        </h2>

                {/* Screen Content */}

        {screen.title === "Observe" && (
          <div className="relative z-10 space-y-5">

            <h3 className="text-4xl font-bold text-white">
              Research first.
            </h3>

            <p className="max-w-2xl leading-8 text-[#ABB2BF]">
              Before opening VSCode, I try to understand the
              product, the users and the problems we're trying
              to solve.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              {[
                "User Research",
                "Competitor Analysis",
                "Wireframe",
                "User Flow",
                "Visual Direction",
                "Project Goals",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{
                    x: 10,
                  }}
                  className="
                    flex
                    items-center
                    gap-4

                    rounded-xl

                    border
                    border-[#3A4048]

                    bg-[#2C313A]

                    px-5
                    py-4
                  "
                >
                  <div
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#C778DD]
                    "
                  />

                  <span className="text-[#E5E9F0]">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

          </div>
        )}

        {screen.title === "Think" && (
          <div className="relative z-10">

            <h3 className="text-4xl font-bold text-white">
              Design the system.
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-[#ABB2BF]">
              Components should work together like Lego.
              Every section is reusable instead of isolated.
            </p>

            <div
              className="
                mt-14

                rounded-2xl

                border
                border-[#3A4048]

                bg-[#20242B]

                p-8

                font-mono

                text-[15px]

                leading-9
              "
            >

              <motion.p whileHover={{ x: 8 }}>
                📦 App
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                ├── Navbar
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                ├── Hero
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                ├── About
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                ├── Works
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                ├── Contact
              </motion.p>

              <motion.p whileHover={{ x: 18 }}>
                └── Footer
              </motion.p>

            </div>

          </div>
        )}
        {screen.title === "Build" && (
  <div className="relative z-10">

    <h3 className="text-4xl font-bold text-white">
      Build with code.
    </h3>

    <p
      className="
        mt-5
        max-w-2xl
        leading-8
        text-[#ABB2BF]
      "
    >
      Turning ideas into real interfaces.
      Every component is carefully crafted,
      tested and refined through code.
    </p>


    {/* VS CODE WINDOW */}

    <motion.div
      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:.8,
      }}

      className="
        mt-14
        overflow-hidden
        rounded-2xl
        border
        border-[#3A4048]
        bg-[#1E2228]
        shadow-[0_30px_80px_rgba(0,0,0,.4)]
      "
    >


      {/* Editor Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[#3A4048]
          bg-[#242830]
          px-6
          py-4
        "
      >

        <div className="flex gap-2">

          <span className="h-3 w-3 rounded-full bg-red-400"/>
          <span className="h-3 w-3 rounded-full bg-yellow-400"/>
          <span className="h-3 w-3 rounded-full bg-green-400"/>

        </div>


        <div
          className="
            rounded-md
            border
            border-[#3A4048]
            px-5
            py-2
            font-mono
            text-sm
            text-[#ABB2BF]
          "
        >
          hero.tsx
        </div>


        <div className="w-16"/>

      </div>



      {/* Code Area */}

      <div
        className="
          p-8
          font-mono
          text-sm
          leading-8
          lg:p-12
        "
      >


        {[
          {
            text:'import React from "react";',
            color:'text-[#C778DD]'
          },

          {
            text:'',
          },

          {
            text:'const Hero = () => {',
            color:'text-[#61AFEF]'
          },

          {
            text:'  return (',
            color:'text-white'
          },

          {
            text:'    <section>',
            color:'text-[#98C379]'
          },

          {
            text:'      Build amazing experiences',
            color:'text-[#E5E9F0]'
          },

          {
            text:'    </section>',
            color:'text-[#98C379]'
          },

          {
            text:'  )',
            color:'text-white'
          },

          {
            text:'}',
            color:'text-[#61AFEF]'
          },

        ].map((line,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              x:-20,
            }}

            whileInView={{
              opacity:1,
              x:0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              delay:index*.12,
            }}

            className="
              flex
              gap-5
            "
          >

            {/* Line Number */}

            <span
              className="
                select-none
                text-[#5C6370]
              "
            >
              {index+1}
            </span>


            <span
              className={line.color ?? "text-[#ABB2BF]"}
            >
              {line.text}
            </span>


            {
              index===5 && (
                <motion.span

                  animate={{
                    opacity:[1,0,1]
                  }}

                  transition={{
                    duration:1,
                    repeat:Infinity,
                  }}

                  className="text-white"
                >
                  |
                </motion.span>
              )
            }


          </motion.div>

        ))}


      </div>


    </motion.div>


  </div>
)}
        {/* khúc cuối đây nè */}

      </div>
      {/* End Browser Body */}


    </motion.div>
    {/* End Browser */}


  </motion.div>


))}

</div>
{/* End space-y-40 */}


</section>
  );
}


export default CaseStudy;