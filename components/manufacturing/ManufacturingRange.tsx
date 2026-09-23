import Image from 'next/image';

const products = [
  {
    title: 'Foundation Bolts',
    items: ['J Bolts', 'U Bolts', 'L / Anchor Bolts', 'Customized Foundation Bolts'],
    image: '/hero-home.png',
    featured: true,
  },
  {
    title: 'High-Strength & Special Bolts',
    items: ['MS Grade 8.8', 'Grade 10.9', 'B7 Bolts', 'ASTM A193 Grade B7'],
    image: '/cta-home.png',
  },
  {
    title: 'Threaded Rods',
    items: [
      'Full Threaded Rods',
      'Metric Threaded Rods',
      'UNC / UNF',
      'MS Threaded Rods',
      'High-Tensile Threaded Rods',
      'Customized Lengths',
    ],
    image: '/hero-brands.jpeg',
  },
];

export default function ManufacturingRange() {
  return (
    <section id="manufacturing-range" className="bg-paper2 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">
              Our Manufacturing Range
            </p>
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium max-w-md">
              Engineered Fastening Solutions
            </h2>
          </div>
          <p className="text-ink/55 max-w-sm leading-relaxed">
            Engineered fastening solutions for industrial and infrastructure requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative flex flex-col min-h-[420px] overflow-hidden ${
                product.featured ? 'bg-ink' : 'bg-paper'
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  className={`object-cover transition-opacity ${
                    product.featured ? 'opacity-45 group-hover:opacity-55' : 'opacity-90 group-hover:opacity-100'
                  }`}
                />
              </div>

              <div className="relative p-7 flex flex-col flex-1">
                <span
                  className={`mono text-[11px] tracking-wide ${
                    product.featured ? 'text-brass' : 'text-ink/35'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`serif text-[1.35rem] mt-4 ${
                    product.featured ? 'text-paper' : 'text-ink'
                  }`}
                >
                  {product.title}
                </h3>
                <ul className="mt-4 space-y-2 flex-1">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className={`text-[14px] leading-relaxed flex items-start gap-2 ${
                        product.featured ? 'text-paper/65' : 'text-ink/55'
                      }`}
                    >
                      <span className={product.featured ? 'text-brass' : 'text-rust'}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#quote"
                  className={`inline-flex items-center gap-2 mt-6 text-[13.5px] font-medium border-b pb-1 transition-colors focus-ring w-fit ${
                    product.featured
                      ? 'text-paper/85 hover:text-paper border-paper/30 hover:border-paper'
                      : 'text-ink hover:text-rust border-ink/30 hover:border-rust'
                  }`}
                >
                  View Products →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
