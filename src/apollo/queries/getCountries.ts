import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  {
    countries {
      id
      name
      continent {
        name
      }
    }
  }
`;

export interface Icountry {
  id: string;
  name: string;
  continent: {
    name: string;
  };
}

export interface IcountriesData {
  countries: Icountry[];
}
