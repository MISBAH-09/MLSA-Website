import { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import Footer from "../components/footer";

const events = [
  // {
  //   id: 1,
  //   title: "Azure Cloud Workshop",
  //   description: "Hands-on workshop on Microsoft Azure fundamentals.",
  //   date: "Feb 15, 2024",
  //   time: "10:00 AM - 2:00 PM",
  //   venue: "CS Lab 3, COMSATS",
  //   status: "upcoming",
  // },
  // {
  //   id: 2,
  //   title: "Hackathon 2024",
  //   description: "48-hour hackathon to build innovative tech solutions.",
  //   date: "Mar 1–2, 2024",
  //   time: "9:00 AM onwards",
  //   venue: "Main Auditorium",
  //   status: "upcoming",
  // },
   {
    id: 3,
    title: "Annual Dinner (CS Dept.)",
    description: "Interact and Connect",
    date: "Dec 12, 2024",
    time: "05:30 PM - 08:30 PM",
    venue: "FootBall Ground",
    status: "past",
  },
  {
    id: 4,
    title: "Alumni Dinner",
    description: "Interaction with Alumni",
    date: "Nov 21, 2025",
    time: "05:30 PM - 08:30 PM",
    venue: "FootBall Ground",
    status: "past",
  },
];

export default function Events() {
  const [filter, setFilter] = useState("upcoming");

  const filteredEvents = events.filter(
    (event) => event.status === filter
  );

  return (
    <>
    <div className="min-h-screen pt-24 px-5 bg-gray-50">
      <main className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Events
          </h1>
          <p className="text-gray-600">
            Workshops, hackathons, and learning sessions by MLSA COMSATS.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["upcoming", "past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === tab
                    ? "bg-blue-900 text-white border-2 border-blue-900"
                    : "bg-white border text-blue-900 hover:bg-gray-100 border-2 border-blue-900"
                }`}
            >
              {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                {event.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {event.description}
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{event.venue}</span>
                </div>
              </div>

              {filter === "upcoming" && (
                <button className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  Register
                </button>
              )}
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
            <p className="text-center text-lg text-blue-900 m-12 ">
              Coming Soon.
            </p>
        )}
      </main>
    </div>
    <Footer/>
    </>
  );
}
