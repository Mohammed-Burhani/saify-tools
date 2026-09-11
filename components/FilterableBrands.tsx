'use client';

import { useState } from 'react';
import { useCategories } from '@/lib/hooks/useCategories';
import { useBrandsByCategory } from '@/lib/hooks/useBrands';
import { urlFor } from '@/lib/sanity/client';
import Image from 'next/image';

export default function FilterableBrands() {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();
  const { data: brands = [], isLoading: brandsLoading } = useBrandsByCategory(activeCategoryId);

  // Set first category as active when categories load
  if (categories.length > 0 && !activeCategoryId) {
    setActiveCategoryId(categories[0]._id);
  }

  const isLoading = categoriesLoading || brandsLoading;

  return (
    <section id="filterable-brands" className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-steel-900 mb-4">
            OUR BRANDS
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-amber-600">
            <span className="inline-block w-8 h-0.5 bg-amber-500"></span>
            <span className="font-medium">Suresh G</span>
            <span className="inline-block w-8 h-0.5 bg-amber-500"></span>
          </div>
        </div>

        {/* Category Tabs */}
        {categoriesLoading ? (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-steel-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setActiveCategoryId(category._id)}
                className={`
                  px-6 py-3 rounded-lg font-medium text-base transition-all duration-200
                  ${
                    activeCategoryId === category._id
                      ? 'bg-steel-800 text-white shadow-lg scale-105'
                      : 'bg-white text-steel-700 hover:bg-steel-50 hover:shadow-md border border-steel-200'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Brand Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-8">
                <div className="w-full aspect-square bg-steel-200 animate-pulse rounded-lg mb-4"></div>
                <div className="h-6 bg-steel-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        ) : brands.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center justify-center group hover:-translate-y-1"
              >
                {/* Brand Logo */}
                <div className="w-full aspect-square mb-4 flex items-center justify-center bg-steel-50 rounded-lg group-hover:bg-steel-100 transition-colors overflow-hidden relative">
                  {brand.logo ? (
                    <Image
                      src={urlFor(brand.logo).width(300).height(300).url()}
                      alt={brand.name}
                      width={300}
                      height={300}
                      className="object-contain p-4"
                    />
                  ) : (
                    <span className="font-display font-bold text-2xl text-steel-400 opacity-50">
                      {brand.name}
                    </span>
                  )}
                </div>
                <p className="font-display font-semibold text-lg text-steel-900 text-center">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-steel-500 text-lg font-medium">
              No brands available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
