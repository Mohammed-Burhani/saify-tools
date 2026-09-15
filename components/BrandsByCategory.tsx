'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useBrands, useCategories } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity/client';
import type { Brand, Category } from '@/lib/sanity/types';

export default function BrandsByCategory() {
  const { data: allBrands, isLoading: brandsLoading, error: brandsError } = useBrands();
  const { data: allCategories, isLoading: categoriesLoading } = useCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Only show category tabs that actually have at least one brand attached
  const categoriesWithBrands = useMemo(() => {
    if (!allCategories || !allBrands) return [];
    return allCategories.filter((cat: Category) =>
      allBrands.some((brand: Brand) => brand.categories?.some((c) => c._id === cat._id))
    );
  }, [allCategories, allBrands]);

  // Default to the first available category once data loads
  const effectiveCategory = activeCategory ?? categoriesWithBrands[0]?._id ?? null;

  const filteredBrands = useMemo(() => {
    if (!allBrands) return [];
    const sorted = allBrands.slice().sort((a: Brand, b: Brand) => (a.order ?? 999) - (b.order ?? 999));
    if (!effectiveCategory) return sorted;
    return sorted.filter((brand: Brand) =>
      brand.categories?.some((c) => c._id === effectiveCategory)
    );
  }, [allBrands, effectiveCategory]);

  const isLoading = brandsLoading || categoriesLoading;

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-4">
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
              Brands, by category
            </h2>
            <p className="text-ink/55 mt-6 max-w-xs leading-relaxed">
              Filter by what you&apos;re sourcing — every brand here is stock we carry, not a catalog we point you to.
            </p>
          </div>
          <div className="lg:col-span-8 lg:pt-1">
            {categoriesLoading && (
              <div className="text-ink/40 text-[14px]">Loading categories…</div>
            )}
            {!categoriesLoading && categoriesWithBrands.length > 0 && (
              <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter brands by category">
                {categoriesWithBrands.map((cat: Category) => {
                  const isActive = cat._id === effectiveCategory;
                  return (
                    <button
                      key={cat._id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(cat._id)}
                      className={
                        isActive
                          ? 'px-4 h-10 text-[13.5px] font-medium tracking-wide bg-ink text-paper transition-colors focus-ring'
                          : 'px-4 h-10 text-[13.5px] font-medium tracking-wide bg-transparent text-ink/70 border border-ink/20 hover:border-ink/40 hover:text-ink transition-colors focus-ring'
                      }
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {isLoading && (
          <div className="border-t border-ink/15 py-16 text-center text-ink/40 text-[14px]">
            Loading brands…
          </div>
        )}

        {brandsError && (
          <div className="border-t border-ink/15 py-16 text-center text-red-700 text-[14px]">
            Couldn&apos;t load brands.
          </div>
        )}

        {!isLoading && !brandsError && filteredBrands.length === 0 && (
          <div className="border-t border-ink/15 py-16 text-center text-ink/40 text-[14px]">
            No brands in this category yet.
          </div>
        )}

        {!isLoading && !brandsError && filteredBrands.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/15 border border-ink/15">
            {filteredBrands.map((brand: Brand) => (
              <BrandTile key={brand._id} brand={brand} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function BrandTile({ brand }: { brand: Brand }) {
  const src = brand.logo ? urlFor(brand.logo).width(320).height(320).fit('max').url() : null;

  return (
    <div className="group bg-paper hover:bg-white transition-colors p-8 flex flex-col items-center justify-center gap-5 aspect-square">
      <div className="relative w-full h-full flex items-center justify-center">
        {src ? (
          <Image
            src={src}
            alt={brand.name}
            width={1000}
            height={1000}
            className="h-full w-full object-contain grayscale group-hover:grayscale-0 transition-all"
            unoptimized
          />
        ) : (
          <span className="serif font-semibold text-[1.15rem] text-ink/70">
            {brand.name}
          </span>
        )}
      </div>
      {/* <span className="mono text-[11px] text-ink/45 tracking-wide">
        {brand.name}
      </span> */}
    </div>
  );
}
