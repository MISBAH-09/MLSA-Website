import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

import interactive1 from "../images/gallery/InteractiveSession.jpeg";
import interactive2 from "../images/gallery/InteractiveSessions.jpeg";
import sessionImg from "../images/gallery/Session.jpeg";
import basketball from "../images/gallery/BasketballSession.jpeg";
import orient1 from "../images/gallery/1stOrientation.jpeg";
import orient2 from "../images/gallery/2ndOrientation.jpeg";
import orientFall from "../images/gallery/OrientationFall25.jpeg";
import dinner from "../images/gallery/AnnualDinner.jpeg";
import dinnerPromo from "../images/gallery/AnnualDinnerPromotion.jpeg";

const galleries = {
  events: [
    { id: 1, src: orient1, caption: "1st Orientation" },
    { id: 2, src: orient2, caption: "2nd Orientation" },
    { id: 3, src: orientFall, caption: "Orientation Fall 25" },
    { id: 4, src: dinner, caption: "Annual Dinner" },
    { id: 5, src: dinnerPromo, caption: "Annual Dinner Promotion" },
    { id: 6, src: sessionImg, caption: "Session" },
  ],
  team: [
    { id: 7, src: interactive1, caption: "Interactive Session" },
    { id: 8, src: interactive2, caption: "Interactive Sessions" },
    { id: 9, src: basketball, caption: "Basketball Session" },
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
      {/* Hero Section */}
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
            className={`px-8 py-2 rounded-full text-sm font-medium transition
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
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-sm"
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