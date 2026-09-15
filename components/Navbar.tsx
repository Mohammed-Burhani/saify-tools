'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[76px]">
          <Link href="/" className="flex items-baseline gap-2.5 focus-ring">
            <Image
              src="/logo.png"
              alt="Saify Tools Centre Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-9 text-[14.5px] text-ink/70">
            <Link 
              href="/" 
              className={pathname === '/' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Home
            </Link>
            <a href="#about" className="hover:text-ink transition-colors focus-ring">
              About
            </a>
            <a href="#catalog" className="hover:text-ink transition-colors focus-ring">
              Products
            </a>
            <Link 
              href="/brands" 
              className={pathname === '/brands' ? 'text-ink border-b border-rust pb-0.5 focus-ring' : 'hover:text-ink transition-colors focus-ring'}
            >
              Brands
            </Link>
            <a href="#contact" className="hover:text-ink transition-colors focus-ring">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+910000000000"
              className="hidden lg:block mono text-[13px] text-ink/60 hover:text-ink transition-colors focus-ring"
            >
              +91 00000 00000
            </a>
            <a
              href="#quote"
              className="inline-flex items-center px-5 h-10 bg-ink hover:bg-rust text-paper text-[13.5px] font-medium tracking-wide transition-colors focus-ring"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
