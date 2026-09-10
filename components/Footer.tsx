export default function Footer() {
  return (
    <footer id="contact" className="bg-steel-100 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2L30 9.5V24.5L17 32L4 24.5V9.5L17 2Z"
              stroke="#e0530a"
              strokeWidth="2"
            />
            <path
              d="M17 11L22.5 14.2V20.6L17 23.8L11.5 20.6V14.2L17 11Z"
              fill="#213544"
            />
          </svg>
          <span className="font-display font-bold text-lg text-steel-900">
            SAIFY TOOLS CENTRE
          </span>
        </div>
        <p className="text-steel-500 max-w-md mb-12">
          Authorised distributor of Unbrako fasteners and industrial tools in
          Chennai.
        </p>
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <h4 className="font-display font-semibold text-steel-900 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-steel-600">
              <li>
                <a href="#" className="hover:text-bolt-600 transition-colors">
                  Fasteners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bolt-600 transition-colors">
                  Hand Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bolt-600 transition-colors">
                  Carbide Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-bolt-600 transition-colors">
                  Foundation Bolts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-steel-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-steel-600">
              <li>
                <a href="#home" className="hover:text-bolt-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-bolt-600 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-bolt-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-bolt-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-steel-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-steel-600">
              <li>Phone: +91 00000 00000</li>
              <li>Chennai, Tamil Nadu</li>
              <li>info@saifytools.com</li>
              <li>
                <a href="#" className="hover:text-bolt-600 transition-colors">
                  WhatsApp link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-steel-200 py-5">
        <p className="text-center text-sm text-steel-500">
          © 2026 Saify Tools Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
