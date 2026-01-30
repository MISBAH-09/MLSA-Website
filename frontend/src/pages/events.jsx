import Footer from "../components/footer";

const Events = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <p className="text-gray-700 mb-4">We run regular workshops, hackathons, and speaker sessions. Stay tuned for upcoming events.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold">Intro to ML Workshop</h2>
            <p className="text-gray-600">Date: Coming soon</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold">Hackathon</h2>
            <p className="text-gray-600">Date: Coming soon</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
