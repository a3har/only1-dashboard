import * as React from "react";

function SvgAlarm(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 15h2v2H0v-2h2V8a8 8 0 1116 0v7zm-2 0V8A6 6 0 104 8v7h12zm-9 4h6v2H7v-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlarm;
