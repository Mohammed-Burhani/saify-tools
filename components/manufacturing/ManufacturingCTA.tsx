export default function ManufacturingCTA() {
  return (
    <section className="bg-ink etched">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center">
        <p className="mono text-[12px] text-brass tracking-[0.08em] mb-5">Get in Touch</p>
        <h2 className="serif text-[2.2rem] sm:text-[2.8rem] leading-[1.08] text-paper font-medium max-w-2xl mx-auto">
          Have a Custom Requirement?
        </h2>
        <p className="text-paper/55 leading-relaxed mt-6 text-[16.5px] max-w-xl mx-auto">
          Share your required size, grade, standard or specification with our team.
        </p>
        <p className="text-paper/40 text-[14.5px] leading-relaxed mt-4 max-w-lg mx-auto">
          Tell us what you need. We&apos;ll help you identify the right fastening solution for your
          requirement.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-11">
          <a
            href="/#quote"
            className="inline-flex items-center px-7 h-[52px] bg-rust hover:bg-rust2 text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring"
          >
            Send Enquiry →
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-paper/80 hover:text-paper text-[14.5px] font-medium border-b border-paper/30 hover:border-paper pb-1 transition-colors focus-ring"
          >
            Contact our manufacturing team →
          </a>
        </div>
      </div>
    </section>
  );
}
