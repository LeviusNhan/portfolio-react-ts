function Quote() {
  return (
    <section className="quoteTheme py-20 md:py-24">
      <div className="mx-auto w-full max-w-[720px] px-4">

        {/* Quote Box */}
        <div className="relative border border-[#ABB2BF] px-6 py-6 md:px-10 md:py-8">

          {/* Top Quote */}
          <span className="absolute -top-5 left-4 bg-[#282C33] px-2 text-5xl leading-none text-[#ABB2BF]">
            "
          </span>

          <p className="text-center text-xl font-medium leading-relaxed text-white md:text-left md:text-2xl">
            With great power comes great electricity bill
          </p>

          {/* Bottom Quote */}
          <span className="absolute -bottom-5 right-4 bg-[#282C33] px-2 text-5xl leading-none text-[#ABB2BF]">
            "
          </span>
        </div>

        {/* Author */}
        <div className="flex justify-end pr-8">
          <div className="-mt-[1px] border border-t-0 border-[#ABB2BF] px-6 py-3">
            <p className="text-lg text-white md:text-2xl">
              — Dr. Who
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Quote;