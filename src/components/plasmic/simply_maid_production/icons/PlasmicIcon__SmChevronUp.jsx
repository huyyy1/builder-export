// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SmChevronUpIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"q5U3py8M395aa"}
        style={{
          maskType: 'alpha"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"0"}
        y={"0"}
        width={"24"}
        height={"24"}
      >
        <path
          transform={"rotate(180 24 24)"}
          fill={"#D9D9D9"}
          d={"M24 24h24v24H24z"}
        ></path>
      </mask>

      <g mask={"url(#q5U3py8M395aa)"}>
        <path
          d={"M12 8.625l6 6-1.4 1.4-4.6-4.6-4.6 4.6-1.4-1.4 6-6z"}
          fill={"#314351"}
        ></path>
      </g>
    </svg>
  );
}

export default SmChevronUpIcon;
/* prettier-ignore-end */
