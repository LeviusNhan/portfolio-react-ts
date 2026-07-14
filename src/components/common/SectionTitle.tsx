type Props = {
  title: string;

  action?: string;
};

function SectionTitle({
  title,
  action,
}: Props) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex flex-1 items-center gap-4">

        <h2 className="text-[32px] font-semibold text-white whitespace-nowrap">
          <span className="text-[#C778DD]">#</span>
          {title}
        </h2>

        <div className="h-[1px] w-full max-w-[500px] bg-[#C778DD]" />

      </div>

      {action && (
        <a
          href="#"
          className="ml-6 text-white transition hover:text-[#C778DD]"
        >
          {action} ~~&gt;
        </a>
      )}

    </div>
  );
}

export default SectionTitle;