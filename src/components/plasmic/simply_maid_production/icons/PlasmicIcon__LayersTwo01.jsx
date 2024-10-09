// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LayersTwo01Icon(props) {
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
        d={
          "M1.333 9.667l6.428 3.214a.722.722 0 00.178.074.33.33 0 00.122 0 .722.722 0 00.178-.074l6.428-3.214M1.333 6.333L7.761 3.12a.725.725 0 01.178-.074.333.333 0 01.122 0c.046.009.09.03.178.074l6.428 3.214-6.428 3.214a.725.725 0 01-.178.075.333.333 0 01-.122 0 .725.725 0 01-.178-.075L1.333 6.333z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.333"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayersTwo01Icon;
/* prettier-ignore-end */
