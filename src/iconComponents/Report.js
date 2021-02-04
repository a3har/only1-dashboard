import * as React from "react";

function SvgReport(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 0v16h16v2H0V0h2zm15.293 3.293l1.414 1.414L13 10.414l-3-2.999-4.293 4.292-1.414-1.414L10 4.586l3 2.999 4.293-4.292z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgReport;
