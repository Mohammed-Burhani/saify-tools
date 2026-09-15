import Image from 'next/image';
import Link from 'next/link';

export default function BrandsCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop"
        alt="Precision tools laid out on a workbench"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/85"></div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-28">
        <div className="max-w-2xl">
          <h2 className="serif text-[2.3rem] sm:text-[2.9rem] leading-[1.1] text-paper font-medium mb-6">
            Looking for a specific brand?
          </h2>
          <p className="text-paper/60 text-[16px] leading-relaxed mb-10 max-w-lg">
            Get in touch for pricing and availability — if it&apos;s on this list, we can get it to you.
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <a
              href="/#quote"
              className="inline-flex items-center px-7 h-[52px] bg-rust hover:bg-rust2 text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring"
            >
              Request a Quote
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-paper/80 hover:text-paper text-[14.5px] font-medium border-b border-paper/30 hover:border-paper pb-1 transition-colors focus-ring"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
