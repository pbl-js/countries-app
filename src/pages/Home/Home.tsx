import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES, IcountriesData } from "apollo/queries/getCountries";

import CountriesList from "components/CountriesList/CountriesList";

const Home: React.FC<RouteComponentProps> = () => {
  const { loading, error, data } = useQuery<IcountriesData>(GET_COUNTRIES);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`Error! ${error.message}`}</div>;

  return <div>{data && <CountriesList countriesData={data.countries} />}</div>;
};

export default Home;
