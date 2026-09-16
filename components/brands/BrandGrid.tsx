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
      <section className="bg-[#EBE5D8] border-y border-[#D8D0BE]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif text-[1.9rem] sm:text-[2.3rem] text-[#12100E] font-medium">
              Full brand index
            </h2>
          </div>
          <div className="text-center text-[#12100E]/40 py-10">Loading brands...</div>
        </div>
      </section>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <section className="bg-[#EBE5D8] border-y border-[#D8D0BE]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-serif text-[1.9rem] sm:text-[2.3rem] text-[#12100E] font-medium">
              Full brand index
            </h2>
          </div>
          <div className="text-center text-[#12100E]/40 py-10">No brands available</div>
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
    <section className="bg-[#EBE5D8] border-y border-[#D8D0BE]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-[1.9rem] sm:text-[2.3rem] text-[#12100E] font-medium">
            Full brand index
          </h2>
          <p className="font-mono text-[12px] text-[#12100E]/40 hidden sm:block">
            {sortedBrands.length} TOTAL
          </p>
        </div>

        {/* Desktop: Multi-column layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-x-10">
          {brandColumns.map((columnBrands, columnIndex) => (
            <div key={columnIndex} className="border-t border-[#12100E]/15">
              {columnBrands.map((brand, index) => {
                const globalIndex = columnIndex * brandsPerColumn + index + 1;
                return (
                  <BrandRow key={brand._id} brand={brand} index={globalIndex} />
                );
              })}
            </div>
          ))}
        </div>

        {/* Tablet: 2-column layout */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-x-10">
          {Array.from({ length: 2 }, (_, i) => {
            const brandsPerCol = Math.ceil(sortedBrands.length / 2);
            const columnBrands = sortedBrands.slice(i * brandsPerCol, (i + 1) * brandsPerCol);
            return (
              <div key={i} className="border-t border-[#12100E]/15">
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
        <div className="sm:hidden border-t border-[#12100E]/15">
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
    <div className="brand-row group flex items-center justify-between gap-4 py-4 border-b border-[#12100E]/15">
      <div className="flex items-center gap-4 min-w-0">
        {/* Fixed-width logo slot keeps every row's name aligned to the
            same starting x-position, whether or not that brand has a
            logo uploaded yet. */}
        <div
          className="shrink-0 w-20 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          style={{ height: LOGO_HEIGHT }}
        >
          {logoSrc && (
            <Image
              src={logoSrc}
              alt=""
              aria-hidden="true"
              height={LOGO_HEIGHT}
              width={LOGO_HEIGHT * 3}
              unoptimized
              className="h-full w-auto object-contain"
            />
          )}
        </div>
        <span className="brand-name font-serif text-[1.15rem] text-[#12100E] transition-colors truncate">
          {brand.name}
        </span>
      </div>
      <span className="font-mono text-[11px] text-[#12100E]/30 shrink-0">
        {String(index).padStart(2, '0')}
      </span>

      <style jsx>{`
        .brand-row:hover .brand-name {
          color: #b8471e;
        }
      `}</style>
    </div>
  );
}