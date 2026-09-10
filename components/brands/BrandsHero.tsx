export default function BrandsHero() {
  return (
    <section className="relative bg-steel-900 bolt-pattern overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
          alt="Precision tools and components laid out"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-steel-900/70 via-steel-900/85 to-steel-900"></div>
      <div className="relative max-w-3xl mx-auto px-6 py-24 lg:py-28 text-center">
        <p className="inline-flex items-center gap-2 text-bolt-400 font-semibold text-sm tracking-wide mb-5">
          <span className="w-8 h-px bg-bolt-500"></span>
          Our Partners
          <span className="w-8 h-px bg-bolt-500"></span>
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] text-white mb-5">
          Trusted brands we deal with
        </h1>
        <p className="text-lg text-steel-300 max-w-xl mx-auto leading-relaxed">
          We supply genuine products from globally recognised and industry-leading brands, 
          ensuring quality, durability, and performance for every requirement.
        </p>
      </div>
    </section>
  );
}
