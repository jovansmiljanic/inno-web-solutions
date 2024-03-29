export interface ThemeType {
  name: string;
  defaults: {
    gutter: number;
    radius: number;
    transition: {
      speed: number;
    };
  };
  colors: {
    white: string;
    black: string;

    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;

    background: string;

    textColorPrimary: string;
    textColorSecondary: string;

    gray: string;
    lightGray: string;
    darkGray: string;
  };
  font: {
    size: number;
    baseSize: number;
    weight: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  };
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  spaces: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
  };
}

export interface ThemeContext {
  light: Theme;
  dark: Theme;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our Theme.
}
