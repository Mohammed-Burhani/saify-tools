import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import QuoteForm from '@/components/QuoteForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
  title: 'Contact Us | Saify Tools Centre',
  description:
    'Get in touch with Saify Tools Centre for pricing, availability or a custom manufacturing requirement. Chennai, Tamil Nadu — we respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <QuoteForm />
      <ContactMap />
      <Footer />
    </>
  );
}
