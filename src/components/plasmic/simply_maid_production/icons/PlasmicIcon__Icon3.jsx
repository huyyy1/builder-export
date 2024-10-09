// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M4.819.746a.174.174 0 010 .247L.993 4.819a.174.174 0 11-.247-.246L4.573.746a.174.174 0 01.246 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.746.746a.174.174 0 000 .247l3.827 3.826a.174.174 0 10.246-.246L.993.746a.174.174 0 00-.247 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */
