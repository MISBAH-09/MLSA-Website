import Footer from "../components/footer";

const Gallery = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <p className="text-gray-700 mb-4">Photos from past workshops, meetups, and hackathons.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-40 bg-gray-200 rounded-lg" />
          <div className="h-40 bg-gray-200 rounded-lg" />
          <div className="h-40 bg-gray-200 rounded-lg" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
