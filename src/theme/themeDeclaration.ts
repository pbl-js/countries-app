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
    mainPadding: string;
    maxWidth: string;
  }
}
