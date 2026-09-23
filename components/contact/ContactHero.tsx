const details = [
  { label: 'CALL US', value: '+91 73584 41763', href: 'tel:+917358441763' },
  { label: 'EMAIL US', value: 'info@saifytools.com', href: 'mailto:info@saifytools.com' },
  { label: 'VISIT US', value: 'Chennai, Tamil Nadu', href: '#location' },
];

export default function ContactHero() {
  return (
    <section className="relative bg-ink etched overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden md:flex items-center pointer-events-none select-none"
      >
        <span className="serif text-[16rem] lg:text-[20rem] leading-none text-paper/5 -mr-6 lg:-mr-14">
          @
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-16 xl:py-20 2xl:py-24">
        <p className="mono text-[12.5px] text-brass tracking-[0.08em] mb-4 lg:mb-5 xl:mb-7">
          Contact Us
        </p>
        <h1 className="serif text-[2.2rem] sm:text-[2.6rem] lg:text-[2.9rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[1.12] text-paper font-medium max-w-2xl">
          Let&apos;s Talk About Your Requirement.
        </h1>
        <p className="text-[15.5px] xl:text-[16.5px] 2xl:text-[17px] text-paper/55 max-w-xl mt-5 lg:mt-6 leading-relaxed">
          For pricing, availability or a custom manufacturing requirement, reach us directly or send
          a request below — we respond within 24 hours.
        </p>

        <div className="grid sm:grid-cols-3 gap-x-6 gap-y-6 mt-10 lg:mt-12 pt-8 border-t border-paper/15">
          {details.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              className="group block focus-ring"
            >
              <p className="mono text-[11px] text-paper/40 tracking-wide mb-2">{detail.label}</p>
              <p className="text-paper text-[16px] font-medium group-hover:text-rust transition-colors">
                {detail.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
