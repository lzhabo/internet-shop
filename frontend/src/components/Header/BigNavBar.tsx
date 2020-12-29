import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  //flex-direction: column;
`;

const BigNavBar: React.FC<IProps> = () => {
  return (
    <Root>
      <ul>
        <li>shop all</li>
        <li> rings</li>
        <li>necklaces</li>
        <li>bracelets</li>
        <li>earrings</li>
      </ul>
    </Root>
  );
};
export default BigNavBar;
