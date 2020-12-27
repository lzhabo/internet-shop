import React from "react";

const CloseIconBlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    cursor="pointer"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.56494"
        y="5"
        width="40"
        height="1"
        transform="rotate(45 6.56494 5)"
        fill="black"
      />
      <rect
        x="5.15088"
        y="33"
        width="40"
        height="1"
        transform="rotate(-45 5.15088 33)"
        fill="black"
      />
    </svg>
  </svg>
);

export default CloseIconBlack;
