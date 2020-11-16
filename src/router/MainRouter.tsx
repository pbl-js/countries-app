import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "router/routes";

import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";

const MainRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.about} component={AboutUs} />
    </Switch>
  );
};

export default MainRouter;
