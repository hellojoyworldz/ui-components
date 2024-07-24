import React from "react";
import styled from "styled-components";
import { theme } from "../../utils/token";

const Component = styled.h1`
  font-size: ${(props) =>
    theme.fontSize[props.theme.size] || theme.fontSize.xl};
  line-height: 1.2rem;
  color: ${(props) => theme.color[props.theme.color] || theme.color.gray100};
`;

export const Heading = ({ as, title, children, ...props }) => {
  return (
    <Component as={as} {...props}>
      {title ? title : children}
    </Component>
  );
};

export default Heading;
