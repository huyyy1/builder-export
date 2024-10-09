// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16zm0-29.867C8.373 2.133 2.133 8.373 2.133 16c0 7.627 6.24 13.867 13.867 13.867 7.627 0 13.867-6.24 13.867-13.867 0-7.627-6.24-13.867-13.867-13.867z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
