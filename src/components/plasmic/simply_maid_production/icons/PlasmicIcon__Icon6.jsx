// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon6Icon(props) {
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

      <path
        d={"M14.995 17h-6v-2h6V9h2v6h6v2h-6v6h-2v-6z"}
        fill={"#868BF3"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
