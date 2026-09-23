const steps = [
  {
    title: 'Requirement',
    description: 'Share your required dimensions, grade, standard or specification.',
  },
  {
    title: 'Engineering / Specification',
    description: 'Requirements are reviewed and specifications are established.',
  },
  {
    title: 'Manufacturing',
    description: 'Production according to the approved requirements.',
  },
  {
    title: 'Quality Check',
    description: 'Products are checked against the specified requirements.',
  },
  {
    title: 'Dispatch',
    description: 'Completed products are prepared for dispatch.',
  },
];

const options = ['CUSTOM DIMENSIONS', 'CUSTOM THREADING', 'CUSTOM LENGTHS', 'CUSTOM SPECIFICATIONS'];

export default function CustomProcess() {
  return (
    <section className="bg-ink etched">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <p className="mono text-[12px] text-brass tracking-[0.08em] mb-5">Custom Manufacturing</p>
        <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-paper font-medium max-w-2xl">
          Custom / Non-Standard Manufacturing
        </h2>
        <p className="text-paper/55 leading-relaxed mt-6 text-[16.5px] max-w-xl">
          Customized dimensions, threading, lengths and specifications available based on customer
          requirements.
        </p>

        <div className="mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-5 border-t border-paper/15">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative p-7 lg:p-6 border-b lg:border-b-0 border-r border-paper/15 lg:last:border-r-0"
            >
              <span className="mono text-[11px] text-brass tracking-wide">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-paper text-[1.02rem] font-medium mt-4 mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-paper/50 text-[13.5px] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-14 lg:mt-16">
          {options.map((option) => (
            <span
              key={option}
              className="mono text-[11px] text-paper/60 tracking-[0.08em] border border-paper/20 px-3.5 py-2"
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
