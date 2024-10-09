// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 462 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M445.612 12.17c-51.383-.672-102.738-1.63-154.121-1.972-74.713-.493-149.484-1.15-223.994 2.505-15.099.74-30.198 1.425-45.268 2.192-11.824.588-19.185-1.288-21.707-5.642-2.115-3.656 2.377-6.888 10.201-6.19C37.822 5.46 64.281 1.94 91.06 1.625 141.283 1.023 191.507.27 241.76.037c36.69-.164 73.438.246 110.128.698 30.343.384 60.657 1.205 91 1.849 1.768.041 3.652.068 5.246.397 6.259 1.301 15.765 2.04 13.534 6.203-1.073 1.986-9.593 3.095-14.752 4.588-.435-.534-.84-1.069-1.275-1.603h-.029z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
