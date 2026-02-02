import { motion } from "framer-motion";
import Footer from "../components/footer";

// Your Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/N9L96X8waAEFEcrx7";

const Join = () => {
  const handleOpenForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Join MLSA
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Ready to become a Microsoft Learn Student Ambassador?
          </p>

          {/* Centered Button matching your screenshot */}
          <button
            onClick={handleOpenForm}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Open Application Form
          </button>

          {/* Note matching your screenshot */}
          <p className="mt-8 text-sm text-gray-500 italic">
            * You will be redirected to Google Forms in a new tab.
          </p>
        </motion.div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Join;