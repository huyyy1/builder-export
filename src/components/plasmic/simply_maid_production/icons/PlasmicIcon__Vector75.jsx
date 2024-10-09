// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector75Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 293 109"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 47.245c9.55 30.389 14.996 46.298 46.63 39.268 15.846-3.521 22.086-11.048 22.086-25.77 0-9.786-14.724-7.588-14.724 2.455 0 13.105 5.23 25.883 15.952 34.223 25.04 19.477 66.595-2.65 84.668-20.725 7.182-7.18 9.139-27.352-4.908-19.088-9.921 5.836-3.909 22.895 2.454 28.905 28.826 27.226 63.559-2.204 84.396-23.042 7.002-7.002 20.812-23.078 23.451-32.314 2.139-7.487 18.332 17.22 8.863 5.044-5.48-7.046-16.479-17.297-25.906-18.407-4.546-.535 20.724-6.21 24.542-7.908C277.91 7.04 292.71-.66 288.138 7.977c-3.786 7.152-9.271 19.301-9.271 26.997"
        }
        stroke={"currentColor"}
        strokeWidth={"8"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Vector75Icon;
/* prettier-ignore-end */
