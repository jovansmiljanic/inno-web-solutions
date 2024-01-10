"use client";

// Core types
import type { FC } from "react";

// Local components
import { Hero } from "./Hero";
import { AboutUs } from "./AboutUs";
import { OurFields } from "./OurFields";
import { OurServices } from "./OurServices";
import { Testimonials } from "./Testimonials";

const index: FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurFields />
      <OurServices />
      <Testimonials />
    </>
  );
};

export { index as Homepage };
