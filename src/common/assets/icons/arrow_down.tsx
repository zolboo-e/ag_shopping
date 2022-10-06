import { SVGAttributes } from "react";

export const ArrowDownIcon: React.FC<SVGAttributes<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        id="arrow-alt-circle-left"
        d="M10,0A10,10,0,1,0,20,10,10.011,10.011,0,0,0,10,0Zm4.167,10.833H10v2.8a.66.66,0,0,1-1.125.46L5.193,10.46a.644.644,0,0,1,0-.92L8.875,5.906A.66.66,0,0,1,10,6.366v2.8h4.167a.833.833,0,1,1,0,1.667Z"
        transform="translate(0 20) rotate(-90)"
        fill="#cad0d7"
      />
    </svg>
  );
};
