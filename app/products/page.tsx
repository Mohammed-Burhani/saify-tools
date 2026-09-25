import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductsHero from '@/components/products/ProductsHero';
import ProductGrid from '@/components/products/ProductGrid';

export const metadata = {
  title: 'Products | Saify Tools Centre',
  description:
    'Browse the full Saify Tools Centre catalog — fasteners, hand tools, power tools, cutting tools, measuring instruments, hydraulic & pneumatic equipment and safety gear, by category.',
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <Suspense fallback={null}>
        <ProductGrid />
      </Suspense>
      <Footer />
    </>
  );
}
