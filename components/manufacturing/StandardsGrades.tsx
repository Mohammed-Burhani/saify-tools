'use client';

import { useManufacturingStandards } from '@/lib/hooks';

const fallbackStandards = ['IS 1367', 'ASTM A193 B7', 'GRADE 8.8', 'GRADE 10.9', 'B7'];

export default function StandardsGrades() {
  const { data: standards, isLoading } = useManufacturingStandards();

  const hasContent = !isLoading && standards && standards.length > 0;

  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <div className="max-w-2xl">
        <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Standards &amp; Grades</p>
        <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
          Manufactured to Specification
        </h2>
        <p className="text-ink/60 leading-relaxed mt-7 text-[17px]">
          Manufactured according to applicable industrial standards and customer specifications.
        </p>
      </div>

      <div className="mt-14 lg:mt-16 flex flex-wrap gap-4">
        {hasContent
          ? standards!.map((standard) =>
              standard.specSheet?.asset?.url ? (
                <a
                  key={standard._id}
                  href={standard.specSheet.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={standard.description}
                  className="group flex items-center gap-3 mono text-[14px] text-ink tracking-[0.04em] border border-ink/15 px-6 py-4 hover:border-rust hover:text-rust transition-colors focus-ring"
                >
                  {standard.code}
                  <span className="text-ink/30 group-hover:text-rust text-[12px]">PDF ↓</span>
                </a>
              ) : (
                <div
                  key={standard._id}
                  title={standard.description}
                  className="mono text-[14px] text-ink tracking-[0.04em] border border-ink/15 px-6 py-4 hover:border-rust hover:text-rust transition-colors"
                >
                  {standard.code}
                </div>
              )
            )
          : fallbackStandards.map((standard) => (
              <div
                key={standard}
                className="mono text-[14px] text-ink tracking-[0.04em] border border-ink/15 px-6 py-4 hover:border-rust hover:text-rust transition-colors"
              >
                {standard}
              </div>
            ))}
      </div>
    </section>
  );
}
