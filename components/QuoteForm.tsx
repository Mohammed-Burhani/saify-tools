export default function QuoteForm() {
  return (
    <section id="quote" className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
            Request a quote
          </h2>
          <p className="text-ink/55 mt-6 max-w-xs leading-relaxed">
            Tell us what you need. We respond within 24 hours with pricing and availability.
          </p>
          <div className="mono text-[12.5px] text-ink/40 mt-10 space-y-1.5">
            <p>RESPONSE TIME — 24H</p>
            <p>DETAILS KEPT PRIVATE</p>
          </div>
        </div>
        <form className="lg:col-span-8 border-t border-ink/15">
          <div className="grid sm:grid-cols-2">
            <div className="border-b border-r-0 sm:border-r border-ink/15 py-5 pr-6">
              <label className="mono text-[11px] text-ink/40 tracking-wide">NAME</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-rust outline-none py-2.5 mt-1 text-[15px] placeholder:text-ink/30 focus-ring"
              />
            </div>
            <div className="border-b border-ink/15 py-5 sm:pl-6">
              <label className="mono text-[11px] text-ink/40 tracking-wide">EMAIL</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-rust outline-none py-2.5 mt-1 text-[15px] placeholder:text-ink/30 focus-ring"
              />
            </div>
          </div>
          <div className="border-b border-ink/15 py-5">
            <label className="mono text-[11px] text-ink/40 tracking-wide">PHONE</label>
            <input
              type="tel"
              placeholder="+91"
              className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-rust outline-none py-2.5 mt-1 text-[15px] placeholder:text-ink/30 focus-ring"
            />
          </div>
          <div className="border-b border-ink/15 py-5">
            <label className="mono text-[11px] text-ink/40 tracking-wide">PRODUCT REQUIREMENT</label>
            <textarea
              rows={3}
              placeholder="Part type, size, spec, quantity..."
              className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-rust outline-none py-2.5 mt-1 text-[15px] placeholder:text-ink/30 resize-none focus-ring"
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-b border-ink/15 py-5">
            <label className="flex items-center gap-3 cursor-pointer text-ink/50 hover:text-ink transition-colors">
              <span className="mono text-[11px] tracking-wide">ATTACH DRAWING (OPTIONAL)</span>
              <input type="file" className="hidden" />
            </label>
            <span className="text-ink/30 text-lg">＋</span>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto mt-8 inline-flex items-center justify-center px-9 h-[52px] bg-ink hover:bg-rust text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
