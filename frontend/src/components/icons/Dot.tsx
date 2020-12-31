import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  position: absolute;
  left: 13px;
  top: 2px;
`;

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <Root>
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="black" />
    </svg>
  </Root>
);

export default MenuIcon;
