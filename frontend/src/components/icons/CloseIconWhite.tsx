import React from "react";

const CloseIconWhite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    cursor="pointer"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6.56494"
      y="5"
      width="40"
      height="1"
      transform="rotate(45 6.56494 5)"
      fill="white"
    />
    <rect
      x="5.15088"
      y="33"
      width="40"
      height="1"
      transform="rotate(-45 5.15088 33)"
      fill="white"
    />
  </svg>
);

export default CloseIconWhite;
