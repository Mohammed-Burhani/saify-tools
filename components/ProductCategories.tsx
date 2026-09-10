const categories = [
  {
    title: 'Fasteners',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />
      </svg>
    ),
  },
  {
    title: 'Hand Tools',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Carbide Tools',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Industrial Supplies',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="7" width="18" height="13" rx="1.5" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: 'Foundation Bolts',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 3v18M15 3v18M4 8h16M4 16h16" />
      </svg>
    ),
  },
  {
    title: 'Custom Fasteners',
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M14 6l-3.5 3.5M3 21l3-1 8-8-2-2-8 8zM17.5 3.5l3 3-2 2-3-3z" />
      </svg>
    ),
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div className="max-w-xl mb-14">
        <p className="text-bolt-600 font-semibold text-sm tracking-wide mb-3">
          What we supply
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900">
          Product categories
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <a
            key={category.title}
            href="#"
            className="group flex items-center gap-5 p-6 rounded-lg border border-steel-100 hover:border-bolt-300 hover:shadow-lg hover:shadow-steel-900/5 transition-all bg-white"
          >
            <div className="w-14 h-14 shrink-0 rounded-md bg-steel-50 flex items-center justify-center text-steel-700 group-hover:bg-bolt-50 group-hover:text-bolt-600 transition-colors">
              {category.icon}
            </div>
            <span className="font-display font-semibold text-steel-900">
              {category.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
