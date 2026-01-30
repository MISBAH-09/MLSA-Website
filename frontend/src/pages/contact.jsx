import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-gray-700 mb-6">Have a question or want to collaborate? Send us a message.</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 block w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input className="mt-1 block w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full border rounded-md p-2" rows={6} />
          </div>
          <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md">Send Message</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
