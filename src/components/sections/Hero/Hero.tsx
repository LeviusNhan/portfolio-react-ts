import Avatar from "../../../assets/images/me.png";
import Shape from "../../../assets/images/Logo.svg";
import StatusCard from "../../ui/StatusCard";
import { useTranslation } from "react-i18next";
// import Dots from "../../../assets/images/dots.svg";

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="heroTheme mx-auto mt-0 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
      {/* LEFT */}
      <div className="w-full max-w-[540px]">
        <h1 className="text-3xl md:text-4xl font-semibold leading-[42px] text-white">
          {t("hero.title1")}
          <br />
          <span className="text-[#C778DD]">{t("hero.designer")}</span>
          <br />
          <span className="text-[#C778DD]">{t("hero.developer")}</span>
        </h1>

        <p className="mt-8 w-full max-w-[460px] text-base leading-7 text-[#ABB2BF]">
         {t("hero.description")}
        </p>

        <button
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
        </button>
      </div>

      {/* RIGHT */}
      <div className="
        relative
        mx-auto
        w-full
        max-w-[470px]
        h-[320px]
        md:h-[420px]
      ">

  {/* Shape */}
  <img
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

<img
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
  <StatusCard
    text="Currently working on"
    highlight="Portfolio"
  />
</div>
{/* <img
    src={Dots}
    alt=""
    className="absolute right-0 top-48"
/> */}

</div>
    </section>
  );
}

export default Hero;