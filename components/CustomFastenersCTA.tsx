import Image from 'next/image';

export default function CustomFastenersCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/cta-home.png"
        alt="Close-up of custom manufactured bolts and fasteners"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/50"></div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="mono text-[12px] text-brass tracking-wide mb-6">
            Custom manufacturing
          </p>
          <h2 className="serif text-[2.3rem] sm:text-[3rem] leading-[1.08] text-paper font-medium mb-6">
            Send the drawing. We&apos;ll manufacture the fastener.
          </h2>
          <p className="text-paper/60 text-[16px] leading-relaxed mb-10 max-w-lg">
            Foundation bolts and non-standard fasteners built to your exact drawings and specifications — no minimum drama, just the part you need.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center px-7 h-[52px] bg-rust hover:bg-rust2 text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring"
          >
            Send Your Requirement
          </a>
        </div>
      </div>
    </section>
  );
}
