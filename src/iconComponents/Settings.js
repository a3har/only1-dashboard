import * as React from "react";

function SvgSettings(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0l9.5 5.5v11L10 22 .5 16.5v-11L10 0zm0 2.311L2.5 6.653v8.694l7.5 4.342 7.5-4.342V6.653L10 2.311zM10 15a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        fill="currentColor"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgSettings;
