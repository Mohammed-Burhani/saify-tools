'use client';

import { useAllBrands } from '@/lib/hooks/useBrands';
import { urlFor } from '@/lib/sanity/client';
import Image from 'next/image';

export default function BrandGrid() {
  const { data: brands = [], isLoading } = useAllBrands();

  return (
    <section className="bg-steel-50 py-20 lg:py-24 border-y border-steel-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-bolt-600 font-semibold text-sm tracking-wide mb-3">
            Full lineup
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900">
            Our brands
          </h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="p-6 rounded-lg bg-white border border-steel-100">
                <div className="w-full aspect-square bg-steel-200 animate-pulse rounded mb-4"></div>
                <div className="h-4 bg-steel-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        ) : brands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white border border-steel-100 hover:border-bolt-300 hover:shadow-lg hover:shadow-steel-900/5 transition-all group"
              >
                <div className="w-full aspect-square flex items-center justify-center relative overflow-hidden rounded">
                  {brand.logo ? (
                    <Image
                      src={urlFor(brand.logo).width(200).height(200).url()}
                      alt={brand.name}
                      width={200}
                      height={200}
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <span className="font-display text-xl font-bold text-steel-400">
                      {brand.name}
                    </span>
                  )}
                </div>
                <div className="text-center">
                  <span className="font-display text-lg font-bold text-steel-900">
                    {brand.name}
                  </span>
                  {brand.categories && brand.categories.length > 0 && (
                    <p className="text-xs font-semibold tracking-wide text-steel-500 mt-1">
                      {brand.categories.map(cat => cat.name).join(', ')}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-steel-500 text-lg">No brands available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
