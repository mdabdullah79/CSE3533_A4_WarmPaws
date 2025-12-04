import React from "react";
import { Link } from "react-router";

const Service = ({ s }) => {
  return (
    <div className="px-8 py-10 shadow-sm hover:shadow-lg  rounded-2xl border-blue-200 border-2">
      <div className="flex items-center gap-4 mb-5">
        <img className="w-[60px]" src={s.image} alt="" />
        <h2 className="text-[20px] font-bold">{s.serviceName}</h2>
      </div>

      <div className="mb-5">
        <p>{s.description}</p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <p className="text-[18px] font">From $ {s.price}</p>

        

        <Link to={`/service-details/${s.serviceId}`}>
          <button class="btn btn-soft btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
