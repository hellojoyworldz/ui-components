import React from "react";
import { Link } from "react-router-dom";

const isExternal = (to) => /^(http|https):\/\//i.test(to);

export const GoToLink = ({ to, children, ...props }) => {
  return isExternal(to) ? (
    <a href={to} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default GoToLink;
