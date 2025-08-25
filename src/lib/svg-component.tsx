import * as React from "react";

const SVGComponent = ({ strokeW = 13.5411, ...props }) => (
  <svg
    width={142}
    height={78}
    viewBox="0 0 142 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M134.259 70.4438C134.259 62.104 132.617 53.8459 129.425 46.1409C126.234 38.436 121.556 31.4351 115.659 25.538C109.762 19.6409 102.761 14.9631 95.0559 11.7716C87.3509 8.58008 79.0928 6.93744 70.7531 6.93744C62.4133 6.93745 54.1552 8.58008 46.4503 11.7716C38.7453 14.9631 31.7444 19.6409 25.8473 25.538C19.9502 31.4351 15.2724 38.436 12.0809 46.1409C8.88941 53.8459 7.24677 62.104 7.24677 70.4438"
      stroke="#F2F2F2"
      strokeWidth={strokeW}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SVGComponent;
