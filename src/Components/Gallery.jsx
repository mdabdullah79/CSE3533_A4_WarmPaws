import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const catGallery = [
  { name: "Mittens", image: "/assets/micki.jpeg" },
  { name: "Luna", image: "/assets/miki2.jpeg" },
  { name: "Shadow", image: "/assets/miki4.jpeg" },
  { name: "Whiskers", image: "/assets/miki2.jpeg" },
  { name: "Cleo", image: "/assets/miki3.jpeg" },
  { name: "Tiger", image: "/assets/miki4.jpeg" },
];

const CatGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
        Cat Gallery
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {catGallery.map((cat, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={index * 150} // stagger animation
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatGallery;
