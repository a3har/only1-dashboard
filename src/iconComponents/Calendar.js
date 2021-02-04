import * as React from "react";

function SvgCalendar(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 2h4a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h4V0h2v2h6V0h2v2zm-2 2H7v2H5V4H2v4h16V4h-3v2h-2V4zm5 6H2v8h16v-8zM4 13h2v2H4v-2zm4 0h8v2H8v-2z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgCalendar;
