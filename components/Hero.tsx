import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-ink overflow-hidden border-b-4 border-rust">
      {/* Full-screen image base */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[800px]">
        <Image
          src="/hero-home.png"
          alt="Precision fasteners and hex bolts arranged on steel surface"
          fill
          className="object-cover"
          priority
        />
        
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

        {/* Grid overlay for brutalist texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(244,240,232,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,240,232,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Content overlay */}
        <div className="relative h-full max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 h-full">
            {/* Left rail - brutalist labeling */}
            <div className="hidden lg:flex lg:col-span-2 flex-col justify-between border-r-2 border-paper/10 py-12 px-4">
              <div className="space-y-8">
                <div className="mono text-[10px] text-brass tracking-[0.15em] leading-[2]">
                  <div className="border-l-2 border-brass pl-3 mb-2">SECTION_01</div>
                  <div className="text-paper/40 pl-3">CHENNAI</div>
                  <div className="text-paper/40 pl-3 mt-1">EST. 2010</div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-[2px] bg-paper/10 w-12" />
                  <div className="h-[2px] bg-paper/10 w-8" />
                  <div className="h-[2px] bg-paper/10 w-16" />
                </div>
              </div>

              <div className="mono text-[9px] text-paper/20 tracking-[0.2em] -translate-y-24">
                <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  DIN / ISO / IS SPEC
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-10 flex flex-col justify-between px-6 lg:px-16 py-12 lg:py-16">
              {/* Top label */}
              <div className="flex items-center gap-4 mb-2.5 ml-1">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-rust" />
                  <div className="w-2 h-2 bg-rust/50" />
                  <div className="w-2 h-2 bg-rust/20" />
                </div>
                <span className="mono text-[10px] text-brass tracking-[0.15em]">
                  FASTENERS / INDUSTRIAL TOOLS
                </span>
              </div>

              {/* Bottom content */}
              <div>
                {/* Headline - responsive sizing */}
                <h1 className="mono text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.9] text-paper font-black uppercase tracking-tighter max-w-5xl mb-6 lg:mb-8">
                  PRECISION<br />
                  ENGINEERED<br />
                  <span className="text-rust">FASTENERS</span>
                </h1>

                {/* Spec block */}
                <div className="border-t-4 border-steel/30 pt-4 lg:pt-6 max-w-2xl mb-6 lg:mb-8">
                  <p className="mono text-[11px] sm:text-[12px] lg:text-[13px] text-paper/75 leading-[1.8]">
                    AUTHORIZED UNBRAKO DISTRIBUTOR — HAND TOOLS / CARBIDE TOOLING / CUSTOM FOUNDATION BOLTS
                  </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-10">
                  <a
                    href="#quote"
                    className="inline-flex items-center px-6 lg:px-8 h-12 lg:h-14 bg-rust hover:bg-rust2 text-paper mono text-[11px] lg:text-[12px] font-bold tracking-[0.1em] transition-colors focus-ring uppercase border-2 border-rust hover:border-rust2"
                  >
                    Request Quote
                  </a>
                  <a
                    href="#catalog"
                    className="inline-flex items-center px-6 lg:px-8 h-12 lg:h-14 border-2 border-paper/30 hover:bg-paper/10 text-paper mono text-[11px] lg:text-[12px] font-bold tracking-[0.1em] transition-colors focus-ring uppercase"
                  >
                    View Catalog
                  </a>
                </div>

                {/* Industrial metrics bar */}
                <div className="pt-6 lg:pt-8 border-t-2 border-paper/10">
                  <div className="flex flex-wrap gap-6 lg:gap-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rust" />
                      <div>
                        <div className="mono text-[9px] text-paper/40 tracking-wider">EXPERIENCE</div>
                        <div className="mono text-[14px] lg:text-[16px] font-bold text-paper">10+ YEARS</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brass" />
                      <div>
                        <div className="mono text-[9px] text-paper/40 tracking-wider">BRANDS</div>
                        <div className="mono text-[14px] lg:text-[16px] font-bold text-paper">30+ PARTNERS</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-steel" />
                      <div>
                        <div className="mono text-[9px] text-paper/40 tracking-wider">STANDARDS</div>
                        <div className="mono text-[14px] lg:text-[16px] font-bold text-paper">DIN / ISO / IS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}