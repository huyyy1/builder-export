// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        x={".343"}
        y={".348"}
        width={"31.304"}
        height={"31.304"}
        rx={"3.826"}
        stroke={"#868BF3"}
        strokeWidth={".696"}
      ></rect>

      <path d={"M8.995 17v-2h14v2h-14z"} fill={"#868BF3"}></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
