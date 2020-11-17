import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { MainWrapper, Search, ListWrapper } from "./Home.style";
import ListItem from "components/ListItem/ListItem";

const GET_COUNTRIES = gql`
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

interface Icountry {
  code: string;
  name: string;
  continent: {
    name: string;
  };
}

interface IcountriesData {
  countries: Icountry[];
}

const Home: React.FC<RouteComponentProps> = () => {
  const { loading, data } = useQuery<IcountriesData>(GET_COUNTRIES);

  return (
    <MainWrapper>
      <Search />
      <ListWrapper>
        {data &&
          data.countries.map((country) => {
            const countryData = {
              code: country.code,
              name: country.name,
              continent: country.continent.name,
            };

            return (
              <ListItem
                key={country.code}
                even={true}
                countryData={countryData}
              />
            );
          })}
      </ListWrapper>
    </MainWrapper>
  );
};

export default Home;
