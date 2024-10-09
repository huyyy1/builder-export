// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmChevronDownIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"oa2tnLsWgImSa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"25"}
        height={"24"}
      >
        <path fill={"#D9D9D9"} d={"M.5 0h24v24H.5z"}></path>
      </mask>

      <g mask={"url(#oa2tnLsWgImSa)"}>
        <path
          d={"M12.5 15.375l-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4-6 6z"}
          fill={"#314351"}
        ></path>
      </g>
    </svg>
  );
}

export default SmChevronDownIcon;
/* prettier-ignore-end */
