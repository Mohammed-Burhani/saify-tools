import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative bg-ink etched overflow-hidden">
      {/* Giant ghost numeral, decorative texture only */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none select-none"
      >
        <span className="serif text-[16rem] lg:text-[20rem] leading-none text-paper/5 -mr-6 lg:-mr-14">
          92
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-16 xl:py-20 2xl:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="mono text-[12.5px] text-brass tracking-[0.08em] mb-4 lg:mb-5 xl:mb-7">
              About Saify Tools Centre
            </p>
            <h1 className="serif text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[1.12] text-paper font-medium">
              Built on Experience.
              <br />
              Driven by Quality.
            </h1>
            <p className="text-[15.5px] xl:text-[16.5px] 2xl:text-[17px] text-paper/55 max-w-xl mt-5 lg:mt-6 leading-relaxed">
              Saify Tools Centre is a provider of high-quality industrial tools and equipment. Since 1992, we have built a strong reputation as a trusted supplier of reliable tools and exceptional customer service.
            </p>
            <p className="text-[15.5px] xl:text-[16.5px] 2xl:text-[17px] text-paper/55 max-w-xl mt-4 leading-relaxed">
              Our commitment is to deliver quality products while understanding and meeting the diverse requirements of our customers. We also take pride in being an authorised distributor of Unbrako fasteners, providing high-quality fastening solutions known for strength, durability and precision engineering.
            </p>

            {/* Horizontal stat bar replaces the usual vertical spec rail */}
            <div className="flex flex-wrap items-stretch gap-x-6 xl:gap-x-10 gap-y-5 mt-8 lg:mt-9 xl:mt-12 pt-6 xl:pt-8 border-t border-paper/15">
              <div>
                <p className="serif text-[1.5rem] xl:text-[1.9rem] text-paper leading-none">1992</p>
                <p className="mono text-[11px] text-paper/40 tracking-wide mt-2">FOUNDED</p>
              </div>
              <div className="w-px bg-paper/15 hidden sm:block" />
              <div>
                <p className="serif text-[1.5rem] xl:text-[1.9rem] text-paper leading-none">35</p>
                <p className="mono text-[11px] text-paper/40 tracking-wide mt-2">YEARS OF SERVICE</p>
              </div>
              <div className="w-px bg-paper/15 hidden sm:block" />
              <div>
                <p className="serif text-[1.5rem] xl:text-[1.9rem] text-paper leading-none">Unbrako</p>
                <p className="mono text-[11px] text-paper/40 tracking-wide mt-2">AUTHORISED DISTRIBUTOR</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-paper/15 p-3">
              <div className="aspect-[4/5] lg:aspect-[4/4.4] xl:aspect-[4/5] overflow-hidden">
                <Image
                  src="/hero-brands.jpeg"
                  alt="Precision fasteners representing Saify Tools Centre's manufacturing standards"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p className="mono text-[11px] text-paper/40 tracking-wide mt-3 px-1 pb-1">
                EST. 1992 — CHENNAI, TAMIL NADU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
