'use client';

import { useBrands } from '@/lib/hooks';

export default function BrandsHero() {
  const { data: brands } = useBrands();
  const brandCount = brands?.length || 0;

  return (
    <section className="relative bg-ink etched overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-0">
          <div className="hidden lg:flex lg:col-span-2 flex-col justify-between py-16 pr-8 pl-4 border-l border-white/10">
            <div className="mono text-[11px] leading-[2] text-paper/40">
              <p>{brandCount} BRANDS</p>
              <p>AUTHORISED SUPPLY</p>
            </div>
            <div className="mono text-[11px] text-paper/40 leading-[2]">
              <p>002 / 006</p>
            </div>
          </div>
          <div className="lg:col-span-10 py-20 lg:py-24 lg:pl-14 border-l border-white/10">
            <p className="mono text-[12.5px] text-brass tracking-[0.08em] mb-7">
              Our Partners
            </p>
            <h1 className="serif text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.02] text-paper font-medium max-w-3xl">
              Brands we&apos;re authorised to supply, not just resell.
            </h1>
            <p className="text-[17px] text-paper/55 max-w-lg mt-8 leading-relaxed">
              Every part that leaves our floor traces back to a manufacturer we&apos;re formally authorised for — genuine stock, matched specs, no substitutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
