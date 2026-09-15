'use client';

import { useCategories } from '@/lib/hooks';

export default function ProductCategories() {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section id="catalog" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
              What we<br />keep in stock
            </h2>
            <p className="text-ink/55 mt-6 max-w-xs leading-relaxed">
              Six product lines, sourced and stocked for immediate dispatch across Chennai and Tamil Nadu.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-ink/15">
              <div className="py-8 text-center text-ink/40">Loading categories...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="catalog" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4">
          <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
            What we<br />keep in stock
          </h2>
          <p className="text-ink/55 mt-6 max-w-xs leading-relaxed">
            Six product lines, sourced and stocked for immediate dispatch across Chennai and Tamil Nadu.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-ink/15">
            {categories?.map((category, index) => (
              <a
                key={category._id}
                href="#"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 border-b border-ink/15 hover:bg-paper2/60 transition-colors px-1 focus-ring"
              >
                <span className="mono text-[13px] text-ink/35 w-12">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="serif text-[1.35rem] text-ink">{category.name}</h3>
                  {category.description && (
                    <p className="text-ink/50 text-[14.5px] mt-1">{category.description}</p>
                  )}
                </div>
                <span className="text-ink/30 group-hover:text-rust group-hover:translate-x-1 transition-all text-xl">
                  ›
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
