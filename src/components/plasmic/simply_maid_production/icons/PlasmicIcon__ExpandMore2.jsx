// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ExpandMore2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.853 9.686L0 1.832 1.832 0l6.021 6.02L13.874 0l1.833 1.832-7.854 7.854z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExpandMore2Icon;
/* prettier-ignore-end */
