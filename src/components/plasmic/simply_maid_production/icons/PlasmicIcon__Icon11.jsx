// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.25 16.417a1.47 1.47 0 01-1.076-.452 1.47 1.47 0 01-.452-1.076c0-.417.15-.776.452-1.076.3-.301.66-.452 1.076-.452.417 0 .775.15 1.076.451.301.301.452.66.452 1.077 0 .417-.15.775-.452 1.076-.3.301-.66.452-1.076.452zm9.528 0a1.47 1.47 0 01-1.077-.452 1.47 1.47 0 01-.451-1.076c0-.417.15-.776.451-1.076a1.47 1.47 0 011.077-.452c.416 0 .775.15 1.076.451.301.301.451.66.451 1.077 0 .417-.15.775-.45 1.076-.302.301-.66.452-1.077.452zM0 30v-2.778h1.833V2.778c0-.75.276-1.4.827-1.952C3.21.276 3.86 0 4.61 0h20.78c.75 0 1.4.275 1.951.826.551.551.827 1.202.827 1.952v24.444H30V30H0zm4.611-2.778h9V2.778h-9v24.444zm11.778 0h9V2.778h-9v24.444z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon11Icon;
/* prettier-ignore-end */
