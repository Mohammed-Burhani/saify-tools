import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Saify Tools Centre Logo"
                width={220}
                height={62}
                className="h-[60px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-paper/45 text-[14.5px] leading-relaxed max-w-xs">
              Authorised distributor of Unbrako fasteners and industrial tools in Chennai.
            </p>
          </div>
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="mono text-[11px] text-paper/40 tracking-wide mb-5">PRODUCTS</h4>
            <ul className="space-y-3 text-paper/65 text-[14.5px]">
              <li>
                <Link href="/products" className="hover:text-rust transition-colors focus-ring">
                  Fasteners
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rust transition-colors focus-ring">
                  Hand Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rust transition-colors focus-ring">
                  Carbide Tools
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-rust transition-colors focus-ring">
                  Foundation Bolts
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="mono text-[11px] text-paper/40 tracking-wide mb-5">QUICK LINKS</h4>
            <ul className="space-y-3 text-paper/65 text-[14.5px]">
              <li>
                <Link href="/" className="hover:text-rust transition-colors focus-ring">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rust transition-colors focus-ring">
                  About
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-rust transition-colors focus-ring">
                  Brands
                </Link>
              </li>
              <li>
                <a href="#quote" className="hover:text-rust transition-colors focus-ring">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mono text-[11px] text-paper/40 tracking-wide mb-5">CONTACT</h4>
            <ul className="space-y-3 text-paper/65 text-[14.5px]">
              <li className="mono text-[13.5px] space-y-1">
                <a href="tel:+917358441763" className="block hover:text-rust transition-colors focus-ring">
                  +91 73584 41763
                </a>
                <a href="tel:+919677209852" className="block hover:text-rust transition-colors focus-ring">
                  +91 96772 09852
                </a>
                <a href="tel:+914445098406" className="block hover:text-rust transition-colors focus-ring">
                  044 4509 8406
                </a>
              </li>
              <li>
                <a href="mailto:saifytools@gmail.com" className="hover:text-rust transition-colors focus-ring">
                  saifytools@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Old No.39, New No.18,
                <br />
                Sembudoss Street,
                <br />
                Chennai – 600 001, Tamil Nadu
              </li>
              <li>
                <a
                  href="https://wa.me/917358441763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors focus-ring"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-paper/35 text-[13px]">© 2026 Saify Tools Centre. All rights reserved.</p>
          <p className="mono text-paper/25 text-[12px]">CHENNAI · TAMIL NADU · INDIA</p>
        </div>
      </div>
    </footer>
  );
}
