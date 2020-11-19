import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Icountry } from "apollo/queries/getCountries";

import { MainWrapper, Search, ListWrapper } from "./CountriesList.style";
import ListItem from "components/ListItem/ListItem";
import Paginator from "components/Paginator/Paginator";

interface ICountriesList {
  countriesData: Icountry[];
}

interface IRouteParams {
  page: string;
}

const CountriesList: React.FC<ICountriesList> = ({ countriesData }) => {
  const { page: pageParam } = useParams<IRouteParams>();
  const initialPage = parseInt(pageParam);
  const itemsPerPage = 5;
  const pagesNumber = Math.ceil(countriesData.length / itemsPerPage);
  const [offset, setOffset] = useState(initialPage * itemsPerPage);
  const [itemsToDisplay, setItemsToDisplay] = useState<Icountry[]>([]);

  const handlePageChange = (index: { selected: number }) => {
    setOffset(itemsPerPage * index.selected);
  };

  useEffect(() => {
    const newItemsToDisplay = countriesData.slice(
      offset,
      offset + itemsPerPage
    );
    setItemsToDisplay(newItemsToDisplay);
  }, [countriesData, offset]);

  return (
    <MainWrapper>
      <Search />
      <ListWrapper>
        {itemsToDisplay.map((country, index) => {
          const countryData = {
            code: country.code,
            name: country.name,
            continent: country.continent.name,
          };

          return (
            <ListItem
              key={country.code}
              even={(index + 1) % 2 === 0 ? true : false}
              countryData={countryData}
            />
          );
        })}
      </ListWrapper>

      <Paginator
        pagesNumber={pagesNumber}
        initialPage={initialPage}
        handlePageChange={handlePageChange}
      />
    </MainWrapper>
  );
};

export default CountriesList;
