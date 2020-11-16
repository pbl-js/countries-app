import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;

      blue: string;

      textPrimary: string;
      textSecondary: string;
    };
    borderRadius: {
      main: string;
      secondary: string;
      tertiary: string;
    };
    fontSize: {
      xxxs: string;
      xxs: string;
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeight: {
      light: string;
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    };
    mainPadding: string;
    maxWidth: string;
  }
}
