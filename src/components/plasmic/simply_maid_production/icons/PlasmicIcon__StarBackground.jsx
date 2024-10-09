// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarBackgroundIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.006 0l3.704 8.907 9.616.77L20 15.954l2.238 9.383-8.232-5.028-8.233 5.028 2.239-9.383L.685 9.678l9.616-.771L14.006 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarBackgroundIcon;
/* prettier-ignore-end */
