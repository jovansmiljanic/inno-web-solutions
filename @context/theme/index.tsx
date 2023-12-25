import type { ThemeType } from "@types";

// Common settings for all themes
const commonSettings = {
  defaults: {
    gutter: 1,
    radius: 6,
    transition: { speed: 150 },
  },
  font: {
    size: 16,
    baseSize: 20,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    xs: 576,
    sm: 992,
    md: 992,
    lg: 1192,
    xl: 1340,
  },
  spaces: {
    0: 0,
    1: 10,
    2: 15,
    3: 20,
    4: 25,
    5: 30,
    6: 40,
    7: 50,
    8: 60,
    9: 70,
    10: 80,
  },
};

// Default (light) theme
const defaultTheme: ThemeType = {
  name: "default",
  ...commonSettings,
  colors: {
    white: "#FFFFFF",
    black: "#000000",

    primary: "#a37cfc",
    secondary: "#7A7DFF",
    success: "#37C864",
    danger: "#E04A5A",
    warning: "#FFA726",

    background: "#f8f5ff",

    textColorPrimary: "#1e1e1e",
    textColorSecondary: "#8E989F",

    gray: "#64748B",
    lightGray: "#BDBDBD",
    darkGray: "#404040",
  },
};

// Dark theme
const darkTheme: ThemeType = {
  name: "dark",
  ...commonSettings,
  colors: {
    white: "#FFFFFF",
    black: "#000000",

    primary: "#a37cfc",
    secondary: "#7A7DFF",
    success: "#37C864",
    danger: "#E04A5A",
    warning: "#FFA726",

    background: "#f8f5ff",

    textColorPrimary: "#1e1e1e",
    textColorSecondary: "#8E989F",

    gray: "#64748B",
    lightGray: "#BDBDBD",
    darkGray: "#404040",
  },
};

export const AppThemes = {
  light: defaultTheme,
  dark: darkTheme,
};
