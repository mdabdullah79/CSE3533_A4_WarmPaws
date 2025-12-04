import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import ServicesDeatilsCard from "./ServicesDeatilsCard";

const ServiceDetailsPage = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [service, setService] = useState({});

//   console.log(id, data, service);
  useEffect(() => {
    const serviceDetails = data.find((s) => s.serviceId == id);
    setService(serviceDetails);
  }, [data, id]);

  return (
    <>
      <Navbar></Navbar>

      <ServicesDeatilsCard key={id} service={service}></ServicesDeatilsCard>

      <Footer></Footer>
    </>
  );
};

export default ServiceDetailsPage;
