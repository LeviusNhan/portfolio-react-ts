type DotProps = {
  className?: string;
  rows?: number;
  cols?: number;
};

function Dot({
  className = "",
  rows = 5,
  cols = 5,
}: DotProps) {
  return (
    <div
      className={`grid gap-2 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 4px)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <span
          key={index}
          className="h-[4px] w-[4px] rounded-full bg-[#ABB2BF]"
        />
      ))}
    </div>
  );
}

export default Dot;