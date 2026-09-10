const brands = [
  { name: 'Unbrako', className: 'px-5 py-2.5 rounded bg-bolt-600 text-white font-display font-bold text-lg tracking-tight' },
  { name: 'STANLEY', className: 'font-display font-extrabold text-xl text-steel-900' },
  { name: 'WIKA', className: 'font-display font-bold text-xl text-steel-900' },
  { name: 'Mitutoyo', className: 'font-display font-semibold text-xl text-bolt-600 italic' },
  { name: 'FESTO', className: 'font-display font-bold text-xl text-steel-700' },
  { name: 'Norton', className: 'font-display font-semibold text-xl text-steel-900' },
  { name: '3M', className: 'font-display font-black text-xl text-red-600' },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="bg-steel-50 py-16 lg:py-20 border-y border-steel-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center font-display font-semibold text-lg text-steel-800 mb-10">
          Authorised &amp; trusted brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {brands.map((brand) => (
            <span key={brand.name} className={brand.className}>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
