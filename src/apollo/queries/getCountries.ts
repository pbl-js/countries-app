import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;

export interface Icountry {
  code: string;
  name: string;
  continent: {
    name: string;
  };
}

export interface IcountriesData {
  countries: Icountry[];
}
