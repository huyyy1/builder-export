// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
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
          "M4.444 14.167v-9.75h9.75v9.75h-9.75zm0 11.416v-9.75h9.75v9.75h-9.75zm11.39-11.416v-9.75h9.75v9.75h-9.75zm0 11.416v-9.75h9.75v9.75h-9.75zM7.221 11.39h4.195V7.194H7.222v4.195zm11.39 0h4.194V7.194H18.61v4.195zM7.221 22.806h4.195V18.61H7.222v4.195zm11.39 0h4.194V18.61H18.61v4.195zM2.777 30c-.75 0-1.4-.276-1.952-.826C.276 28.623 0 27.972 0 27.222V2.778c0-.75.275-1.4.826-1.952C1.377.276 2.028 0 2.778 0h24.444c.75 0 1.4.275 1.952.826.55.551.826 1.202.826 1.952v24.444c0 .75-.276 1.4-.826 1.952-.551.55-1.202.826-1.952.826H2.778zm0-2.778h24.444V2.778H2.778v24.444z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
