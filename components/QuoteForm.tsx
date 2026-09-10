export default function QuoteForm() {
  return (
    <section
      id="quote"
      className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28"
    >
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-steel-900 mb-3">
          Request a quote
        </h2>
        <p className="text-steel-500">
          Tell us your requirement and we&apos;ll get back within 24 hours.
        </p>
      </div>
      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 px-4 rounded-md border border-steel-200 focus:border-bolt-500 focus:ring-1 focus:ring-bolt-500 outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 px-4 rounded-md border border-steel-200 focus:border-bolt-500 focus:ring-1 focus:ring-bolt-500 outline-none transition-colors"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full h-12 px-4 rounded-md border border-steel-200 focus:border-bolt-500 focus:ring-1 focus:ring-bolt-500 outline-none transition-colors"
        />
        <textarea
          placeholder="Product Requirement"
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-steel-200 focus:border-bolt-500 focus:ring-1 focus:ring-bolt-500 outline-none transition-colors resize-none"
        ></textarea>
        <label className="flex items-center justify-between h-12 px-4 rounded-md border border-dashed border-steel-300 text-steel-500 cursor-pointer hover:border-bolt-400 transition-colors">
          <span className="text-sm">Upload File (Optional)</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 15V3M7 8l5-5 5 5M20 21H4" />
          </svg>
          <input type="file" className="hidden" />
        </label>
        <button
          type="submit"
          className="w-full h-12 rounded-md bg-bolt-600 hover:bg-bolt-700 text-white font-semibold transition-colors"
        >
          Request Quote
        </button>
        <div className="flex items-center justify-center gap-8 pt-2 text-sm text-steel-500">
          <span className="flex items-center gap-1.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            We respond within 24 hours
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Your details are safe
          </span>
        </div>
      </form>
    </section>
  );
}
