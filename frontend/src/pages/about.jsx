import Footer from "../components/footer";
import WhyJoinSection from "../components/WhyJoinSection";

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">About MLSA</h1>
        <p className="text-gray-700 leading-relaxed">
          MLSA (Machine Learning Student Association) is a student community focused on learning, building, and
          collaborating on machine learning and AI projects. We run workshops, study groups, and events to help
          students grow technical and soft skills.
        </p>
        <WhyJoinSection/>
      </main>
      <Footer />
    </div>
  );
};

export default About;
