import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import PotensiSection from '@/components/PotensiSection';
import PengaduanSection from '@/components/PengaduanSection';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <HeroSection />
      
      <ScrollAnimation>
        <ProfileSection />
      </ScrollAnimation>
      
      <ScrollAnimation>
        <PotensiSection />
      </ScrollAnimation>  

      <ScrollAnimation>
        <PengaduanSection />
      </ScrollAnimation>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}