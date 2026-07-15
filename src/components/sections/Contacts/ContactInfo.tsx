import {
  Mail,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "motion/react";

function ContactInfo() {
  return (
    <motion.aside
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.15,
      }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#3A4048]
        bg-[#2C313A]
        p-7
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-[#C778DD]/10
          blur-[70px]
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="flex items-center gap-2">

            <span className="relative flex h-3 w-3">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span className="relative h-3 w-3 rounded-full bg-emerald-400" />

            </span>

            <span className="text-xs text-emerald-400">
              Available
            </span>

          </div>

        </div>

        <div className="mt-8 space-y-6">

          <InfoItem
            icon={<Mail size={18} />}
            title="Email"
            value="lamnhan681@gmail.com"
          />

          <InfoItem
            icon={<MapPin size={18} />}
            title="Location"
            value="Ho Chi Minh City, Vietnam"
          />

          <InfoItem
            icon={<BriefcaseBusiness size={18} />}
            title="Position"
            value="Frontend Developer"
          />

        </div>

      </div>

    </motion.aside>
  );
}

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function InfoItem({
  icon,
  title,
  value,
}: ItemProps) {
  return (
    <motion.div
      whileHover={{
        x: 5,
      }}
      className="
        group
        flex
        items-start
        gap-4
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-[#454B55]
          text-[#C778DD]
          transition-all
          duration-300
          group-hover:border-[#C778DD]
          group-hover:bg-[#C778DD]/10
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-widest text-[#7D838D]">
          {title}
        </p>

        <p className="mt-1 text-white">
          {value}
        </p>

      </div>

    </motion.div>
  );
}

export default ContactInfo;