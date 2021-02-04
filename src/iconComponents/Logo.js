import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={21} cy={21} r={21} fill="#3954FF" />
      <path
        d="M20.25 8.25a12.75 12.75 0 100 25.5v-6.873a5.878 5.878 0 110-11.754V8.25zM21.75 33.75a12.75 12.75 0 000-25.5v6.873a5.878 5.878 0 110 11.754v6.873z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgLogo;
