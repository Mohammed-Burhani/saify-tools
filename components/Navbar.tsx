'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-steel-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg
              width="34"
              height="34"
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
            <div className="leading-tight">
              <p className="font-display font-bold text-lg tracking-tight text-steel-900">
                SAIFY TOOLS
              </p>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-bolt-600">
                CENTRE
              </p>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-10 font-medium text-[15px] text-steel-700">
            <a href="/#home" className="hover:text-bolt-600 transition-colors">
              Home
            </a>
            <a href="/#about" className="hover:text-bolt-600 transition-colors">
              About
            </a>
            <a href="/#products" className="hover:text-bolt-600 transition-colors">
              Products
            </a>
            <Link 
              href="/brands" 
              className={pathname === '/brands' ? 'text-bolt-600' : 'hover:text-bolt-600 transition-colors'}
            >
              Brands
            </Link>
            <a href="/#contact" className="hover:text-bolt-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="WhatsApp"
              className="hidden sm:flex w-10 h-10 rounded-full border border-steel-200 items-center justify-center text-steel-600 hover:border-bolt-500 hover:text-bolt-600 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39c1.44.78 3.06 1.2 4.71 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.845 9.845 0 0 0 12.04 2m0 1.8c2.19 0 4.25.86 5.8 2.4a8.15 8.15 0 0 1 2.4 5.79c0 4.52-3.68 8.19-8.2 8.19a8.2 8.2 0 0 1-4.16-1.14l-.3-.17-3.09.81.83-3.01-.19-.31a8.15 8.15 0 0 1-1.26-4.38c0-4.52 3.68-8.19 8.17-8.19M8.53 6.7c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.03 2.59c.13.17 1.75 2.8 4.32 3.82 2.14.85 2.57.68 3.03.64s1.5-.61 1.71-1.2.21-1.09.15-1.2-.25-.17-.5-.3-1.5-.74-1.73-.82-.4-.13-.57.13-.65.82-.8.99-.29.19-.55.06a6.9 6.9 0 0 1-2.03-1.25 7.6 7.6 0 0 1-1.4-1.74c-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44s.17-.25.25-.42.04-.31-.02-.44-.57-1.38-.79-1.88c-.2-.5-.42-.42-.57-.43z" />
              </svg>
            </a>
            <a
              href="/#quote"
              className="hidden sm:inline-flex items-center px-5 h-10 rounded-md bg-bolt-600 hover:bg-bolt-700 text-white text-sm font-semibold transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
