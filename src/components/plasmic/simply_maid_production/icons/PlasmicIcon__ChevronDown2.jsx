// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChevronDown2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.154 6.081a.654.654 0 01.927 0l7.39 7.391 7.39-7.39a.654.654 0 11.927.926l-7.853 7.853a.654.654 0 01-.927 0L2.154 7.008a.654.654 0 010-.927z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronDown2Icon;
/* prettier-ignore-end */
