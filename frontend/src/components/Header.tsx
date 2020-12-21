import styled from "@emotion/styled";
import React from "react";

interface IProps {}

const Root = styled.div`
  display: flex;
  //flex-direction: column;
  min-height: 75px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header: React.FC<IProps> = () => {
  return <Root></Root>;
};
export default Header;
