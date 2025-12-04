import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
    });
  }, []);

  return (
    <div className="mb-5">
      {/* Hero Section */}
      <div
        className="flex items-center justify-between mb-10 bg-blue-50 gap-10"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-start p-8">
          <h1 className="text-5xl font-bold mb-8 text-center" data-aos="zoom-in">
            Our Services
          </h1>
          <h2 className="text-2xl mb-4" data-aos="fade-right">
            An animated element
          </h2>
          <p className="text-justify" data-aos="fade-left">
            Discover trusted winter care services to keep your furry friends
            warm, healthy, and happy. From cozy clothing and grooming to
            nutrition and health checkups — everything your pet needs this
            season is right here.
          </p>
        </div>
        <img
          className="w-[600px] rounded-l-2xl"
          src="/assets/cute-cat-spending-time-indoors_23-2150649172.avif"
          alt="Cute Cat"
          data-aos="fade-left"
        />
      </div>

      {/* Services Grid */}
      <div data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-8 text-center">
          All Pet Care Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mb-10">
          {data.map((s) => (
            <div key={s.id} data-aos="flip-up">
              <Service s={s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
