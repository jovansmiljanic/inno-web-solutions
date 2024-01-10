"use client";

// Core types
import type { FC } from "react";

// Local components
import { Footer } from "./Footer";

export { Header } from "./Header";

interface Layout {
  children: React.ReactNode;
}

export const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      {children}

      <Footer />
    </>
  );
};
