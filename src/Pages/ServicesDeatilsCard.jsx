import React from "react";
import { Star } from "lucide-react";

const ServicesDeatilsCard = ({service}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden md:flex border border-gray-200">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 p-8 space-y-5 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {service.serviceName}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Category: <span className="font-medium">{service.category}</span>
            </p>

            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center justify-between mt-5">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-gray-700 font-medium">
                  {service.rating} / 5
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Slots Available:{" "}
                <span className="font-semibold">{service.slotsAvailable}</span>
              </p>
            </div>

            <div className="mt-5 border-t border-gray-200 pt-4">
              <p className="text-gray-700 font-semibold">
                Provider: {service.providerName}
              </p>
              <p className="text-sm text-gray-500">{service.providerEmail}</p>
            </div>

            <div className="mt-3 text-xl font-bold text-blue-600">
              Price: ${service.price}
            </div>
          </div>

          {/* Booking Form */}
          <form className="mt-6 bg-gray-100 p-4 rounded-xl shadow-inner space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Book This Service
            </h2>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesDeatilsCard;
