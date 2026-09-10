const reasons = [
  {
    title: 'Genuine Products',
    description:
      'Only authentic, high-quality tools sourced from trusted manufacturers.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" />
      </svg>
    ),
  },
  {
    title: 'Bulk Availability',
    description:
      'Ready stock for large orders, ensuring uninterrupted supply for your business.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="7" width="18" height="13" rx="1" />
        <path d="M3 11h18M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: 'Custom Manufacturing',
    description:
      'Tailored tool solutions designed to meet your exact industrial requirements.',
    icon: (
      <svg
        width="22"
        height="22"
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
    title: 'Local Expertise (Chennai)',
    description:
      'Deep understanding of local industry needs with on-ground support.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20.4 8.4a8.4 8.4 0 1 0-16.8 0c0 6.3 8.4 12.4 8.4 12.4s8.4-6.1 8.4-12.4z" />
        <circle cx="12" cy="8.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery',
    description:
      'Quick and reliable dispatch to keep your operations running without delays.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 12h11l4-5h3v10h-3l-4-5H3z" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Trusted Supplier',
    description:
      'A dependable partner known for consistency, transparency, and long-term relationships.',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M6.5 9.5a19.5 19.5 0 0 0 8 8l2-2a1 1 0 0 1 1-.25l3 1a1 1 0 0 1 .7 1v3a1 1 0 0 1-1 1C11.7 21.25 2.75 12.3 2.75 3.8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 .7l1 3a1 1 0 0 1-.25 1z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-steel-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <p className="text-bolt-400 font-semibold text-sm tracking-wide mb-3">
            Our edge
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Why choose Saify Tools Centre
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="w-11 h-11 rounded-md bg-bolt-600/15 flex items-center justify-center text-bolt-400 mb-5">
                {reason.icon}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-steel-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
