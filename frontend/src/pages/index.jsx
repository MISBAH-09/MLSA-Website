// import Navbar from '@/components/Navbar';
// import HeroSection from '@/components/HeroSection';
// import StatsSection from '@/components/StatsSection';
// import AboutSection from '@/components/AboutSection';
// import TeamSection from '@/components/TeamSection';
// import GallerySection from '@/components/GallerySection';
// import ContributorsSection from '@/components/ContributorsSection';
// import JoinSection from '@/components/JoinSection';
import Navbar from "../components/Navbar"
import Footer from "../components/footer";
// import mlsaLogo from '@/assets/mlsa-logo.png';

const Index = () => {
  // mlsaLogo = './vite.svg'
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      {/* <Navbar logoUrl={mlsaLogo} />
      <HeroSection logoUrl={mlsaLogo} /> */}
      {/* <StatsSection />
      <AboutSection />
      <TeamSection />
      <GallerySection />
      <ContributorsSection />
      <JoinSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
