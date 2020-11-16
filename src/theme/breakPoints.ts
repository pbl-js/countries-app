interface IbreakPoints {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}

const breakPoints: IbreakPoints = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-width: 375px)`,
  mobileL: `(min-width: 540px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1400px)`,
  desktop: `(min-width: 2560px)`,
};

export default breakPoints;
