// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SimplyMaidLogoLightSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 279 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#1E1E1E"} d={"M0 0h279v46H0z"}></path>

      <text
        fill={"#F35E96"}
        xmlSpace={"preserve"}
        style={{
          whiteSpace: 'pre"',
        }}
        fontFamily={"Caprasimo"}
        fontSize={"48"}
        letterSpacing={"-.04em"}
      >
        <tspan x={"152.308"} y={"36.035"}>
          -
        </tspan>
      </text>

      <text
        fill={"#fff"}
        xmlSpace={"preserve"}
        style={{
          whiteSpace: 'pre"',
        }}
        fontFamily={"Caprasimo"}
        fontSize={"48"}
        letterSpacing={"-.04em"}
      >
        <tspan x={"0"} y={"36.035"}>
          simply
        </tspan>

        <tspan x={"164.029"} y={"36.035"}>
          maid
        </tspan>
      </text>
    </svg>
  );
}

export default SimplyMaidLogoLightSvgIcon;
/* prettier-ignore-end */
