'use client';

import Image from 'next/image';
import { useBrands } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity';

type Brand = {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: any;
  order?: number;
};

export default function BrandGrid() {
  const { data: brands, isLoading } = useBrands();

  if (isLoading) {
    return (
      <section className="bg-paper2 border-y-4 border-ink/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="mb-16">
            <div className="flex items-baseline justify-between border-b-4 border-ink pb-6">
              <div>
                <div className="mono text-[10px] text-ink/40 tracking-[0.15em] mb-3">DATABASE INDEX</div>
                <h2 className="mono text-[2.2rem] sm:text-[2.8rem] font-black text-ink uppercase tracking-tight">
                  Brand Registry
                </h2>
              </div>
            </div>
          </div>
          <div className="text-center py-20 mono text-[12px] text-ink/30 tracking-[0.15em]">
            LOADING BRAND DATABASE...
          </div>
        </div>
      </section>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <section className="bg-paper2 border-y-4 border-ink/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="mb-16">
            <div className="flex items-baseline justify-between border-b-4 border-ink pb-6">
              <div>
                <div className="mono text-[10px] text-ink/40 tracking-[0.15em] mb-3">DATABASE INDEX</div>
                <h2 className="mono text-[2.2rem] sm:text-[2.8rem] font-black text-ink uppercase tracking-tight">
                  Brand Registry
                </h2>
              </div>
            </div>
          </div>
          <div className="text-center py-20 mono text-[12px] text-ink/30 tracking-[0.15em]">
            NO BRANDS IN DATABASE
          </div>
        </div>
      </section>
    );
  }

  // Sort brands by order, then by name
  const sortedBrands: Brand[] = [...brands].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return a.name.localeCompare(b.name);
  });

  // Split brands into columns for desktop
  const columns = 4;
  const brandsPerColumn = Math.ceil(sortedBrands.length / columns);
  const brandColumns = Array.from({ length: columns }, (_, i) =>
    sortedBrands.slice(i * brandsPerColumn, (i + 1) * brandsPerColumn)
  );

  return (
    <section className="bg-paper2 border-y-4 border-ink/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {/* Brutalist header */}
        <div className="mb-16">
          <div className="flex items-baseline justify-between border-b-4 border-ink pb-6">
            <div>
              <div className="mono text-[10px] text-ink/40 tracking-[0.15em] mb-3">DATABASE INDEX</div>
              <h2 className="mono text-[2.2rem] sm:text-[2.8rem] font-black text-ink uppercase tracking-tight">
                Brand Registry
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-12 h-[3px] bg-rust" />
              <span className="mono text-[11px] text-ink/40 tracking-[0.15em]">
                {String(sortedBrands.length).padStart(3, '0')} TOTAL
              </span>
            </div>
          </div>
        </div>

        {/* Desktop: Multi-column brutalist grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-0">
          {brandColumns.map((columnBrands, columnIndex) => (
            <div key={columnIndex} className="border-r-2 last:border-r-0 border-ink/10">
              {columnBrands.map((brand, index) => {
                const globalIndex = columnIndex * brandsPerColumn + index + 1;
                return (
                  <BrandRow key={brand._id} brand={brand} index={globalIndex} />
                );
              })}
            </div>
          ))}
        </div>

        {/* Tablet: 2-column */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-0">
          {Array.from({ length: 2 }, (_, i) => {
            const brandsPerCol = Math.ceil(sortedBrands.length / 2);
            const columnBrands = sortedBrands.slice(i * brandsPerCol, (i + 1) * brandsPerCol);
            return (
              <div key={i} className="border-r-2 last:border-r-0 border-ink/10">
                {columnBrands.map((brand, index) => {
                  const globalIndex = i * brandsPerCol + index + 1;
                  return (
                    <BrandRow key={brand._id} brand={brand} index={globalIndex} />
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Mobile: Single column */}
        <div className="sm:hidden">
          {sortedBrands.map((brand, index) => (
            <BrandRow key={brand._id} brand={brand} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Fixed logo slot height. Source is requested at 2x this for retina
// screens, same approach as the marquee — see Brands.tsx.
const LOGO_HEIGHT = 72;

function BrandRow({ brand, index }: { brand: Brand; index: number }) {
  const logoSrc = brand.logo
    ? urlFor(brand.logo).height(LOGO_HEIGHT * 2).fit('max').url()
    : null;

  return (
    <a
      href={`/products?brand=${brand.slug.current}`}
      className="brand-row group flex items-center justify-between gap-6 px-6 py-6 border-b-2 border-ink/10 cursor-pointer hover:bg-ink/5 transition-colors"
    >
      <div className="flex items-center gap-6 min-w-0 flex-1">
        {/* Logo container with fixed width */}
        <div
          className="shrink-0 w-24 h-16 flex items-center justify-center bg-paper border-2 border-ink/10 group-hover:border-rust/30 transition-colors"
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt=""
              aria-hidden="true"
              height={LOGO_HEIGHT}
              width={LOGO_HEIGHT * 3}
              unoptimized
              className="h-full w-auto object-contain p-2 grayscale group-hover:grayscale-0 transition-all"
            />
          ) : (
            <span className="mono text-[10px] text-ink/20 tracking-wider">NO LOGO</span>
          )}
        </div>
        
        {/* Brand name */}
        <span className="brand-name mono text-[13px] font-bold text-ink group-hover:text-rust transition-colors uppercase tracking-wide truncate">
          {brand.name}
        </span>
      </div>

      {/* Index number */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-8 h-[2px] bg-ink/20 group-hover:bg-rust transition-colors" />
        <span className="mono text-[11px] text-ink/30 group-hover:text-rust font-bold tracking-wider transition-colors">
          {String(index).padStart(3, '0')}
        </span>
      </div>
    </a>
  );
}