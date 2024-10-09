// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmEditIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.4 11.6V9.05L8.7.75c.122-.122.255-.211.4-.267a1.243 1.243 0 01.9 0c.144.056.278.145.4.267l.85.85c.122.122.211.256.267.4a1.244 1.244 0 010 .9 1.149 1.149 0 01-.267.4l-8.3 8.3H.4zm9.15-8.3l.85-.85-.85-.85-.85.85.85.85z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmEditIcon;
/* prettier-ignore-end */
