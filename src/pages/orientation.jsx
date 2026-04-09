import { motion } from "framer-motion";
import { Trophy, Brain, Zap, Gift, Clock, CheckCircle } from "lucide-react";
import Footer from "../components/footer";

const QUIZ_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfUQSAnt6CeLFiEaq5pCpz1L5eWcNt4C4JO_FRMTshysu1B_g/viewform";

const instructions = [
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Complete during orientation",
    body: "The quiz is only open during the orientation session. Have it ready on your device.",
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    title: "Answer honestly & quickly",
    body: "Questions are based on what you'll learn today. Read carefully before selecting.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: "Submit once",
    body: "You can only submit the form one time, so double-check your answers before hitting Submit.",
  },
  {
    icon: <Gift className="w-6 h-6 text-blue-600" />,
    title: "Win a prize!",
    body: "Top scorer(s) will be announced at the end of orientation and receive a special prize.",
  },
];

export default function Orientation() {
  const handleOpenQuiz = () => {
    window.open(QUIZ_FORM_URL, "_blank", "noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 pt-24">

        {/* ─── Hero ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
          >
            <Zap className="w-4 h-4" />
            MLSA × COMSATS Lahore Orientation 2026
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Orientation Quiz
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to MLSA! Put your new knowledge to the test with our
            interactive orientation quiz — and walk away with a prize. 🎁
          </p>
        </motion.div>

        {/* ─── Prize banner ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-900 rounded-2xl p-8 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-lg"
        >
          <div className="flex items-center gap-5">
            <div className="bg-white/10 p-4 rounded-xl">
              <Trophy className="w-10 h-10 text-yellow-300" />
            </div>
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest font-medium mb-1">
                Top prize
              </p>
              <h2 className="text-2xl font-bold">
                Score the highest — claim the reward!
              </h2>
              <p className="text-white/70 mt-1">
                Winners will be announced live at the end of the session.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── Instructions grid ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {instructions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-blue-900 rounded-xl p-6 hover:bg-blue-200 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg">{item.icon}</div>
                  <h3 className="font-semibold text-blue-900 text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <button
            onClick={handleOpenQuiz}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          >
            Open Orientation Quiz
          </button>
          <p className="mt-4 text-sm text-gray-500 italic">
            * Opens in a new tab. Make sure you're connected to the internet.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
