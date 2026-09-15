const reasons = [
  {
    title: 'Genuine products, every time',
    description: 'Sourced directly from authorised manufacturers — nothing grey-market, nothing re-labelled.',
  },
  {
    title: 'Stock for real order sizes',
    description: "Ready inventory for bulk orders, so a production run doesn't wait on our restock.",
  },
  {
    title: 'Built to your drawing',
    description: 'Foundation bolts and non-standard fasteners manufactured to exact specification.',
  },
  {
    title: 'On-ground in Chennai',
    description: 'Local dispatch and local knowledge of what this industry actually needs, fast.',
  },
  {
    title: 'Delivery that respects your line',
    description: 'Dispatch timed against your schedule — a stalled line costs more than the part.',
  },
  {
    title: 'A supplier you keep',
    description: "Consistency across years, not just the first order — that's what long accounts are built on.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink etched">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-paper font-medium">
              Why manufacturers stay with us
            </h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-11">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-t border-paper/15 pt-5">
                <h3 className="text-paper text-[1.05rem] font-medium mb-2">
                  {reason.title}
                </h3>
                <p className="text-paper/50 text-[14.5px] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
