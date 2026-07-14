import { ExternalLink  } from "lucide-react";
import { FaGithub } from "react-icons/fa";
type Props = {
  image: string;
  technologies: string[];

  title: string;

  description: string;

  live: string;

  source?: string;

  isLive: boolean;
};

function ProjectCard({
  image,
  technologies,
  title,
  description,
  live,
  source,
  isLive,
}: Props) {
  return (
    <article
      className="
      overflow-hidden
      border
      border-[#ABB2BF]
      bg-[#282C33]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#C778DD]
    "
    >
      {/* Image */}

      <img
        src={image}
        alt={title}
        className="h-[200px] w-full object-cover"
      />

      {/* Technologies */}

      <div className="border-y border-[#ABB2BF] p-2">
        <div className="flex flex-wrap gap-2 text-[#ABB2BF]">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      {/* Content */}

      <div className="space-y-4 p-4">

        <h3 className="text-[32px] font-medium text-white">
          {title}
        </h3>

        <p className="text-[#ABB2BF]">
          {description}
        </p>

        <div className="flex gap-4">

          <a
            href={live}
            target="_blank"
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

            <ExternalLink size={16} />
          </a>

          {source && (
            <a
              href={source}
              target="_blank"
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

              <FaGithub size={16} />
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;