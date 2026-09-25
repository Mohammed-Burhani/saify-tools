export default function ProductsHero() {
  return (
    <section className="relative bg-ink etched overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none select-none"
      >
        <span className="serif text-[16rem] lg:text-[20rem] leading-none text-paper/5 -mr-6 lg:-mr-14">
          ⟡
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-16 xl:py-20 2xl:py-24">
        <p className="mono text-[12.5px] text-brass tracking-[0.08em] mb-4 lg:mb-5 xl:mb-7">
          Products
        </p>
        <h1 className="serif text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[1.12] text-paper font-medium max-w-2xl">
          The Full Catalog
        </h1>
        <p className="text-[15.5px] xl:text-[16.5px] 2xl:text-[17px] text-paper/55 max-w-xl mt-5 lg:mt-6 leading-relaxed">
          Browse fasteners, hand tools, power tools and industrial equipment by category — every
          product here is stock we carry, not a catalog we point you to.
        </p>
      </div>
    </section>
  );
}
