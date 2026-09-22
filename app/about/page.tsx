import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import Legacy from '@/components/about/Legacy';
import Expertise from '@/components/about/Expertise';
import VisionMission from '@/components/about/VisionMission';
import Values from '@/components/about/Values';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us | Saify Tools Centre',
  description:
    'Since 1992, Saify Tools Centre has supplied industrial tools, fasteners and equipment — an authorised distributor of Unbrako fasteners serving manufacturing, construction, automotive and engineering businesses.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Legacy />
      <Expertise />
      <VisionMission />
      <Values />
      <AboutCTA />
      <Footer />
    </>
  );
}
