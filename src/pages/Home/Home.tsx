import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { MainWrapper, Search, ListWrapper } from "./Home.style";
import ListItem from "components/ListItem/ListItem";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <MainWrapper>
      <Search />
      <ListWrapper>
        <ListItem even={false} />
        <ListItem even={true} />
        <ListItem even={false} />
        <ListItem even={true} />
        <ListItem even={false} />
        <ListItem even={true} />
        <ListItem even={false} />
        <ListItem even={true} />
        <ListItem even={false} />
        <ListItem even={true} />
      </ListWrapper>
    </MainWrapper>
  );
};

export default Home;
