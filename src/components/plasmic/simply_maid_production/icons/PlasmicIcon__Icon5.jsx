// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon5Icon(props) {
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

      <path
        d={
          "M0 16c0 8.8 7.2 16 16 16s16-7.2 16-16S24.8 0 16 0 0 7.2 0 16zm29.867 0c0 7.627-6.24 13.867-13.867 13.867-7.627 0-13.867-6.24-13.867-13.867C2.133 8.373 8.373 2.133 16 2.133c7.627 0 13.867 6.24 13.867 13.867z"
        }
        fill={"#314351"}
      ></path>

      <path
        d={
          "M11.947 10.027c0 .266.106.533.32.746L17.493 16l-5.226 5.227a1.031 1.031 0 000 1.493 1.031 1.031 0 001.493 0l5.973-5.973a1.031 1.031 0 000-1.494L13.76 9.28a1.031 1.031 0 00-1.493 0 1.05 1.05 0 00-.32.747z"
        }
        fill={"#314351"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
