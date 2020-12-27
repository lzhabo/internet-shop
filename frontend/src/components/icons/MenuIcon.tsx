import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  @media (min-width: 1440px) {
    display: none;
  } ;
`;

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Root>
    <svg
      {...props}
      cursor="pointer"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"
        fill="currentColor"
      ></path>
    </svg>
  </Root>
);

export default MenuIcon;
