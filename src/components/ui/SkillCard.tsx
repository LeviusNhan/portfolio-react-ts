type Props = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: Props) {
  return (
    <article className="border border-[#ABB2BF]">
      <h3 className="border-b border-[#ABB2BF] px-4 py-2 font-semibold text-white">
        {title}
      </h3>

      <div className="space-y-2 px-4 py-3">
        {items.map((item) => (
          <p
            key={item}
            className="text-[#ABB2BF]"
          >
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;