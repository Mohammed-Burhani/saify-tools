'use client';

import Image from 'next/image';
import { useBrands } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity/client';

export default function UnbrakoFeature() {
  const { data: brands } = useBrands();
  
  // Find Unbrako or use first featured brand
  const featuredBrand = brands?.find(b => b.name.toLowerCase().includes('unbrako')) 
    || brands?.find(b => b.featured) 
    || brands?.[0];

  if (!featuredBrand) {
    return null;
  }

  const logoUrl = featuredBrand.logo ? urlFor(featuredBrand.logo).width(400).height(200).url() : null;

  return (
    <section className="bg-paper border-y-4 border-ink/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12">
          {/* Left rail - industrial labeling */}
          <div className="hidden lg:flex lg:col-span-2 border-r-2 border-ink/10 py-20 px-4">
            <div className="flex flex-col justify-between w-full">
              <div className="mono text-[10px] text-rust tracking-[0.15em] space-y-2">
                <div className="border-l-2 border-rust pl-3 py-1">FEATURED</div>
                <div className="text-ink/40 pl-3">PARTNER</div>
              </div>
              <div className="space-y-2">
                <div className="h-[2px] bg-ink/10 w-16" />
                <div className="h-[2px] bg-ink/10 w-12" />
                <div className="h-[2px] bg-ink/10 w-20" />
              </div>
            </div>
          </div>

          {/* Content grid */}
          <div className="lg:col-span-10 grid lg:grid-cols-2 gap-0">
            {/* Image block */}
            <div className="relative bg-ink/5 border-r-2 border-ink/10 overflow-hidden">
              <Image
                src="/hero-brands.jpeg"
                alt={`${featuredBrand.name} socket head cap fasteners`}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 bg-ink/90 backdrop-blur-sm px-8 py-6 border-t-2 border-rust">
                <div className="mono text-[10px] text-brass tracking-[0.15em] mb-2">
                  PRECISION FASTENERS
                </div>
                <div className="mono text-[13px] text-paper font-bold tracking-wide">
                  SOCKET HEAD CAP SCREWS
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
              {/* Logo or brand name */}
              <div className="mb-8">
                {logoUrl ? (
                  <div className="border-l-4 border-rust pl-6">
                    <Image
                      src={logoUrl}
                      alt={featuredBrand.name}
                      width={240}
                      height={120}
                      className="h-16 w-auto object-contain grayscale opacity-80"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="border-l-4 border-rust pl-6">
                    <h3 className="mono text-[2rem] font-black text-ink uppercase tracking-tight">
                      {featuredBrand.name}
                    </h3>
                  </div>
                )}
              </div>

              {/* Description */}
              {featuredBrand.description ? (
                <div className="mono text-[13px] text-ink/70 leading-[1.9] space-y-6 max-w-xl">
                  {featuredBrand.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="border-l-2 border-ink/10 pl-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="mono text-[13px] text-ink/70 leading-[1.9] space-y-6 max-w-xl">
                  <p className="border-l-2 border-steel/30 pl-6">
                    AUTHORIZED PARTNERSHIP WITH {featuredBrand.name.toUpperCase()} — GLOBALLY TRUSTED INDUSTRIAL FASTENER MANUFACTURER.
                  </p>
                  <p className="border-l-2 border-steel/30 pl-6">
                    AUTHENTIC HIGH-QUALITY STOCK MEETS SPECIFICATION. EVERY ORDER VERIFIED.
                  </p>
                  <p className="border-l-2 border-steel/30 pl-6">
                    PRECISION TOOLING / HEAVY-DUTY FASTENERS / INDUSTRIAL CONSUMABLES SOURCED FROM MANUFACTURERS KNOWN FOR PERFORMANCE AND CONSISTENCY.
                  </p>
                </div>
              )}

              {/* Specs bar */}
              <div className="mt-12 pt-8 border-t-2 border-ink/10">
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-rust" />
                    <div>
                      <div className="mono text-[9px] text-ink/40 tracking-wider">STATUS</div>
                      <div className="mono text-[12px] font-bold text-ink">AUTHORIZED</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brass" />
                    <div>
                      <div className="mono text-[9px] text-ink/40 tracking-wider">STOCK</div>
                      <div className="mono text-[12px] font-bold text-ink">GENUINE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-steel" />
                    <div>
                      <div className="mono text-[9px] text-ink/40 tracking-wider">QUALITY</div>
                      <div className="mono text-[12px] font-bold text-ink">VERIFIED</div>
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
