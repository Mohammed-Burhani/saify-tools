'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCategoryTree } from '@/lib/hooks';

export default function ProductsMegaMenu() {
  const pathname = usePathname();
  const { data: categories, isLoading } = useCategoryTree();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const isActive = pathname === '/products';

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        href="/products"
        className={isActive ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
      >
        Products
      </Link>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-40">
          <div className="w-[560px] bg-paper border border-line shadow-xl p-7">
            {isLoading && <p className="text-ink/40 text-[13.5px]">Loading categories…</p>}

            {!isLoading && (!categories || categories.length === 0) && (
              <p className="text-ink/40 text-[13.5px]">Categories coming soon.</p>
            )}

            {!isLoading && categories && categories.length > 0 && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {categories.map((category) => (
                  <div key={category._id}>
                    <Link
                      href={`/products?category=${category.slug.current}`}
                      className="block text-ink text-[14.5px] font-medium hover:text-rust transition-colors focus-ring"
                      onClick={() => setOpen(false)}
                    >
                      {category.name}
                    </Link>
                    {category.subcategories && category.subcategories.length > 0 && (
                      <ul className="mt-2.5 space-y-1.5">
                        {category.subcategories.map((sub) => (
                          <li key={sub._id}>
                            <Link
                              href={`/products?category=${sub.slug.current}`}
                              className="block text-ink/55 text-[13px] hover:text-rust transition-colors focus-ring"
                              onClick={() => setOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-7 pt-5 border-t border-line">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-ink hover:text-rust text-[13.5px] font-medium border-b border-ink/30 hover:border-rust pb-1 transition-colors focus-ring"
              >
                View all products →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
