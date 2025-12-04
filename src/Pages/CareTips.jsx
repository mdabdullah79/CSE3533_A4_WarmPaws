import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CareTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto py-16">
      <h1
        className="text-4xl font-bold mb-12 text-center"
        data-aos="fade-up"
      >
        Winter Care Tips for Pets
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Collapses */}
        <div className="flex-1" data-aos="fade-right">
          <div className="collapse collapse-arrow bg-base-100 border mb-3 border-base-300" data-aos="fade-up" data-aos-delay="100">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              Why is it important to keep pets warm during winter?
            </div>
            <div className="collapse-content text-sm">
              Just like humans, pets can suffer from hypothermia and frostbite
              in cold weather. Providing warm bedding, sweaters, or heated pads
              helps maintain their body temperature and keeps them healthy and
              comfortable.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border mb-3 border-base-300" data-aos="fade-up" data-aos-delay="200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How often should I bathe my pet in winter?
            </div>
            <div className="collapse-content text-sm">
              Limit baths to once every 3–4 weeks during winter. Frequent
              bathing can remove natural oils from their coat, making their skin
              dry and itchy. Always use warm water and dry them completely
              afterward.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border mb-3 border-base-300" data-aos="fade-up" data-aos-delay="300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Can I take my pet for walks when it’s freezing outside?
            </div>
            <div className="collapse-content text-sm">
              Yes, but keep walks short (10–15 minutes) and avoid icy or salted
              roads. Dress them in protective gear like a coat or paw boots to
              prevent frostbite or chemical burns.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border mb-3 border-base-300" data-aos="fade-up" data-aos-delay="400">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What kind of food should pets eat in cold weather?
            </div>
            <div className="collapse-content text-sm">
              In winter, pets may need extra calories to maintain body heat.
              Offer nutrient-rich food with proteins and healthy fats, and
              always keep fresh water available — even indoors.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 border border-base-300" data-aos="fade-up" data-aos-delay="500">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How can I tell if my pet is too cold?
            </div>
            <div className="collapse-content text-sm">
              Signs include shivering, whining, curling up tightly, or seeking
              warm spots. If your pet shows these symptoms, bring them indoors
              immediately and wrap them in a warm blanket.
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1" data-aos="fade-left">
          <img
            className="w-full rounded-lg shadow-md"
            src="/assets/winter-pet-care.jpg"
            alt="Winter Pet Care"
          />
        </div>
      </div>
    </div>
  );
};

export default CareTips;
