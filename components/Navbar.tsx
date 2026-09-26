'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ProductsMegaMenu from './ProductsMegaMenu';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-line bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[76px]">
          <Link href="/" className="flex items-baseline gap-2.5 focus-ring" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Saify Tools Centre Logo"
              width={200}
              height={56}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-9 text-[14.5px] text-ink/70">
            <Link 
              href="/" 
              className={pathname === '/' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={pathname === '/about' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              About
            </Link>
            <ProductsMegaMenu />
            <Link
              href="/manufacturing"
              className={pathname === '/manufacturing' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Manufacturing
            </Link>
            <Link
              href="/brands"
              className={pathname === '/brands' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Brands
            </Link>
            <Link
              href="/contact"
              className={pathname === '/contact' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+917358441763"
              className="hidden lg:block mono text-[13px] text-ink/60 hover:text-ink transition-colors focus-ring"
            >
              +91 73584 41763
            </a>
            <a
              href="#quote"
              className="hidden sm:inline-flex items-center px-5 h-10 bg-ink hover:bg-rust text-paper text-[13.5px] font-medium tracking-wide transition-colors focus-ring"
            >
              Request Quote
            </a>

            {/* Hamburger menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus-ring"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-ink mt-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-ink mt-1.5 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-1 border-t border-line">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/about' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              About
            </Link>
            <Link
              href="/products"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/products' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              Products
            </Link>
            <Link
              href="/manufacturing"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/manufacturing' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              Manufacturing
            </Link>
            <Link
              href="/brands"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/brands' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              Brands
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block px-4 py-3 text-[15px] transition-colors focus-ring ${pathname === '/contact' ? 'text-ink bg-rust/10 border-l-2 border-rust' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}
            >
              Contact
            </Link>
            
            {/* Mobile actions */}
            <div className="px-4 pt-4 pb-2 space-y-3 border-t border-line mt-2">
              <a
                href="tel:+917358441763"
                className="block mono text-[13px] text-ink/60 hover:text-ink transition-colors focus-ring"
              >
                📞 +91 73584 41763
              </a>
              <a
                href="#quote"
                onClick={closeMobileMenu}
                className="block text-center px-5 py-3 bg-ink hover:bg-rust text-paper text-[14px] font-medium tracking-wide transition-colors focus-ring"
              >
                Request Quote
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
