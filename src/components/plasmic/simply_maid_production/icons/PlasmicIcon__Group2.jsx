// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.013 8.107c-.266 0-.533-.107-.746-.32L7.04 2.56 1.813 7.787a1.031 1.031 0 01-1.493 0 1.031 1.031 0 010-1.494L6.293.32a1.031 1.031 0 011.494 0l5.973 5.973a1.031 1.031 0 010 1.494c-.213.213-.48.32-.747.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
