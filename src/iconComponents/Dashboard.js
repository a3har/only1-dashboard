import * as React from "react";

function SvgDashboard(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 20H4a1 1 0 01-1-1v-9H0L10.327.612a1 1 0 011.346 0L22 10h-3v9a1 1 0 01-1 1zm-6-2h5V8.157l-6-5.454-6 5.454V18h5v-6h2v6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgDashboard;
