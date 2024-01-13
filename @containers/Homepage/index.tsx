"use client";

// Core types
import type { FC } from "react";

// Local components
import { Hero } from "./Hero";
import { AboutUs } from "./AboutUs";
import { OurFields } from "./OurFields";
import { BookCall } from "./BookCall";
import { OurServices } from "./OurServices";
import { Testimonials } from "./Testimonials";
import { ContactUs } from "./ContactUs";

const index: FC = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurFields />
      <BookCall />
      <OurServices />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export { index as Homepage };
