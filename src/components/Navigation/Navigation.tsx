import React from "react";
import { Link } from "react-router-dom";
import routes from "router/routes";

const Navigation: React.FC = () => {
  return (
    <div>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.about}>About</Link>
    </div>
  );
};

export default Navigation;
