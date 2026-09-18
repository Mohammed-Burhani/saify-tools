'use client';

import Image from 'next/image';
import { useBrands } from '@/lib/hooks';
import { urlFor } from '@/lib/sanity/client';

export default function UnbrakoFeature() {
  const { data: brands } = useBrands();
  
  // Find Unbrako or use the first featured brand
  const featuredBrand = brands?.find(b => b.name.toLowerCase().includes('unbrako')) 
    || brands?.find(b => b.featured) 
    || brands?.[0];

  if (!featuredBrand) {
    return null;
  }

  const logoUrl = featuredBrand.logo ? urlFor(featuredBrand.logo).width(400).height(200).url() : null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <Image
              src="/hero-brands.jpeg"
              alt={`${featuredBrand.name} socket head cap fasteners`}
              width={600}
              height={750}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          {logoUrl ? (
            <div className="mb-6">
              <Image
                src={logoUrl}
                alt={featuredBrand.name}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
                unoptimized
              />
            </div>
          ) : (
            <p className="serif font-semibold text-[2rem] text-rust mb-6">
              {featuredBrand.name}
            </p>
          )}
          
          {featuredBrand.description ? (
            <div className="text-ink/70 text-[17px] leading-relaxed max-w-xl space-y-5">
              {featuredBrand.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <>
              <p className="text-ink/70 text-[17px] leading-relaxed mb-5 max-w-xl">
                At Saify Tools Centre, we&apos;re proud to be associated with the most reliable, globally trusted names in industrial fasteners — {featuredBrand.name} foremost among them. The partnership means our customers get authentic, high-quality product that meets spec, every order.
              </p>
              <p className="text-ink/70 text-[17px] leading-relaxed max-w-xl">
                Whether the requirement is precision tooling, heavy-duty fasteners, or industrial consumables, we source from manufacturers known for performance and consistency — not the cheapest equivalent.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
