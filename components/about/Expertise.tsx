import Image from 'next/image';

const areas = [
  {
    title: 'Fasteners',
    description: 'High-quality fastening solutions, including Unbrako fasteners.',
    featured: true,
  },
  {
    title: 'Hand Tools',
    description: 'Reliable hand tools for a wide range of industrial applications.',
  },
  {
    title: 'Power Tools',
    description: 'Power tools selected to support demanding work requirements.',
  },
  {
    title: 'Cutting Tools',
    description: 'Precision cutting tools for industrial applications.',
  },
  {
    title: 'Measuring Instruments',
    description: 'Equipment designed to support accurate industrial work.',
  },
  {
    title: 'Hydraulic & Pneumatic Equipment',
    description: 'Industrial equipment for a range of applications.',
  },
  {
    title: 'Safety Equipment',
    description: 'Essential safety products for industrial and working environments.',
  },
];

export default function Expertise() {
  return (
    <section className="bg-paper2 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Our Expertise</p>
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium max-w-md">
              What We Know
            </h2>
          </div>
          <p className="text-ink/55 max-w-sm leading-relaxed">
            A comprehensive range of industrial tools and equipment — sourced with renowned brands for reliability across applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className={`group relative p-7 flex flex-col justify-between min-h-[220px] overflow-hidden ${
                area.featured ? 'sm:col-span-2 bg-ink' : 'bg-paper'
              }`}
            >
              {area.featured && (
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
              )}
              <span
                className={`relative mono text-[11px] tracking-wide ${
                  area.featured ? 'text-brass' : 'text-ink/35'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative mt-8">
                <h3
                  className={`serif text-[1.35rem] transition-colors ${
                    area.featured
                      ? 'text-paper'
                      : 'text-ink group-hover:text-rust'
                  }`}
                >
                  {area.title}
                </h3>
                <p
                  className={`text-[14.5px] mt-2 leading-relaxed max-w-xs ${
                    area.featured ? 'text-paper/70' : 'text-ink/50'
                  }`}
                >
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
