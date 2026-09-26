export default function ProductsHero() {
  return (
    <section className="relative bg-ink overflow-hidden border-y-4 border-rust">
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Brutalist angle element */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] border-l-4 border-b-4 border-rust/20"
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12">
          {/* Left rail - industrial labeling */}
          <div className="hidden lg:flex lg:col-span-2 border-r-2 border-paper/10 py-16 px-4">
            <div className="flex flex-col justify-between w-full">
              <div className="mono text-[10px] text-rust tracking-[0.15em] space-y-1">
                <div className="border-l-2 border-rust pl-3 py-1">SECTION_02</div>
                <div className="text-paper/40 pl-3">INVENTORY</div>
              </div>
              <div className="mono text-[9px] text-paper/30 tracking-widest">
                <div className="rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  SAIFY TOOLS CENTRE
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-10 px-6 lg:px-16 py-16 lg:py-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-rust" />
              <span className="mono text-[11px] text-rust tracking-[0.12em]">
                PRODUCTS
              </span>
            </div>

            <h1 className="mono text-[2.8rem] sm:text-[3.6rem] lg:text-[4.8rem] leading-[0.95] text-paper font-bold uppercase tracking-tight max-w-4xl">
              INDUSTRIAL<br />CATALOG
            </h1>

            <div className="mt-10 lg:mt-12 border-l-4 border-steel pl-6 lg:pl-8">
              <p className="mono text-[13px] lg:text-[14px] text-paper/70 leading-[1.8] max-w-2xl">
                FASTENERS / HAND TOOLS / POWER TOOLS / INDUSTRIAL EQUIPMENT<br />
                IN-STOCK INVENTORY — NO EXTERNAL CATALOG REFERENCES
              </p>
            </div>

            {/* Brutalist metrics bar */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-baseline gap-3">
                <div className="mono text-[2.4rem] font-bold text-rust">■</div>
                <div>
                  <div className="mono text-[10px] text-paper/40 tracking-wider">CATEGORIES</div>
                  <div className="mono text-[18px] font-bold text-paper">08+</div>
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <div className="mono text-[2.4rem] font-bold text-brass">■</div>
                <div>
                  <div className="mono text-[10px] text-paper/40 tracking-wider">BRANDS</div>
                  <div className="mono text-[18px] font-bold text-paper">30+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
