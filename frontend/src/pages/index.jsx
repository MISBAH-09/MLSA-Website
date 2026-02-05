import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import WhyJoinSection from "../components/WhyJoinSection";
import Footer from "../components/footer";
import logo from '../images/image.png';
const Index = () => {
  // mlsaLogo = './vite.svg'
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection/>
      <StatsSection/>
      <TeamSection/>
      <WhyJoinSection/>
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
