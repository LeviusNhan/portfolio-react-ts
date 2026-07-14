import Avatar from "../../../assets/images/about.png";
import Shape from "../../../assets/images/Logo.svg";

import Dot from "../../common/Dot";
import SectionTitle from "../../common/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="aboutTheme py-24"
    >
      <SectionTitle title="about-me" />

      <div className="mt-14 flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between">

        {/* LEFT */}

        <div className="max-w-[520px]">

          <p className="leading-8 text-[#ABB2BF]">
            Hello, I'm Minh Nhàn!
          </p>

          <p className="mt-8 leading-8 text-[#ABB2BF]">
            I'm a Front-end Developer from Ho Chi Minh City, Vietnam.
            I build responsive, modern and user-friendly web applications
            with React, TypeScript and Tailwind CSS.
          </p>

          <p className="mt-8 leading-8 text-[#ABB2BF]">
            I enjoy transforming ideas into real products and continuously
            improving my skills by learning new technologies and best
            practices.
          </p>

          <button
            className="
              mt-10
              border
              border-[#C778DD]
              px-5
              py-2
              text-white
              transition
              duration-300
              hover:bg-[#C778DD]/20
            "
          >
            Read more →
          </button>

        </div>

        {/* RIGHT */}

        <div className="relative h-[500px] w-full max-w-[420px]">

          <Dot className="absolute left-0 top-12" />

          <Dot className="absolute right-0 bottom-24" />

          <img
            src={Avatar}
            alt="Minh Nhàn"
            className="absolute bottom-0 right-0 w-full"
          />

          <img
            src={Shape}
            alt=""
            className="absolute left-0 top-36 w-[95px]"
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[1px]
              w-full
              bg-[#C778DD]
            "
          />

        </div>

      </div>
    </section>
  );
}

export default About;