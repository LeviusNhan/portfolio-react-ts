interface StatusCardProps {
  text: string;
  highlight: string;
}

function StatusCard({ text, highlight }: StatusCardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        border
        border-[#ABB2BF]
        bg-[#282C33]
        px-4
        py-2
      "
    >
      <div className="h-4 w-4 bg-[#C778DD]" />

      <p className="text-sm text-[#ABB2BF]">
        {text}{" "}
        <span className="font-semibold text-white">
          {highlight}
        </span>
      </p>
    </div>
  );
}

export default StatusCard;