import Image from 'next/image';

const highlights = ['STANDARD', 'CUSTOM', 'HIGH-TENSILE'];

export default function ManufacturingHero() {
  return (
    <section className="relative bg-ink etched overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none select-none"
      >
        <span className="serif text-[16rem] lg:text-[20rem] leading-none text-paper/5 -mr-6 lg:-mr-14">
          B7
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-16 xl:py-20 2xl:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="mono text-[12.5px] text-brass tracking-[0.08em] mb-4 lg:mb-5 xl:mb-7">
              Manufacturing
            </p>
            <h1 className="serif text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[1.12] text-paper font-medium">
              Precision Fasteners &amp; Custom Manufacturing
            </h1>
            <p className="text-[15.5px] xl:text-[16.5px] 2xl:text-[17px] text-paper/55 max-w-xl mt-5 lg:mt-6 leading-relaxed">
              Industrial fastening solutions manufactured to standard and customized specifications.
            </p>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-9 lg:mt-11">
              <a
                href="/#quote"
                className="inline-flex items-center px-7 h-[52px] bg-rust hover:bg-rust2 text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring"
              >
                Request a Quote →
              </a>
              <a
                href="#manufacturing-range"
                className="inline-flex items-center gap-2 text-paper/80 hover:text-paper text-[14.5px] font-medium border-b border-paper/30 hover:border-paper pb-1 transition-colors focus-ring"
              >
                Explore Manufacturing Capabilities →
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-9 lg:mt-11 pt-6 lg:pt-8 border-t border-paper/15">
              {highlights.map((tag) => (
                <span
                  key={tag}
                  className="mono text-[11px] text-paper/60 tracking-[0.08em] border border-paper/20 px-3.5 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-paper/15 p-3">
              <div className="aspect-[4/5] lg:aspect-[4/4.4] xl:aspect-[4/5] overflow-hidden">
                <Image
                  src="/cta-home.png"
                  alt="Close-up of custom manufactured bolts and fasteners"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p className="mono text-[11px] text-paper/40 tracking-wide mt-3 px-1 pb-1">
                MANUFACTURED TO SPEC — CHENNAI, TAMIL NADU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
