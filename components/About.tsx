export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="aspect-4/3 rounded-lg overflow-hidden shadow-xl shadow-steel-900/10">
          <img
            src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop"
            alt="Warehouse aisle stocked with industrial tools and fasteners"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-bolt-600 font-semibold text-sm tracking-wide mb-3">
            Who we are
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900 mb-6">
            About Saify Tools Centre
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed mb-8">
            Chennai-based supplier of industrial tools and fasteners. Authorised
            distributor of Unbrako products. We specialise in bulk supply and
            custom manufacturing solutions.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-7 h-12 rounded-md bg-steel-900 hover:bg-steel-800 text-white font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
