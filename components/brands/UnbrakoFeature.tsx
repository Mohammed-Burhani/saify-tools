export default function UnbrakoFeature() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="border border-steel-200 rounded-lg p-8 bg-white">
          <div className="aspect-[4/3] rounded-md overflow-hidden bg-steel-50 flex items-center justify-center">
            <img
              src="/hero-brands.jpeg"
              alt="Unbrako socket head fasteners"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-5 inline-flex items-center px-4 py-2 rounded bg-bolt-600">
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Unbrako
            </span>
          </div>
        </div>
        <div>
          <p className="text-bolt-600 font-semibold text-sm tracking-wide mb-3">
            Flagship partner
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900 mb-6">
            Our association with Unbrako
          </h2>
          <p className="text-steel-600 text-lg leading-relaxed mb-5">
            At Saify Tools Centre, we take pride in being associated with some of the most 
            reliable and globally trusted brands in the industrial tools and fasteners industry. 
            Our partnerships ensure that our customers receive only authentic, high-quality 
            products that meet industry standards.
          </p>
          <p className="text-steel-600 text-lg leading-relaxed">
            Whether your requirement is for precision tools, heavy-duty fasteners, or industrial 
            consumables, we source from brands known for performance, reliability, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
