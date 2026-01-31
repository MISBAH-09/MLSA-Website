import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const galleries = {
  events: [
    { id: 1, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop", caption: "Hackathon 2023" },
    { id: 2, src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop", caption: "Azure Workshop" },
    { id: 3, src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop", caption: "Tech Talk Session" },
    { id: 4, src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&auto=format&fit=crop", caption: "Networking Event" },
    { id: 5, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop", caption: "Graduation Ceremony" },
    { id: 6, src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop", caption: "Workshop Session" },
  ],
  team: [
    { id: 7, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop", caption: "Team Meeting" },
    { id: 8, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop", caption: "Team Outing" },
    { id: 9, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop", caption: "Planning Session" },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("events");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = galleries[activeTab];

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const navigate = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-blue-900 text-xl font-medium mb-6">
              <ImageIcon size={18} />
              Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-900">
              Moments & Memories
            </h1>
            <p className="text-gray-600 text-lg">
              A glimpse into our events, activities, and community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {["events", "team"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-blue-900 hover:bg-gray-300"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="pb-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-5 right-5 p-3 bg-white/10 rounded-full"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="text-white" />
            </button>

            <button
              className="absolute left-5 p-3 bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigate("prev");
              }}
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              className="absolute right-5 p-3 bg-white/10 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                navigate("next");
              }}
            >
              <ChevronRight className="text-white" />
            </button>

            <motion.div
              key={currentImage.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="max-h-[70vh] mx-auto rounded-lg object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">
                {currentImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
