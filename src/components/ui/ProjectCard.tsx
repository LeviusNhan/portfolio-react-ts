import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

type Props = {
  image: string;
  technologies: string[];

  title: string;

  description: string;

  live: string;

  source?: string;
};

function ProjectCard({
  image,
  technologies,
  title,
  description,
  live,
  source,
}: Props) {
  const rotateRange = 15;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x);
  const mouseY = useSpring(y);

  const rotateX = useTransform(
    mouseY,
    [-0.5, 0.5],
    [rotateRange, -rotateRange]
  );

  const rotateY = useTransform(
    mouseX,
    [-0.5, 0.5],
    [-rotateRange, rotateRange]
  );

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);

    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.article
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMove}

      onMouseLeave={reset}
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.015,
        boxShadow: "0 28px 60px rgba(199,120,221,.22)",
      }}
      className="
        overflow-hidden
        border
        border-[#ABB2BF]
        bg-[#282C33]
        transition-colors
        duration-300
        hover:border-[#C778DD]
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <motion.div
          initial={{
            opacity: 0
          }}

          whileHover={{
            opacity: 1
          }}

          className="
        absolute
        inset-0

        bg-gradient-to-tr

        from-[#C778DD]/5

        via-transparent

        to-cyan-400/5

        pointer-events-none
    "
        />
        <motion.img
          src={image}
          alt={title}
          whileHover={{
            scale: 1.1
          }}
          transition={{
            duration: 0.4,
          }}
          className="h-[200px] w-full object-cover"
        />
      </div>

      {/* Technologies */}

      <div className="border-y border-[#ABB2BF] p-2">
        <div className="flex flex-wrap gap-2 text-[#ABB2BF]">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
                scale: 1.08,
                color: "#C778DD"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Content */}

      <div className="space-y-4 p-4">
        <motion.h3
          whileHover={{
            x: 4,
          }}
          className="text-[32px] font-medium text-white"
        >
          {title}
        </motion.h3>

        <p className="text-[#ABB2BF]">
          {description}
        </p>

        <div className="flex gap-4">
          <motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              flex
              items-center
              gap-2
              border
              border-[#C778DD]
              px-4
              py-2
              transition
              hover:bg-[#C778DD]/20
            "
          >
            Live

            <motion.div
              whileHover={{
                rotate: -45,
              }}
            >
              <ExternalLink size={16} />
            </motion.div>
          </motion.a>

          {source && (
            <motion.a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                items-center
                gap-2
                border
                border-[#ABB2BF]
                px-4
                py-2
                text-[#ABB2BF]
                transition
                hover:border-[#C778DD]
                hover:text-white
              "
            >
              Cached

              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <FaGithub size={16} />
              </motion.div>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;