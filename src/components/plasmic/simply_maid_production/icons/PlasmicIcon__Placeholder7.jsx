// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Placeholder7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#4nQ9qZPrJDGpa)"}>
        <path
          d={"M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"}
          stroke={"currentColor"}
          strokeWidth={"1.667"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </g>

      <defs>
        <clipPath id={"4nQ9qZPrJDGpa"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Placeholder7Icon;
/* prettier-ignore-end */
