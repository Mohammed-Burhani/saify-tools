export default function VisionMission() {
  return (
    <section className="bg-ink etched">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <p className="mono text-[12px] text-brass tracking-[0.08em] text-center mb-4">
          Vision &amp; Mission
        </p>
        <h2 className="serif text-[2.2rem] sm:text-[2.6rem] text-paper font-medium text-center">
          What We Believe
        </h2>

        <div className="grid md:grid-cols-2 mt-16 lg:mt-20 border-t border-paper/15">
          <div className="relative p-10 lg:p-14 md:border-r border-paper/15 overflow-hidden">
            <span
              aria-hidden="true"
              className="serif absolute -top-6 -left-2 text-[7rem] leading-none text-paper/5 select-none pointer-events-none"
            >
              “
            </span>
            <h3 className="relative mono text-[12px] text-brass tracking-[0.12em] mb-6">VISION</h3>
            <p className="relative text-paper/65 text-[16.5px] leading-relaxed max-w-md">
              Our vision is to be the preferred choice for industrial tools and equipment solutions. We strive to consistently offer a comprehensive range of top-notch products that cater to the evolving needs of our customers.
            </p>
            <p className="relative text-paper/65 text-[16.5px] leading-relaxed max-w-md mt-4">
              By staying ahead of industry trends and leveraging technological advancements, we aim to provide innovative and reliable solutions that contribute to the success of our clients.
            </p>
          </div>
          <div className="relative p-10 lg:p-14 overflow-hidden">
            <span
              aria-hidden="true"
              className="serif absolute -top-6 -left-2 text-[7rem] leading-none text-paper/5 select-none pointer-events-none"
            >
              “
            </span>
            <h3 className="relative mono text-[12px] text-brass tracking-[0.12em] mb-6">MISSION</h3>
            <p className="relative text-paper/65 text-[16.5px] leading-relaxed max-w-md">
              Our mission is to deliver the highest quality tools and equipment that empower businesses to enhance productivity and efficiency.
            </p>
            <p className="relative text-paper/65 text-[16.5px] leading-relaxed max-w-md mt-4">
              We are dedicated to providing exceptional customer service by understanding our clients&apos; requirements and offering personalized solutions. By maintaining strong relationships with our customers and suppliers, we aim to foster long-term partnerships based on trust and mutual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
