import { motion } from "framer-motion";
import { Vote, ExternalLink, Trophy, ClipboardList, BarChart3, Users, Megaphone } from "lucide-react";
import Footer from "../components/footer";

const statusStyles = {
  Live: "bg-green-100 text-green-700 border-green-300",
  Upcoming: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Closed: "bg-gray-200 text-gray-600 border-gray-300",
};

const activities = [
  {
    id: 1,
    title: "President and VicePresident Voting 2026",
    description:
      "Participate in the official society voting platform and cast your vote securely.",
    status: "Live",
    icon: Vote,
    buttonText: "Open Voting Platform",
    link: "https://voting-platform-ten.vercel.app/",
  },
  // Add more activities here in the future:
  // {
  //   id: 2,
  //   title: "Tech Competition",
  //   description: "...",
  //   status: "Upcoming",
  //   icon: Trophy,
  //   buttonText: "Open Activity",
  //   link: "https://...",
  // },
];

export default function Activities() {
  return (
    <>
      <div className="min-h-screen pt-24 px-5 bg-gray-50 pb-12">
        <main className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Society Activities
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your central hub for voting, competitions, registrations, polls,
              surveys, and community activities. Get involved and make your
              voice heard.
            </p>
          </motion.div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const isLive = activity.status === "Live";
              const isClosed = activity.status === "Closed";
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border-2 border-blue-900 rounded-xl p-6 flex flex-col hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusStyles[activity.status]}`}
                    >
                      {activity.status}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-blue-900 mb-2">
                    {activity.title}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1">
                    {activity.description}
                  </p>

                  <a
                    href={isClosed ? undefined : activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={isClosed}
                    className={`mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition ${
                      isClosed
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow hover:shadow-md"
                    }`}
                  >
                    {activity.buttonText}
                    {!isClosed && <ExternalLink size={16} />}
                  </a>
                </motion.div>
              );
            })}
          </div>

          {activities.length === 0 && (
            <p className="text-center text-lg text-blue-900 m-12">
              No activities right now. Check back soon.
            </p>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
