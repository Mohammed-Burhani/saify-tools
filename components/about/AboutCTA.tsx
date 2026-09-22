import Image from 'next/image';

export default function AboutCTA() {
  return (
    <section>
      {/* Editorial intro */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Who We Serve</p>
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium">
              Serving Industry. Building Relationships.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-ink/60 leading-relaxed text-[17px] max-w-xl">
              We serve a wide range of customers across manufacturing, construction, automotive, engineering and maintenance. Our customers include small businesses, medium-sized enterprises and large corporations. We are committed to understanding their specific needs and providing tailored solutions to meet their requirements effectively.
            </p>
            <p className="text-ink/60 leading-relaxed text-[17px] max-w-xl mt-5">
              Saify Tools Centre is your trusted partner for high-quality industrial tools and equipment. With a focus on quality, customer satisfaction and continuous improvement, we strive to provide reliable solutions that enhance productivity and efficiency for businesses across various industries.
            </p>
          </div>
        </div>
      </div>

      {/* Split action panels */}
      <div className="grid md:grid-cols-2">
        <div className="bg-ink etched px-6 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
          <p className="mono text-[11px] text-paper/40 tracking-wide mb-4">SPEAK TO US</p>
          <h3 className="serif text-[1.7rem] sm:text-[2rem] text-paper font-medium leading-[1.15] max-w-sm">
            Have a question about our range or your account?
          </h3>
          <a
            href="/#contact"
            className="inline-flex items-center w-fit px-7 h-[52px] bg-rust hover:bg-rust2 text-paper text-[14.5px] font-medium tracking-wide transition-colors focus-ring mt-9"
          >
            Talk to Our Team →
          </a>
        </div>
        <div className="relative px-6 lg:px-12 py-16 lg:py-20 flex flex-col justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
            alt="Precision tools laid out on a workbench"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="relative">
            <p className="mono text-[11px] text-paper/50 tracking-wide mb-4">GET PRICING</p>
            <h3 className="serif text-[1.7rem] sm:text-[2rem] text-paper font-medium leading-[1.15] max-w-sm">
              Ready to order? Get a quote for your requirement.
            </h3>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 text-paper/85 hover:text-paper text-[14.5px] font-medium border-b border-paper/30 hover:border-paper pb-1 transition-colors focus-ring mt-9"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
