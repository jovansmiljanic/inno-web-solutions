"use client";

// Core
import { useContext } from "react";

// Store context
import { StoreContext } from "@context";

// Theme context
import { AppThemes } from "@context/theme";

// Global types
import { ThemeType } from "@types";

// Vendors
import StyledComponentsRegistry from "registry";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  const { theme } = useContext(StoreContext);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={AppThemes.light as ThemeType}>
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
