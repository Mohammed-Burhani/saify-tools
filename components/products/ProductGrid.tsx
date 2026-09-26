'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAllProducts, useCategoryTree, useBrands } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity/client';
import type { Category, Product, Brand } from '@/lib/sanity/types';

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorySlug = searchParams.get('category');
  const brandSlug = searchParams.get('brand');

  const { data: products, isLoading: productsLoading, error } = useAllProducts();
  const { data: categoryTree, isLoading: categoriesLoading } = useCategoryTree();
  const { data: brands, isLoading: brandsLoading } = useBrands();

  const flatCategories = useMemo(() => {
    if (!categoryTree) return [];
    return categoryTree.flatMap((cat) => [cat, ...(cat.subcategories ?? [])]);
  }, [categoryTree]);

  const activeCategory = useMemo(
    () => flatCategories.find((c) => c.slug.current === categorySlug) ?? null,
    [flatCategories, categorySlug]
  );

  const activeBrand = useMemo(
    () => brands?.find((b: Brand) => b.slug.current === brandSlug) ?? null,
    [brands, brandSlug]
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
  }, [categorySlug, brandSlug]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    let filtered = products;
    
    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter((p: Product) => 
        p.categories?.some((c) => c._id === activeCategory._id)
      );
    }
    
    // Filter by brand
    if (activeBrand) {
      filtered = filtered.filter((p: Product) => p.brand?._id === activeBrand._id);
    }
    
    return filtered;
  }, [products, activeCategory, activeBrand]);

  const isLoading = productsLoading || categoriesLoading || brandsLoading;

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set('category', slug);
    } else {
      params.delete('category');
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const setBrand = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set('brand', slug);
    } else {
      params.delete('brand');
    }
    router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const clearFilters = () => {
    router.push('/products', { scroll: false });
  };

  return (
    <section id="catalog" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28 bg-paper">
      {/* Industrial header */}
      <div className="border-l-4 border-ink pl-6 mb-16">
        <div className="mono text-[10px] text-ink/40 tracking-[0.15em] mb-2">FILTER INVENTORY</div>
        <h2 className="mono text-[1.8rem] font-bold uppercase tracking-tight text-ink">
          Product Database
        </h2>
      </div>

      {/* Active filters - brutalist pills */}
      {(activeBrand || activeCategory) && (
        <div className="mb-12 p-6 bg-ink/5 border-l-4 border-rust">
          <div className="flex flex-wrap items-center gap-4">
            <span className="mono text-[11px] text-ink/50 tracking-wider">ACTIVE:</span>
            {activeBrand && (
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-rust text-paper mono text-[11px] tracking-wide">
                <span>BRAND: {activeBrand.name.toUpperCase()}</span>
                <button
                  onClick={() => setBrand(null)}
                  className="hover:text-paper/70 transition-colors text-[16px] leading-none"
                  aria-label="Clear brand filter"
                >
                  ×
                </button>
              </div>
            )}
            {activeCategory && (
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-rust text-paper mono text-[11px] tracking-wide">
                <span>CAT: {activeCategory.name.toUpperCase()}</span>
                <button
                  onClick={() => setCategory(null)}
                  className="hover:text-paper/70 transition-colors text-[16px] leading-none"
                  aria-label="Clear category filter"
                >
                  ×
                </button>
              </div>
            )}
            <button
              onClick={clearFilters}
              className="mono text-[10px] text-ink/60 hover:text-ink tracking-wider underline transition-colors"
            >
              RESET ALL
            </button>
          </div>
        </div>
      )}

      {/* Brand filter - industrial grid */}
      {brands && brands.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-ink/20" />
            <h3 className="mono text-[11px] text-ink/60 tracking-[0.12em]">BRAND FILTER</h3>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by brand">
            <FilterChip
              small
              label="ALL"
              active={!activeBrand}
              onClick={() => setBrand(null)}
            />
            {brands.map((brand: Brand) => (
              <FilterChip
                key={brand._id}
                small
                label={brand.name.toUpperCase()}
                active={activeBrand?._id === brand._id}
                onClick={() => setBrand(brand.slug.current)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Category filter - industrial grid */}
      {categoryTree && categoryTree.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-ink/20" />
            <h3 className="mono text-[11px] text-ink/60 tracking-[0.12em]">CATEGORY FILTER</h3>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products by category">
            <FilterChip
              label="ALL PRODUCTS"
              active={!activeParent}
              onClick={() => setCategory(null)}
            />
            {categoryTree.map((cat: Category) => (
              <FilterChip
                key={cat._id}
                label={cat.name.toUpperCase()}
                active={activeParent?._id === cat._id}
                onClick={() => setCategory(cat.slug.current)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Subcategory filter */}
      {activeParent && activeParent.subcategories && activeParent.subcategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-16 pl-6 border-l-2 border-steel/30">
          <FilterChip
            small
            label={`ALL ${activeParent.name.toUpperCase()}`}
            active={activeCategory?._id === activeParent._id}
            onClick={() => setCategory(activeParent.slug.current)}
          />
          {activeParent.subcategories.map((sub: Category) => (
            <FilterChip
              key={sub._id}
              small
              label={sub.name.toUpperCase()}
              active={activeCategory?._id === sub._id}
              onClick={() => setCategory(sub.slug.current)}
            />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="border-t-2 border-ink/10 py-20 text-center mono text-[12px] text-ink/40 tracking-wider">
          LOADING INVENTORY...
        </div>
      )}

      {error && (
        <div className="border-t-2 border-rust/30 py-20 text-center mono text-[12px] text-rust tracking-wider">
          ERROR: INVENTORY LOAD FAILED
        </div>
      )}

      {!isLoading && !error && filteredProducts.length === 0 && (
        <div className="border-t-2 border-ink/10 py-20 text-center mono text-[12px] text-ink/40 tracking-wider">
          NO PRODUCTS MATCH FILTER CRITERIA
        </div>
      )}

      {!isLoading && !error && filteredProducts.length > 0 && (
        <>
          {/* Brutalist product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-ink/15">
            {filteredProducts.slice(0, visibleCount).map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {visibleCount < filteredProducts.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + 12)}
                className="mono px-10 h-14 border-2 border-ink hover:bg-ink hover:text-paper text-ink text-[12px] font-bold tracking-[0.1em] transition-colors focus-ring uppercase"
              >
                Load More [{filteredProducts.length - visibleCount} Remaining]
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
          ? `${small ? 'px-4 h-9 text-[10px]' : 'px-5 h-11 text-[11px]'} mono font-bold tracking-[0.08em] bg-ink text-paper border-2 border-ink transition-all focus-ring uppercase`
          : `${small ? 'px-4 h-9 text-[10px]' : 'px-5 h-11 text-[11px]'} mono font-bold tracking-[0.08em] bg-transparent text-ink/60 border-2 border-ink/20 hover:border-ink/40 hover:text-ink transition-all focus-ring uppercase`
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
    <div className="group bg-paper border-r-2 border-b-2 border-ink/15 p-8 flex flex-col hover:bg-ink/5 transition-colors">
      {/* Product image */}
      <div className="relative aspect-square bg-paper2 border-2 border-ink/10 overflow-hidden mb-6">
        {src ? (
          <Image
            src={src}
            alt={image?.alt || product.name}
            fill
            className="object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="mono text-[14px] text-ink/20 tracking-wider">NO IMAGE</span>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-0 left-0 right-0 bg-rust">
            <span className="mono text-[9px] tracking-[0.12em] text-paper px-3 py-2 block">
              OUT OF STOCK
            </span>
          </div>
        )}
      </div>

      {/* Product info - brutalist layout */}
      <div className="flex-grow">
        <div className="mono text-[9px] text-rust tracking-[0.15em] mb-2">
          {product.brand?.name.toUpperCase()}
        </div>
        <h3 className="mono text-[14px] font-bold text-ink leading-tight mb-2 group-hover:text-rust transition-colors uppercase">
          {product.name}
        </h3>
        {product.sku && (
          <div className="flex items-center gap-2 mt-3">
            <div className="w-1 h-1 bg-ink/30" />
            <p className="mono text-[10px] text-ink/40 tracking-wider">SKU: {product.sku}</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mt-6 pt-6 border-t-2 border-ink/10">
        <a
          href="/#quote"
          className="mono inline-flex items-center gap-2 text-ink hover:text-rust text-[11px] font-bold tracking-wider transition-colors focus-ring uppercase group/link"
        >
          <span className="group-hover/link:translate-x-1 transition-transform">Request Quote</span>
          <span className="text-[16px]">▸</span>
        </a>
      </div>
    </div>
  );
}
