import React, { useEffect } from "react";
import Navbar from "../Components/layout/Navbar";
import { useLoaderData } from "react-router";
import Footer from "../Components/layout/Footer";
import Services from "./HomeServices";
import CareTips from "./CareTips";
import ExpertVets from "./ExpertVets";
import Banner from "../Components/Banner";
import toast, { Toaster } from "react-hot-toast";
import CatGallery from "../Components/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animate only once
    });
  }, []);

  const notify = () => toast.success("Here is your toast.");

  return (
    <div>

      <div data-aos="fade-up">
        <Banner />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <Services data={data} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <CareTips />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <ExpertVets />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <CatGallery />
      </div>

      <Toaster />
    </div>
  );
};

export default Home;
