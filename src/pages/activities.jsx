import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Vote, ExternalLink, Trophy, ClipboardList, BarChart3, Users, Megaphone } from "lucide-react";
import Footer from "../components/footer";

const statusStyles = {
  Live: "bg-green-100 text-green-700 border-green-300",
  Upcoming: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Closed: "bg-gray-200 text-gray-600 border-gray-300",
};

// Deadlines are absolute timestamps. Use ISO 8601 with a timezone offset so it
// doesn't depend on the visitor's local clock. PKT is UTC+5, so 24 May 2026 1:00 PM PKT = 08:00 UTC.
const activities = [
  {
    id: 1,
    title: "President and VicePresident Voting 2026",
    description:
      "Participate in the official society voting platform and cast your vote securely.",
    initialStatus: "Live",
    deadline: "2026-05-24T13:00:00+05:00", // 24 May 2026, 1:00 PM PKT
    icon: Vote,
    buttonText: "Open Voting Platform",
    closedButtonText: "Voting Closed",
    link: "https://voting-platform-ten.vercel.app/",
  },
];

function computeStatus(activity, now) {
  if (activity.initialStatus === "Closed") return "Closed";
  if (activity.deadline && now >= new Date(activity.deadline).getTime()) {
    return "Closed";
  }
  return activity.initialStatus;
}

function formatDeadline(iso) {
  try {
    return new Date(iso).toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Karachi",
    });
  } catch {
    return iso;
  }
}

export default function Activities() {
  // Re-render every 30s so the card flips to Closed as soon as the deadline hits,
  // even if the user keeps the tab open.
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

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
              const status = computeStatus(activity, now);
              const isClosed = status === "Closed";
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`bg-white border-2 rounded-xl p-6 flex flex-col transition-all duration-300 ${
                    isClosed
                      ? "border-gray-300 opacity-80"
                      : "border-blue-900 hover:shadow-xl hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isClosed ? "bg-gray-100 text-gray-500" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusStyles[status]}`}
                    >
                      {isClosed ? "Past Event" : status}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-blue-900 mb-2">
                    {activity.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">
                    {activity.description}
                  </p>

                  {activity.deadline && (
                    <p className="text-xs text-gray-500 mb-4">
                      {isClosed ? "Closed on " : "Deadline: "}
                      <span className="font-medium">{formatDeadline(activity.deadline)}</span>
                    </p>
                  )}

                  <a
                    href={isClosed ? undefined : activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-disabled={isClosed}
                    onClick={(e) => { if (isClosed) e.preventDefault(); }}
                    className={`mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition ${
                      isClosed
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none"
                        : "bg-blue-600 text-white hover:bg-blue-700 shadow hover:shadow-md"
                    }`}
                  >
                    {isClosed ? (activity.closedButtonText || "Closed") : activity.buttonText}
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
