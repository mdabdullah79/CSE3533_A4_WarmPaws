import React from "react";
import Service from "./Service";

const Services = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">
        All Pet Care Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-11/12 mx-auto mb-10">
        {data.map((s) => (
          <div key={s.id} data-aos="flip-up">
            <Service s={s} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
