import React, { useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GET_COUNTRIES,
  IcountriesData,
  Icountry,
} from "apollo/queries/getCountries";
import routes from "router/routes";

import { MainWrapper, Search } from "./Home.style";
import CountriesList from "components/CountriesList/CountriesList";

interface routeParams {
  page: string;
}

const Home: React.FC<RouteComponentProps<routeParams>> = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery<IcountriesData>(GET_COUNTRIES);
  const [searchValue, setSearchValue] = useState("");

  const dataToDisplay =
    data &&
    data.countries.filter((el: Icountry) => {
      return el.name.toUpperCase().includes(searchValue.toUpperCase());
    });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    history.push(`${routes.countries}/1`);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`Error! ${error.message}`}</div>;

  return (
    <MainWrapper>
      <Search
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
      {dataToDisplay && <CountriesList countriesData={dataToDisplay} />}
    </MainWrapper>
  );
};

export default Home;
