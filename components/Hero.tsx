export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-steel-900 bolt-pattern overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-r from-steel-900 via-steel-900/85 to-steel-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-bolt-400 font-semibold text-sm tracking-wide mb-5">
            <span className="w-8 h-px bg-bolt-500"></span>
            Chennai&apos;s Trusted Industrial Supplier
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-white">
            Authorised distributor of high-quality fasteners &amp; industrial
            tools
          </h1>
          <p className="mt-6 text-lg text-steel-300 max-w-lg leading-relaxed">
            Supplying Unbrako fasteners, hand tools, carbide tools &amp; custom
            foundation bolts across Chennai.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-7 h-12 rounded-md bg-bolt-600 hover:bg-bolt-700 text-white font-semibold transition-colors"
            >
              Get Quote
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-7 h-12 rounded-md border border-steel-500 text-steel-100 hover:border-white hover:text-white font-semibold transition-colors"
            >
              View Products
            </a>
          </div>
        </div>
        {/* Hero image */}
        <div className="relative">
          <div className="aspect-4/3 rounded-lg overflow-hidden border border-steel-700 shadow-2xl shadow-black/40">
            <img
              src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?q=80&w=1200&auto=format&fit=crop"
              alt="Assorted industrial fasteners and bolts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
