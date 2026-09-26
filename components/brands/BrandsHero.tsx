'use client';

import { useBrands } from '@/lib/hooks';

export default function BrandsHero() {
  const { data: brands } = useBrands();
  const brandCount = brands?.length || 0;

  return (
    <section className="relative bg-ink overflow-hidden border-y-4 border-brass">
      {/* Concrete texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(244,240,232,0.03) 2px, rgba(244,240,232,0.03) 4px)`
        }}
      />

      {/* Diagonal structural element */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-0 h-0 border-l-[300px] lg:border-l-[600px] border-l-transparent border-b-[300px] lg:border-b-[600px] border-b-brass/5"
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12">
          {/* Brutalist sidebar */}
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-between border-r-2 border-paper/10 py-20 px-4">
            <div className="space-y-8">
              <div className="mono text-[10px] text-brass tracking-[0.15em] leading-[2]">
                <div className="border-l-2 border-brass pl-3 mb-2">SECTION_03</div>
                <div className="text-paper/40 pl-3">{brandCount.toString().padStart(2, '0')} BRANDS</div>
                <div className="text-paper/40 pl-3 mt-1">AUTHORIZED</div>
              </div>

              <div className="space-y-2">
                <div className="h-[2px] bg-paper/10 w-12" />
                <div className="h-[2px] bg-paper/10 w-8" />
                <div className="h-[2px] bg-paper/10 w-16" />
              </div>
            </div>

            <div className="mono text-[9px] text-paper/20 tracking-[0.2em]">
              <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
                MANUFACTURER PARTNERS
              </div>
            </div>
          </div>

          {/* Main content block */}
          <div className="lg:col-span-10 px-6 lg:px-16 py-20 lg:py-28">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-brass" />
                <div className="w-2 h-2 bg-brass/50" />
                <div className="w-2 h-2 bg-brass/20" />
              </div>
              <span className="mono text-[10px] text-brass tracking-[0.15em]">
                AUTHORIZED PARTNERS
              </span>
            </div>

            {/* Bold statement */}
            <h1 className="mono text-[2.6rem] sm:text-[3.8rem] lg:text-[5.2rem] leading-[0.92] text-paper font-black uppercase tracking-tighter max-w-5xl">
              CERTIFIED<br />
              MANUFACTURER<br />
              <span className="text-brass">SUPPLY CHAIN</span>
            </h1>

            {/* Spec block */}
            <div className="mt-12 lg:mt-16 border-t-4 border-steel/30 pt-8 max-w-2xl">
              <div className="mono text-[12px] lg:text-[13px] text-paper/75 leading-[1.9] space-y-2">
                <p className="flex items-start gap-3">
                  <span className="text-rust mt-1">▸</span>
                  <span>FORMAL AUTHORIZATION FROM ALL LISTED MANUFACTURERS</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-rust mt-1">▸</span>
                  <span>GENUINE STOCK WITH MATCHED SPECIFICATIONS</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-rust mt-1">▸</span>
                  <span>NO SUBSTITUTIONS OR THIRD-PARTY VARIANTS</span>
                </p>
              </div>
            </div>

            {/* Industrial data bar */}
            <div className="mt-16 flex flex-wrap gap-1">
              {[...Array(brandCount > 0 ? brandCount : 30)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-12 bg-brass/20 hover:bg-brass transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
