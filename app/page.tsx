import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import Brands from '@/components/Brands';
import FilterableBrands from '@/components/FilterableBrands';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomFastenersCTA from '@/components/CustomFastenersCTA';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCategories />
      <Brands />
      <FilterableBrands />
      <About />
      <WhyChooseUs />
      <CustomFastenersCTA />
      <QuoteForm />
      <Footer />
    </>
  );
}
