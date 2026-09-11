import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BrandsHero from '@/components/brands/BrandsHero';
import UnbrakoFeature from '@/components/brands/UnbrakoFeature';
import BrandGrid from '@/components/brands/BrandGrid';
import BrandsCTA from '@/components/brands/BrandsCTA';

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <BrandsHero />
      <UnbrakoFeature />
      <BrandGrid />
      <BrandsCTA />
      <Footer />
    </>
  );
}
