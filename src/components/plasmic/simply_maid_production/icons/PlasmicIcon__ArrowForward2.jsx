// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowForward2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.248 15.707H0v-3.49h21.248l-9.773-9.774L13.962 0l13.961 13.962-13.961 13.961-2.487-2.443 9.773-9.773z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForward2Icon;
/* prettier-ignore-end */
