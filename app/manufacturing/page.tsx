import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ManufacturingHero from '@/components/manufacturing/ManufacturingHero';
import ManufacturingRange from '@/components/manufacturing/ManufacturingRange';
import StandardsGrades from '@/components/manufacturing/StandardsGrades';
import CustomProcess from '@/components/manufacturing/CustomProcess';
import QualityPrecision from '@/components/manufacturing/QualityPrecision';
import ManufacturingCTA from '@/components/manufacturing/ManufacturingCTA';

export const metadata = {
  title: 'Manufacturing | Saify Tools Centre',
  description:
    'Precision fasteners and custom manufacturing from Saify Tools Centre — foundation bolts, high-strength bolts and threaded rods manufactured to standard and customized specifications.',
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <ManufacturingHero />
      <ManufacturingRange />
      <StandardsGrades />
      <CustomProcess />
      <QualityPrecision />
      <ManufacturingCTA />
      <Footer />
    </>
  );
}
