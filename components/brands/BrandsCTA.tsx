import Link from 'next/link';

export default function BrandsCTA() {
  return (
    <section className="relative bg-steel-800 bolt-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 to-transparent"></div>
      <div className="relative max-w-3xl mx-auto px-6 py-20 lg:py-24 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
          Looking for products from trusted brands?
        </h2>
        <p className="text-steel-300 text-lg mb-9">
          Get in touch with us for the best pricing and availability.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center px-7 h-12 rounded-md bg-bolt-600 hover:bg-bolt-700 text-white font-semibold transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-7 h-12 rounded-md bg-white hover:bg-steel-100 text-steel-900 font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
