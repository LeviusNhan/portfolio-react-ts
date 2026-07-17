import { motion, AnimatePresence } from "motion/react";
import {
  SendHorizonal,
  Check,
  LoaderCircle,
} from "lucide-react";
import { useState } from "react";

import { sendEmail } from "../../../services/emailService";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendEmail(form);

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 2500);

    } catch (error) {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.form
      onSubmit={handleSubmit}
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

        <Input
          label="Your name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <Input
          label="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({
              ...form,
              subject: e.target.value,
            })
          }
        />

        <TextArea
          label="Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

      </div>

      <motion.button
        type="submit"
        disabled={loading}
        animate={{
          backgroundColor: success
            ? "#16a34a"
            : "transparent",
          borderColor: success
            ? "#16a34a"
            : "#C778DD",
        }}
        whileHover={
          !loading && !success
            ? {
              scale: 1.03,
              y: -2,
            }
            : {}
        }
        whileTap={{
          scale: .97,
        }}
        className="
          group
          mt-10
          flex
          h-12
          w-[220px]
          items-center
          justify-center
          gap-3
          border
          text-white
          transition-all
          duration-300
          disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: .8,
                ease: "linear",
              }}
            >
              <LoaderCircle size={18} />
            </motion.div>

            Sending...
          </>
        ) : success ? (
          <>
            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
            >
              <Check size={18} />
            </motion.div>

            Message Sent
          </>
        ) : (
          <>
            Send Message

            <motion.div
              whileHover={{
                x: 5,
                rotate: -20,
              }}
            >
              <SendHorizonal size={18} />
            </motion.div>
          </>
        )}
      </motion.button>
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 60,
            }}
            transition={{
              duration: .35,
            }}
            className="
              absolute
              right-8
              top-8
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-green-500/40
              bg-green-500/10
              px-5
              py-3
              text-sm
              text-green-400
              backdrop-blur-lg
            "
          >
            <Check size={18} />

            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  label,
  type = "text",
  value,
  onChange,
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
          value={value}
          onChange={onChange}
          required
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

type TextAreaProps = {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

function TextArea({
  label,
  value,
  onChange,
}: TextAreaProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#ABB2BF]">
        {label}
      </span>
      <div className="relative">
        <textarea
          rows={6}
          placeholder={label}
          value={value}
          onChange={onChange}
          required
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