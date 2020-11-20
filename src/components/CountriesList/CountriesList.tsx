import React, { useState, useEffect } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { Icountry } from "apollo/queries/getCountries";
import routes from "router/routes";

import { MainWrapper, ListWrapper } from "./CountriesList.style";
import ListItem from "components/ListItem/ListItem";
import Paginator from "components/Paginator/Paginator";

interface ICountriesList {
  countriesData: Icountry[];
}

interface IRouteParams {
  page: string;
}

const CountriesList: React.FC<ICountriesList> = ({ countriesData }) => {
  const history = useHistory();
  const match = useRouteMatch("/countries/:page");
  const routeParams = useParams<IRouteParams>();

  const pageParam = parseInt(routeParams.page);
  const [currentPage, setCurrentPage] = useState(pageParam);
  const itemsPerPage = 5;
  const pagesNumber = Math.ceil(countriesData.length / itemsPerPage);
  const offset = currentPage * itemsPerPage - itemsPerPage;
  const [itemsToDisplay, setItemsToDisplay] = useState<Icountry[]>([]);

  const handlePageChange = (index: { selected: number }) => {
    setCurrentPage(index.selected + 1);
    history.push(`${routes.countries}/${index.selected + 1}`);
  };

  useEffect(() => {
    const newItemsToDisplay = countriesData.slice(
      offset,
      offset + itemsPerPage
    );
    setItemsToDisplay(newItemsToDisplay);
  }, [countriesData, currentPage, offset]);

  useEffect(() => {
    if (currentPage !== pageParam) {
      setCurrentPage(pageParam);
    }
  }, [match, currentPage, pageParam]);

  return (
    <MainWrapper>
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
        initialPage={pageParam}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </MainWrapper>
  );
};

export default CountriesList;
