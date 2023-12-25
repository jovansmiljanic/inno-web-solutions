"use client";

// Core types
import type { FC } from "react";

// Core
import { createContext, useEffect, useState, useCallback } from "react";

// Create Context base
export const StoreContext = createContext({} as AppContext);

// Vendors
import { ThemeProvider } from "styled-components";

// App context properties
import { AppThemes } from "@context/theme";

// Instruct component Props Types
interface Props {
  children: React.ReactNode;
}

// Instruct component State Types
interface AppContext {
  isPhone?: boolean;
  isTablet?: boolean;

  theme: "light" | "dark";
}

type Theme = "light" | "dark";

export const Store: FC<Props> = props => {
  const [isPhone, setIsPhone] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const detectLayout = useCallback(() => {
    setIsPhone(window.matchMedia("(max-width: 768px)").matches);
    setIsTablet(window.matchMedia("(max-width: 992px)").matches);
  }, []);

  useEffect(() => {
    detectLayout();

    window.addEventListener("resize", detectLayout);

    return () => window.removeEventListener("resize", detectLayout);
  }, [detectLayout]);

  return (
    <StoreContext.Provider
      value={
        {
          isPhone,
          isTablet,
          theme,
        } as AppContext
      }
    >
      <ThemeProvider theme={AppThemes[theme]}>{props.children}</ThemeProvider>
    </StoreContext.Provider>
  );
};
