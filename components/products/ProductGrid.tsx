'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAllProducts, useCategoryTree } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity/client';
import type { Category, Product } from '@/lib/sanity/types';

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorySlug = searchParams.get('category');

  const { data: products, isLoading: productsLoading, error } = useAllProducts();
  const { data: categoryTree, isLoading: categoriesLoading } = useCategoryTree();

  const flatCategories = useMemo(() => {
    if (!categoryTree) return [];
    return categoryTree.flatMap((cat) => [cat, ...(cat.subcategories ?? [])]);
  }, [categoryTree]);

  const activeCategory = useMemo(
    () => flatCategories.find((c) => c.slug.current === categorySlug) ?? null,
    [flatCategories, categorySlug]
  );

  // If the active category is a top-level one, its subcategories become a secondary filter row
  const activeParent = useMemo(() => {
    if (!categoryTree) return null;
    if (activeCategory && !activeCategory.parent) return activeCategory;
    if (activeCategory?.parent) {
      return categoryTree.find((c) => c._id === activeCategory.parent?._id) ?? null;
    }
    return null;
  }, [categoryTree, activeCategory]);

  const [visibleCount, setVisibleCount] = useState(12);
  useEffect(() => {
    setVisibleCount(12);
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!activeCategory) return products;
    return products.filter((p: Product) => p.categories?.some((c) => c._id === activeCategory._id));
  }, [products, activeCategory]);

  const isLoading = productsLoading || categoriesLoading;

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set('category', slug);
    } else {
      params.delete('category');
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  return (
    <section id="catalog" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      {/* Top-level category filter */}
      {categoryTree && categoryTree.length > 0 && (
        <div className="flex flex-wrap gap-2.5 mb-6" role="tablist" aria-label="Filter products by category">
          <FilterChip
            label="All Products"
            active={!activeParent}
            onClick={() => setCategory(null)}
          />
          {categoryTree.map((cat: Category) => (
            <FilterChip
              key={cat._id}
              label={cat.name}
              active={activeParent?._id === cat._id}
              onClick={() => setCategory(cat.slug.current)}
            />
          ))}
        </div>
      )}

      {/* Subcategory filter, shown once a parent with children is active */}
      {activeParent && activeParent.subcategories && activeParent.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-14 pl-1">
          <FilterChip
            small
            label={`All ${activeParent.name}`}
            active={activeCategory?._id === activeParent._id}
            onClick={() => setCategory(activeParent.slug.current)}
          />
          {activeParent.subcategories.map((sub: Category) => (
            <FilterChip
              key={sub._id}
              small
              label={sub.name}
              active={activeCategory?._id === sub._id}
              onClick={() => setCategory(sub.slug.current)}
            />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="border-t border-ink/15 py-16 text-center text-ink/40 text-[14px]">
          Loading products…
        </div>
      )}

      {error && (
        <div className="border-t border-ink/15 py-16 text-center text-red-700 text-[14px]">
          Couldn&apos;t load products.
        </div>
      )}

      {!isLoading && !error && filteredProducts.length === 0 && (
        <div className="border-t border-ink/15 py-16 text-center text-ink/40 text-[14px]">
          No products in this category yet.
        </div>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {filteredProducts.slice(0, visibleCount).map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 12)}
                className="inline-flex items-center px-7 h-[48px] border border-ink/20 hover:border-rust hover:text-rust text-ink text-[14px] font-medium tracking-wide transition-colors focus-ring"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  small,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        active
          ? `${small ? 'px-3.5 h-8 text-[12.5px]' : 'px-4 h-10 text-[13.5px]'} font-medium tracking-wide bg-ink text-paper transition-colors focus-ring`
          : `${small ? 'px-3.5 h-8 text-[12.5px]' : 'px-4 h-10 text-[13.5px]'} font-medium tracking-wide bg-transparent text-ink/70 border border-ink/20 hover:border-ink/40 hover:text-ink transition-colors focus-ring`
      }
    >
      {label}
    </button>
  );
}

function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0];
  const src = image ? urlFor(image).width(500).height(500).fit('crop').url() : null;

  return (
    <div className="group bg-paper p-6 flex flex-col">
      <div className="relative aspect-square bg-paper2 overflow-hidden mb-5">
        {src ? (
          <Image
            src={src}
            alt={image?.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="serif text-[1.1rem] text-ink/25">{product.name}</span>
          </div>
        )}
        {!product.inStock && (
          <span className="absolute top-3 left-3 mono text-[10px] tracking-wide bg-ink text-paper px-2.5 py-1">
            OUT OF STOCK
          </span>
        )}
      </div>
      <span className="mono text-[11px] text-ink/35 tracking-wide">{product.brand?.name}</span>
      <h3 className="serif text-[1.15rem] text-ink mt-1.5 group-hover:text-rust transition-colors">
        {product.name}
      </h3>
      {product.sku && <p className="mono text-[11.5px] text-ink/40 mt-1">SKU {product.sku}</p>}
      <a
        href="/#quote"
        className="inline-flex items-center gap-2 mt-4 text-ink/70 hover:text-rust text-[13px] font-medium border-b border-ink/20 hover:border-rust pb-1 transition-colors focus-ring w-fit"
      >
        Request a Quote →
      </a>
    </div>
  );
}
