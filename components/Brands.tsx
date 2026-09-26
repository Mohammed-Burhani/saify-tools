'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useBrands } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity';

// Shape returned by your `brand` schema, as used here
type Brand = {
  _id: string;
  name: string;
  slug: { current: string };
  logo: any; // Sanity image ref — passed straight into urlFor()
  featured?: boolean;
  order?: number;
};

export default function Brands() {
  const { data: allBrands, isLoading, error } = useBrands();

  const brands: Brand[] | undefined = allBrands
    ?.slice()
    .sort((a: Brand, b: Brand) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <section className="bg-[#EBE5D8] border-y border-[#D8D0BE] py-14 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-baseline justify-between mb-8">
          <p className="font-mono text-[12px] text-[#12100E]/45 tracking-wide">
            Authorised for
          </p>
          <Link
            href="/brands"
            className="text-[13.5px] text-[#12100E]/60 hover:text-[#B8471E] border-b border-[#12100E]/30 hover:border-[#B8471E] pb-0.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B8471E] focus-visible:outline-offset-2"
          >
            View all brands
          </Link>
        </div>
      </div>

      {isLoading && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-[#12100E]/40 text-[14px]">Loading brands…</div>
        </div>
      )}

      {error && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-red-700 text-[14px]">Couldn&apos;t load brands.</div>
        </div>
      )}

      {!isLoading && !error && (!brands || brands.length === 0) && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-[#12100E]/40 text-[14px]">No brands available.</div>
        </div>
      )}

      {!isLoading && !error && brands && brands.length > 0 && (
        <BrandMarquee brands={brands} />
      )}
    </section>
  );
}

function BrandMarquee({ brands }: { brands: Brand[] }) {
  // Duplicate the track once so the -50% translateX loop is seamless.
  // If this list is very short (<6 or so), duplicate again so the loop
  // doesn't visibly "restart" on wide screens — tune the threshold as needed.
  const track = brands.length < 6 ? [...brands, ...brands, ...brands, ...brands] : [...brands, ...brands];

  return (
    <div className="relative group">
      {/* edge fades so logos don't hard-cut at the viewport edge */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#EBE5D8] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#EBE5D8] to-transparent z-10" />

      <div className="flex overflow-hidden">
        <div
          className="flex items-center gap-16 lg:gap-20 pr-16 lg:pr-20 shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {track.map((brand, i) => (
            <BrandLogo key={`${brand._id}-${i}`} brand={brand} />
          ))}
        </div>
        {/* aria-hidden duplicate keeps the loop visually seamless without
            doubling up on screen-reader content */}
        <div
          aria-hidden="true"
          className="flex items-center gap-16 lg:gap-20 pr-16 lg:pr-20 shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {track.map((brand, i) => (
            <BrandLogo key={`${brand._id}-dup-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
      `}</style>
    </div>
  );
}

// Display height for each logo's box. We request the Sanity source at
// 2x this value so retina/high-DPI screens still get a crisp image —
// requesting only the display size (or smaller, as before) is what was
// causing the upscale blur.
const LOGO_DISPLAY_HEIGHT = 128;

function BrandLogo({ brand }: { brand: Brand }) {
  const src = brand.logo
    ? urlFor(brand.logo).height(LOGO_DISPLAY_HEIGHT * 2).fit('max').url()
    : null;

  if (!src) {
    // Fallback to name if a brand is missing its logo asset, so the
    // marquee never silently drops an entry.
    return (
      <a 
        href={`/products?brand=${brand.slug.current}`}
        className="font-serif font-semibold text-[1.15rem] text-[#12100E]/70 hover:text-[#B8471E] whitespace-nowrap transition-colors"
      >
        {brand.name}
      </a>
    );
  }

  return (
    <a
      href={`/products?brand=${brand.slug.current}`}
      className="relative shrink-0 flex items-center justify-center w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
      style={{ height: LOGO_DISPLAY_HEIGHT }}
      title={`View ${brand.name} products`}
    >
      {/*
        Two things fixed vs. the previous version:
        1. `unoptimized` is back — Sanity's CDN already returns the image
           pre-resized to the requested height. Letting Next's image
           optimizer *also* resize it (based on width/height props) was
           the main source of blur: it was treating a ~64px source as if
           it needed to be generated at 1000x1000.
        2. `object-contain` inside a fixed-height, natural-width box
           instead of forcing a hard h-32 w-32 square — logos keep their
           real aspect ratio instead of being stretched/squeezed.
      */}
      <Image
        src={src}
        alt={brand.name}
        height={LOGO_DISPLAY_HEIGHT}
        width={LOGO_DISPLAY_HEIGHT * 3}
        unoptimized
        className="h-full w-auto object-contain"
      />
    </a>
  );
}