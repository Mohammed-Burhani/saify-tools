import Image from 'next/image';

const values = [
  {
    title: 'Quality',
    description:
      'We are committed to providing tools and equipment of the highest quality, sourced from reputable manufacturers and suppliers. We ensure that every product meets stringent quality standards to deliver reliable performance and durability.',
    accent: 'bg-rust',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Our customers are at the center of everything we do. We prioritize their needs and strive to exceed their expectations by delivering excellent products, timely services and responsive support.',
    accent: 'bg-brass',
  },
  {
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards in all our business dealings. Honesty, transparency and fairness guide our interactions with customers, suppliers and employees.',
    accent: 'bg-steel',
  },
  {
    title: 'Continuous Improvement',
    description:
      'We embrace a culture of continuous improvement, constantly seeking ways to enhance our products, processes and services through innovation, technological advancements and stakeholder feedback.',
    accent: 'bg-rust2',
  },
];

export default function Values() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="max-w-xl mb-14 lg:mb-20">
        <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Our Principles</p>
        <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
          The Values Behind Our Work
        </h2>
      </div>

      <div>
        {/* Image — full width, 16:9. Its height is left alone; nothing
            downstream needs to match it. */}
        <div className="aspect-video overflow-hidden">
          <Image
            src="/hero-brands.jpeg"
            alt="Precision fasteners representing the quality standards behind Saify Tools Centre"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card panel — pulled up to float over the image's bottom edge.
            The overlap is a fixed, shallow offset rather than a full-height
            match, so it stays clean regardless of how tall the text runs. */}
        <div className="relative z-10 -mt-8 sm:-mt-16 lg:-mt-20 mx-4 sm:mx-10 lg:mx-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line shadow-2xl">
          {values.map((value, index) => (
            <div key={value.title} className="relative bg-paper p-7 lg:p-8 overflow-hidden">
              <span
                aria-hidden="true"
                className="serif absolute -top-5 -right-2 text-[5.5rem] leading-none text-ink/5 select-none pointer-events-none"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={`relative w-8 h-[3px] ${value.accent} mb-5`} />
              <h3 className="relative text-ink text-[1.1rem] font-medium mb-2">{value.title}</h3>
              <p className="relative text-ink/55 text-[14px] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
