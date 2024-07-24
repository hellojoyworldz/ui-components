import React from "react";
import Heading from "../Heading/Heading.jsx";
import styled from "styled-components";

const Component = styled.div`
  border-radius: 24px;
  border: 1px solid #ddd;
`;

export const CardItem = ({ as, title, src, ...props }) => {
  return (
    <Component {...props}>
      {src ? <img src={src} alt={title} /> : null}
      <Heading as="h3" title={title} theme />
    </Component>
  );
};

export default CardItem;
