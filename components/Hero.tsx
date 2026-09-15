import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#12100E] overflow-hidden">
      {/* etched texture — inlined so it doesn't depend on a custom utility class */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(244,240,232,0.025) 0px, rgba(244,240,232,0.025) 1px, transparent 1px, transparent 64px)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Spec rail */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-between py-16 pr-8 pl-4 border-l border-white/10">
            <div className="font-mono text-[11px] leading-[2] text-[#F4F0E8]/40">
              <p>EST. — CHENNAI</p>
              <p>DIN · ISO · IS SPEC</p>
              <p>UNBRAKO AUTHORISED</p>
            </div>
            <div className="font-mono text-[11px] text-[#F4F0E8]/40 leading-[2]">
              <p>SCROLL</p>
              <p>001 / 006</p>
            </div>
          </div>

          {/* Headline block */}
          <div className="lg:col-span-10 py-20 lg:py-28 lg:pl-14 lg:border-l border-white/10">
            <p className="font-mono text-[12.5px] text-[#C9A15A] tracking-[0.08em] mb-7">
              Fasteners &amp; Industrial Tools — Chennai, Tamil Nadu
            </p>
            <h1 className="font-serif text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] leading-[0.98] text-[#F4F0E8] font-medium max-w-4xl">
              Precision fasteners, held to a tighter tolerance than the job requires.
            </h1>
            <p className="text-[17px] text-[#F4F0E8]/55 max-w-lg mt-8 leading-relaxed">
              Authorised distributor of Unbrako fasteners, hand tools, carbide tooling, and
              custom foundation bolts — supplying manufacturers across Chennai for over a decade.
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-11">
              <a
                href="#quote"
                className="inline-flex items-center px-7 h-[52px] bg-[#B8471E] hover:bg-[#8F3517] text-[#F4F0E8] text-[14.5px] font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8471E] focus-visible:outline-offset-2"
              >
                Request a Quote
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 text-[#F4F0E8]/80 hover:text-[#F4F0E8] text-[14.5px] font-medium border-b border-[#F4F0E8]/30 hover:border-[#F4F0E8] pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8471E] focus-visible:outline-offset-2"
              >
                Browse the catalog
              </a>
            </div>
          </div>
        </div>

        {/* Full-bleed image strip */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[440px] border-t border-white/10">
          <Image
            src="/hero-home.png"
            alt="Precision fasteners and hex bolts arranged on a steel surface"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12100E] via-[#12100E]/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}