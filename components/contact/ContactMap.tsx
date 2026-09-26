export default function ContactMap() {
  return (
    <section id="location" className="bg-paper2 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="mono text-[12px] text-rust tracking-[0.08em] mb-5">Find Us</p>
            <h2 className="serif text-[2.2rem] sm:text-[2.6rem] leading-[1.05] text-ink font-medium max-w-md">
              Visit Our Location
            </h2>
          </div>
          <p className="text-ink/55 max-w-sm leading-relaxed">
            Chennai, Tamil Nadu, India — reach out ahead of a visit and our team will be ready for
            you.
          </p>
        </div>

        <div className="border border-line bg-paper p-3">
          <div className="aspect-[16/7] overflow-hidden">
            <iframe
              title="Saify Tools Centre location in Chennai, Tamil Nadu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4650.116210715877!2d80.2871771!3d13.0953764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f44d21d89c7%3A0x9cd3f3aee25e0927!2sSAIFY%20TOOLS%20CENTRE!5e1!3m2!1sen!2sin!4v1790243403753!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale-[35%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
