import Footer from "../components/footer";

const Resources = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-gray-700 mb-4">Curated tutorials, articles, and datasets to help you learn ML and AI.</p>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><a className="text-blue-600 underline" href="#">Beginner's Guide to Machine Learning</a></li>
          <li><a className="text-blue-600 underline" href="#">Deep Learning Cheatsheet</a></li>
          <li><a className="text-blue-600 underline" href="#">Datasets & Tools</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
