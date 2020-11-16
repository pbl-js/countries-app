import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      tertiary: string;
      content: string;
      red: string;
    };
    borderRadius: {
      main: string;
      secondary: string;
      tertiary: string;
    };
  }
}
