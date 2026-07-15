import { motion } from "motion/react";
import { SendHorizonal } from "lucide-react";

function ContactForm() {
  return (
    <motion.form
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-[#3A4048]
        bg-[#2C313A]
        p-8
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2
          h-48
          w-48
          -translate-x-1/2
          rounded-full
          bg-[#C778DD]/10
          blur-[80px]
        "
      />

      <h3 className="mb-8 text-2xl font-semibold text-white">
        Send me a message
      </h3>

      <div className="space-y-6">
        <Input label="Your name" />

        <Input
          label="Email"
          type="email"
        />

        <Input label="Subject" />

        <TextArea label="Message" />
      </div>

      <motion.button
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          mt-10
          flex
          items-center
          gap-3
          border
          border-[#C778DD]
          px-8
          py-3
          text-white
          transition
          hover:bg-[#C778DD]/10
        "
      >
        Send Message

        <motion.div
          whileHover={{
            x: 5,
            rotate: -20,
          }}
        >
          <SendHorizonal size={18} />
        </motion.div>
      </motion.button>
    </motion.form>
  );
}

type InputProps = {
  label: string;
  type?: string;
};

function Input({
  label,
  type = "text",
}: InputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#ABB2BF]">
        {label}
      </span>

      <div className="group relative">
        <input
          type={type}
          placeholder={label}
          className="
            peer
            w-full
            border-0
            border-b
            border-[#4A4F58]
            bg-transparent
            py-3
            text-white
            outline-none
            transition
            placeholder:text-[#646A75]
            focus:border-[#C778DD]
          "
        />

        <motion.span
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-[#C778DD]
            to-cyan-400
            transition-transform
            duration-300
            peer-focus:scale-x-100
          "
        />
      </div>
    </label>
  );
}

function TextArea({
  label,
}: {
  label: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#ABB2BF]">
        {label}
      </span>

      <div className="relative">
        <textarea
          rows={6}
          placeholder={label}
          className="
            peer
            w-full
            resize-none
            border-0
            border-b
            border-[#4A4F58]
            bg-transparent
            py-3
            text-white
            outline-none
            transition
            placeholder:text-[#646A75]
            focus:border-[#C778DD]
          "
        />

        <span
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-[#C778DD]
            to-cyan-400
            transition-transform
            duration-300
            peer-focus:scale-x-100
          "
        />
      </div>
    </label>
  );
}

export default ContactForm;