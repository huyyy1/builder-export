// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarBackground2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10 0l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L10 14.5l-5.878 3.59 1.598-6.7L.49 6.91l6.865-.55L10 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarBackground2Icon;
/* prettier-ignore-end */
