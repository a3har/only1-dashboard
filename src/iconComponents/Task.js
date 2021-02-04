import * as React from "react";

function SvgTask(props) {
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
        d="M5 4V1a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h4zm13 8H2v6h16v-6zm0-6H2v4h3V8h2v2h6V8h2v2h3V6zM7 2v2h6V2H7z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgTask;
