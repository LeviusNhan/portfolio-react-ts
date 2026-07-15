import { motion } from "motion/react";
import SectionTitle from "../../common/SectionTitle";

function ContactHero() {
  return (
    <>
      <SectionTitle title="contacts" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
        className="mt-14 max-w-3xl"
      >
        <h1 className="text-5xl font-semibold leading-tight text-white">
          Let's build something
          <br />
          <span className="text-[#C778DD]">
            amazing together.
          </span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#ABB2BF]">
          I'm currently available for freelance projects,
          front-end development positions and creative
          collaborations.
          <br />
          If you have an idea in mind, I'd love to hear it.
        </p>
      </motion.div>
    </>
  );
}

export default ContactHero;