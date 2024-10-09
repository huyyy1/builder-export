// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon9Icon(props) {
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
          "M2.778 30c-.75 0-1.4-.276-1.952-.826C.276 28.623 0 27.972 0 27.222V2.778c0-.75.275-1.4.826-1.952C1.377.276 2.028 0 2.778 0h24.444c.75 0 1.4.275 1.952.826.55.551.826 1.202.826 1.952v24.444c0 .75-.276 1.4-.826 1.952-.551.55-1.202.826-1.952.826H2.778zm0-15.278v12.5h24.444v-12.5h-4.167v8.333H6.945v-8.333H2.777zm6.944 5.556h10.556v-5.556H9.722v5.556zm-6.944-8.333h24.444V2.777H2.778v9.166zm5.55-3.89c-.394 0-.724-.133-.988-.4a1.357 1.357 0 01-.396-.993c0-.395.134-.724.401-.988s.598-.396.993-.396.724.133.988.4c.264.268.396.599.396.994 0 .394-.133.724-.4.988a1.357 1.357 0 01-.994.396zm6.667 0c-.395 0-.724-.133-.988-.4a1.357 1.357 0 01-.396-.993 1.36 1.36 0 011.394-1.384 1.36 1.36 0 011.384 1.394c0 .394-.134.724-.4.988a1.357 1.357 0 01-.994.396zm6.667 0c-.395 0-.724-.133-.988-.4a1.357 1.357 0 01-.396-.993 1.36 1.36 0 011.394-1.384 1.36 1.36 0 011.383 1.394c0 .394-.133.724-.4.988a1.357 1.357 0 01-.993.396z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
