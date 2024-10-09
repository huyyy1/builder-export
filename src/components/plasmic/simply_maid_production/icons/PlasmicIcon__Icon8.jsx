// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.422 8.445V4.489h2.222v3.956H5.422zm0 12.022v-6.578h2.222v6.578H5.422zm-2.866 6.866a2.14 2.14 0 01-1.57-.652 2.14 2.14 0 01-.653-1.57V2.89c0-.611.218-1.134.653-1.57a2.14 2.14 0 011.57-.652h16.888a2.14 2.14 0 011.57.653c.435.435.653.958.653 1.569v22.222a2.14 2.14 0 01-.653 1.57 2.14 2.14 0 01-1.57.652H2.556zm0-2.222h16.888V12.267H2.556V25.11zm0-15.067h16.888V2.89H2.556v7.155z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
