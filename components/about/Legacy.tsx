export default function Legacy() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Our Story</p>
        <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
          A Legacy of Industrial Expertise
        </h2>
        <p className="text-ink/60 leading-relaxed mt-7 text-[17px]">
          Saify Tools Centre has built its experience and reputation by serving the evolving needs of businesses across the industrial sector. Our focus has remained consistent: quality products, dependable service and solutions that support our customers&apos; requirements.
        </p>
      </div>

      {/* Horizontal timeline — 1992 to today */}
      <div className="mt-20 lg:mt-24">
        <div className="flex items-center">
          <div className="flex flex-col items-start shrink-0">
            <span className="serif text-[2rem] sm:text-[2.5rem] text-ink font-medium leading-none">
              1992
            </span>
            <span className="mono text-[11px] text-ink/40 tracking-wide mt-2">FOUNDED</span>
          </div>

          <div className="relative flex-1 mx-6 sm:mx-10">
            <div className="h-px bg-ink/15" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-rust" />
            <span className="absolute left-1/2 -translate-x-1/2 top-5 mono text-[14px] sm:text-[15px] font-medium text-rust tracking-wide whitespace-nowrap">
              35 YEARS
            </span>
          </div>

          <div className="flex flex-col items-end shrink-0">
            <span className="serif text-[2rem] sm:text-[2.5rem] text-ink font-medium leading-none">
              Today
            </span>
            <span className="mono text-[11px] text-ink/40 tracking-wide mt-2">AND COUNTING</span>
          </div>
        </div>
      </div>
    </section>
  );
}
