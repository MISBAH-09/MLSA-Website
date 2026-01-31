import TeamSection from "../components/TeamSection";
import Footer from "../components/footer";

const Team = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16">
        {/* <h1 className="text-4xl font-bold mb-6">Our Team</h1>
        <p className="text-gray-700 mb-8">Meet the students who run MLSA and organize events.</p> */}
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
