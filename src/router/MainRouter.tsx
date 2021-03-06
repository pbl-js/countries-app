import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "router/routes";

import MainLayout from "layouts/MainLayout/MainLayout";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import PageNotFound from "pages/PageNotFound/PageNotFound";

const MainRouter: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path={routes.home}>
          <Redirect to={`${routes.countries}/1`} />
        </Route>

        <Route exact path={routes.countries}>
          <Redirect to={`${routes.countries}/1`} />
        </Route>

        <Route exact path={`${routes.countries}/:page`} component={Home} />
        <Route exact path={routes.about} component={AboutUs} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </MainLayout>
  );
};

export default MainRouter;
