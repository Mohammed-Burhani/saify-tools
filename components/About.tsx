import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="aspect-[5/6] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop"
              alt="Warehouse aisle stocked with industrial fasteners and tools"
              width={600}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-8">
          <blockquote className="serif text-[1.8rem] sm:text-[2.15rem] leading-[1.25] text-ink font-medium border-l-2 border-rust pl-7">
            Chennai-based supplier of industrial tools and fasteners, built on bulk supply and custom manufacturing — not either one alone.
          </blockquote>
          <p className="text-ink/60 leading-relaxed mt-9 max-w-xl">
            We&apos;re an authorised distributor of Unbrako products, which means what ships from our floor matches the spec on the drawing — no substitutions, no second-guessing torque values on site. Where a standard part doesn&apos;t fit, we manufacture foundation bolts and custom fasteners to your drawing directly.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 mt-8 text-ink hover:text-rust text-[14.5px] font-medium border-b border-ink/30 hover:border-rust pb-1 transition-colors focus-ring"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
