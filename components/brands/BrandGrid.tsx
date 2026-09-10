const brands = [
  { name: 'Unbrako', display: 'Unbrako', color: 'text-bolt-600', weight: 'font-bold' },
  { name: 'STANLEY', display: 'STANLEY', color: 'text-steel-900', weight: 'font-extrabold' },
  { name: 'MITUTOYO', display: 'Mitutoyo', color: 'text-bolt-600', weight: 'font-semibold italic' },
  { name: 'WIKA', display: 'WIKA', color: 'text-steel-800', weight: 'font-bold' },
  { name: 'FESTO', display: 'FESTO', color: 'text-steel-600', weight: 'font-bold' },
  { name: 'TAPARIA', display: 'Taparia', color: 'text-bolt-600', weight: 'italic font-semibold' },
  { name: 'ADDISON', display: 'Addison', color: 'text-steel-700', weight: 'font-bold' },
  { name: 'TOTEM', display: 'Totem', color: 'text-bolt-500', weight: 'font-bold' },
  { name: 'TAEGUTEC', display: 'TaeguTec', color: 'text-steel-700', weight: 'font-bold' },
  { name: 'ROTABROACH', display: 'Rotabroach', color: 'text-bolt-600', weight: 'italic font-bold text-center leading-tight', size: 'text-lg' },
  { name: 'YG (YG-1)', display: 'YG', color: 'text-bolt-600', weight: 'font-black' },
  { name: 'INDIAN TOOLS', display: 'Indian Tools', color: 'text-steel-800', weight: 'font-bold text-center leading-tight', size: 'text-lg' },
  { name: 'DANFOSS', display: 'Danfoss', color: 'text-bolt-600', weight: 'italic font-semibold' },
  { name: '3M', display: '3M', color: 'text-red-600', weight: 'font-black' },
  { name: 'PRINCE', display: 'Prince', color: 'text-bolt-600', weight: 'italic font-bold' },
  { name: 'FINOLEX', display: 'Finolex', color: 'text-steel-700', weight: 'font-bold' },
];

export default function BrandGrid() {
  return (
    <section className="bg-steel-50 py-20 lg:py-24 border-y border-steel-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-bolt-600 font-semibold text-sm tracking-wide mb-3">
            Full lineup
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900">
            Our brands
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white border border-steel-100 hover:border-bolt-300 hover:shadow-lg hover:shadow-steel-900/5 transition-all"
            >
              <span className={`font-display ${brand.size || 'text-xl'} ${brand.color} ${brand.weight}`}>
                {brand.display}
              </span>
              <span className="text-xs font-semibold tracking-wide text-steel-500">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
