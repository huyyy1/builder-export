// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 536 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M516.987 17.037c-59.613-.94-119.193-2.281-178.807-2.76-86.68-.69-173.427-1.61-259.871 3.508-17.518 1.035-35.035 1.994-52.52 3.067-13.718.825-22.258-1.802-25.183-7.898-2.454-5.119 2.757-9.643 11.835-8.665 31.438 3.354 62.135-1.572 93.203-2.013C163.913 1.432 222.181.378 280.483.052c42.567-.23 85.201.345 127.768.977 35.203.537 70.372 1.687 105.576 2.588 2.051.058 4.236.096 6.085.557 7.263 1.82 18.291 2.856 15.702 8.684-1.244 2.78-11.129 4.333-17.114 6.422-.504-.747-.975-1.495-1.479-2.243h-.034z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
