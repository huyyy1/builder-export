// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmBedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.5 14V8c0-.45.092-.858.275-1.225A3.46 3.46 0 011.5 5.8V3c0-.833.292-1.542.875-2.125A2.893 2.893 0 014.5 0h4c.383 0 .742.07 1.075.212.333.142.642.338.925.588.283-.25.592-.446.925-.588A2.72 2.72 0 0112.5 0h4c.833 0 1.542.292 2.125.875S19.5 2.167 19.5 3v2.8c.3.283.542.608.725.975.183.367.275.775.275 1.225v6h-2v-2h-16v2h-2zm11-9h6V3a.967.967 0 00-.288-.712A.968.968 0 0016.5 2h-4a.968.968 0 00-.713.288A.967.967 0 0011.5 3v2zm-8 0h6V3a.968.968 0 00-.287-.712A.968.968 0 008.5 2h-4a.968.968 0 00-.712.288A.968.968 0 003.5 3v2zm-1 5h16V8a.967.967 0 00-.288-.713A.968.968 0 0017.5 7h-14a.968.968 0 00-.712.287A.968.968 0 002.5 8v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SmBedIcon;
/* prettier-ignore-end */
