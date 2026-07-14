import { Mail, MessageCircle } from "lucide-react";

type Props = {
  icon: string;
  value: string;
  href: string;
};

function ContactCard({
  icon,
  value,
  href,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex
        items-center
        gap-3
        text-[#ABB2BF]
        transition
        hover:text-white
      "
    >
      {icon === "discord" ? (
        <MessageCircle size={20} />
      ) : (
        <Mail size={20} />
      )}

      <span>{value}</span>
    </a>
  );
}

export default ContactCard;