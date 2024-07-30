import React from "react";

const SvgWaiting = (props) => {
  return (
    <svg {...props} className="spinning" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2" />
        <path fill="#000000" fillOpacity=".3" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z" />
      </g>
    </svg>
  );
};

export default SvgWaiting;
