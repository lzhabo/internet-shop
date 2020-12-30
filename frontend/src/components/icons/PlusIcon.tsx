import React from "react";

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    cursor="pointer"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="7" width="2" height="16" fill="black" />
    <rect y="7" width="16" height="2" fill="#0C0000" />
  </svg>
);

export default PlusIcon;
