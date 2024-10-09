// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowForwardIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.175 9H0V7h12.175l-5.6-5.6L8 0l8 8-8 8-1.425-1.4 5.6-5.6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowForwardIcon;
/* prettier-ignore-end */
