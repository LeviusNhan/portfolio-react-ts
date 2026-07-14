import {
  FaGithub,
  FaLinkedin,
  FaFigma,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-24 border-t border-[#ABB2BF] py-8">
      <div
        className="
          mx-auto
          flex
          max-w-[1024px]
          flex-col
          gap-10
          px-4
          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:px-0
        "
      >
        {/* Left */}

        <div>
          <div className="flex flex-wrap items-center gap-4">
            <h3 className="font-bold text-white">
              ■ Minh Nhàn
            </h3>

            <a
              href="mailto:lamnhan681@gmail.com"
              className="text-[#ABB2BF] hover:text-white transition"
            >
              lamnhan681@gmail.com
            </a>
          </div>

          <p className="mt-4 text-[#ABB2BF]">
            Web designer and front-end developer
          </p>
        </div>

        {/* Right */}

        <div>
          <h3 className="mb-4 text-xl font-semibold text-white">
            Media
          </h3>

          <div className="flex gap-5 text-[#ABB2BF]">
            <a
              href="https://github.com/LeviusNhan"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white hover:-translate-y-1"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/leviusnhan-fe1203/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white hover:-translate-y-1"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://www.figma.com/design/SsAxGreLYpF1GcYDBwsNkK/Portfolio--Community-"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white hover:-translate-y-1"
            >
              <FaFigma size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="mt-10 text-center">
        <p className="text-sm text-[#ABB2BF]">
          © Copyright 2026. Made by Minh Nhàn
        </p>
      </div>
    </footer>
  );
}

export default Footer;