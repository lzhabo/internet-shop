import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {}

const Root = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    display: flex;
  }
  padding: 25px 0 25px;
  & > * {
    margin: 16px 24px;
  }
  &:hover {
    color: #52b48a;
  }
`;
const Nav = styled.div<{ active?: boolean }>`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #1c1b1b;
  transition: color 0.2s ease-in-out;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  list-style-type: none;
  ${({ active }) => active && "color: #52b48a"};
`;
const navData = [
  { route: "rings", displayName: "rings" },
  { route: "anklets", displayName: "anklets" },
  { route: "necklaces", displayName: "necklaces" },
  { route: "bracelets", displayName: "bracelets" },
  { route: "earrings", displayName: "earrings" },
  { route: "all", displayName: "shop all" },
];
const BigNavBar: React.FC<IProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onClick = (v: number) => {
    setActiveIndex(v);
  };
  return (
    <Root>
      {navData.map((data, index) => (
        <Link to={`/collections/${data.route}`}>
          <Nav
            key={index}
            onClick={() => onClick(index)} // pass the index
            active={activeIndex === index}
          >
            {data.displayName}
          </Nav>
        </Link>
      ))}
    </Root>
  );
};
export default BigNavBar;
