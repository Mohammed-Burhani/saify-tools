import Image from 'next/image';

const points = [
  'Standard Sizes',
  'Non-Standard Sizes',
  'Custom Specifications',
  'High-Tensile Grades',
  'Industrial Applications',
];

export default function QualityPrecision() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="aspect-[5/6] overflow-hidden">
            <Image
              src="/hero-brands.jpeg"
              alt="Precision fasteners representing Saify Tools Centre's manufacturing standards"
              width={700}
              height={840}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Quality &amp; Precision</p>
          <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
            Built Around Your Specifications
          </h2>
          <p className="text-ink/60 leading-relaxed mt-7 text-[17px] max-w-lg">
            We can manufacture standard and non-standard fastening products based on customer
            requirements.
          </p>

          <ul className="mt-10 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 border-t border-ink/15 pt-4">
                <span className="mono text-[13px] text-rust">✓</span>
                <span className="text-ink text-[15.5px] font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
