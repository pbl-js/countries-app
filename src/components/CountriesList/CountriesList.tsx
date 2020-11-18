import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { Icountry } from "apollo/queries/getCountries";

import { MainWrapper, Search, ListWrapper } from "./CountriesList.style";
import ListItem from "components/ListItem/ListItem";

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
        {itemsToDisplay.map((country) => {
          const countryData = {
            code: country.id,
            name: country.name,
            continent: country.continent.name,
          };
          return (
            <ListItem key={country.id} even={true} countryData={countryData} />
          );
        })}
      </ListWrapper>
      <ReactPaginate
        pageCount={pagesNumber}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        initialPage={initialPage}
        containerClassName="container"
        onPageChange={handlePageChange}
      />
    </MainWrapper>
  );
};

export default CountriesList;
